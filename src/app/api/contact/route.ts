import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { sendContactEmail } from "@/lib/email";
import { ContactApiResponse } from "@/types";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// In-memory rate limiting map: ip -> array of request timestamps
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();

  // Lazy cleanup if map exceeds 500 IPs to prevent memory growth without needing top-level setInterval
  if (rateLimitMap.size > 500) {
    rateLimitMap.forEach((timestamps, key) => {
      const valid = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
      if (valid.length === 0) {
        rateLimitMap.delete(key);
      } else {
        rateLimitMap.set(key, valid);
      }
    });
  }

  const timestamps = rateLimitMap.get(ip) || [];
  
  // Filter out timestamps older than the sliding window
  const recentTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  
  if (recentTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    rateLimitMap.set(ip, recentTimestamps);
    return true;
  }
  
  recentTimestamps.push(now);
  rateLimitMap.set(ip, recentTimestamps);
  return false;
}

function sanitizeInput(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .trim();
}

export async function POST(request: NextRequest): Promise<NextResponse<ContactApiResponse>> {
  try {
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

    // Rate limiting check
    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many requests. Please wait a few minutes before trying again.",
          error: "RATE_LIMIT_EXCEEDED",
        },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Honeypot check for bots
    if (body.honeypot && body.honeypot.trim().length > 0) {
      // Return 200 to trick bots into thinking message was delivered
      return NextResponse.json({
        success: true,
        message: "Message received.",
      });
    }

    // Validation using Zod
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      const issue = validationResult.error.issues[0]?.message || "Invalid form data.";
      return NextResponse.json(
        {
          success: false,
          message: issue,
          error: "VALIDATION_ERROR",
        },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = validationResult.data;

    // Sanitize
    const sanitizedData = {
      name: sanitizeInput(name),
      email: email.trim().toLowerCase(),
      subject: sanitizeInput(subject),
      message: sanitizeInput(message),
    };

    // Send email
    const result = await sendContactEmail(sanitizedData);

    return NextResponse.json(
      {
        success: true,
        message: result.simulated
          ? "Message received! (SMTP simulated in development mode because SMTP credentials were not found)"
          : "Thank you! Your message has been sent successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    const errorDetails = error instanceof Error ? error.message : String(error);
    console.error("[CONTACT API ERROR] Failed to send email:", errorDetails);
    
    return NextResponse.json(
      {
        success: false,
        message:
          process.env.NODE_ENV === "development"
            ? `Failed to dispatch email: ${errorDetails}`
            : "Failed to dispatch your message. Please try again or reach out directly via email.",
        error: "EMAIL_SEND_FAILED",
      },
      { status: 500 }
    );
  }
}
