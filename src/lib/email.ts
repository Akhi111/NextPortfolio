import nodemailer from "nodemailer";

interface SendEmailParams {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail({
  name,
  email,
  subject,
  message,
}: SendEmailParams): Promise<{
  success: boolean;
  messageId?: string;
  simulated?: boolean;
}> {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT) || 587;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  const toEmail = process.env.CONTACT_EMAIL || user || "contact@portfolio.dev";

  const isGmail =
    host?.toLowerCase().includes("gmail") ||
    user?.toLowerCase().includes("@gmail.com");

  // Gmail requires the authenticated user email in the From address
  const fromEmail =
    isGmail && user
      ? `"${name} via Portfolio" <${user}>`
      : process.env.MAIL_FROM_EMAIL ||
        `"Portfolio Contact Form" <${user || "noreply@portfolio.dev"}>`;

  const submissionDate = new Date().toUTCString();

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>New Inquiry from ${encodeURIComponent(name)}</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          background-color: #05070d;
          color: #e2e8f0;
          margin: 0;
          padding: 30px 15px;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background: rgba(18, 22, 34, 0.85);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }
        .header {
          padding: 28px 32px;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.25), rgba(147, 51, 234, 0.25));
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .header h1 {
          margin: 0;
          font-size: 22px;
          color: #ffffff;
          font-weight: 700;
          letter-spacing: -0.02em;
        }
        .badge {
          display: inline-block;
          margin-top: 8px;
          font-size: 12px;
          padding: 4px 10px;
          border-radius: 9999px;
          background: rgba(56, 189, 248, 0.15);
          color: #38bdf8;
          border: 1px solid rgba(56, 189, 248, 0.3);
          font-weight: 500;
        }
        .content {
          padding: 32px;
        }
        .field {
          margin-bottom: 20px;
        }
        .label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #94a3b8;
          margin-bottom: 4px;
        }
        .value {
          font-size: 15px;
          color: #f1f5f9;
          line-height: 1.5;
        }
        .message-box {
          margin-top: 24px;
          padding: 20px;
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          color: #f8fafc;
          font-size: 15px;
          line-height: 1.6;
          white-space: pre-wrap;
        }
        .footer {
          padding: 20px 32px;
          background: rgba(10, 14, 23, 0.7);
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          text-align: center;
          font-size: 12px;
          color: #64748b;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Portfolio Message</h1>
          <span class="badge">Inquiry via Contact Form</span>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Sender Name</div>
            <div class="value"><strong>${name}</strong></div>
          </div>
          <div class="field">
            <div class="label">Sender Email</div>
            <div class="value"><a href="mailto:${email}" style="color: #60a5fa; text-decoration: none;">${email}</a></div>
          </div>
          <div class="field">
            <div class="label">Subject</div>
            <div class="value">${subject}</div>
          </div>
          <div class="field">
            <div class="label">Submitted At</div>
            <div class="value">${submissionDate}</div>
          </div>
          <div class="field">
            <div class="label">Message</div>
            <div class="message-box">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
          </div>
        </div>
        <div class="footer">
          Delivered from Akhil's Portfolio serverless endpoint.
        </div>
      </div>
    </body>
    </html>
  `;

  // If SMTP is not provided, simulate success in dev / unconfigured environments so the UI won't fail
  if (!user || !pass) {
    console.info(
      `[DEV EMAIL SIMULATION] SMTP credentials missing in .env.local. Would have sent email to "${toEmail}":\nFrom: "${name}" <${email}>\nSubject: ${subject}\nMessage: ${message}`,
    );
    return {
      success: true,
      messageId: `simulated-${Date.now()}`,
      simulated: true,
    };
  }

  // Create transporter with proper configuration
  const transporter = nodemailer.createTransport(
    isGmail
      ? {
          service: "gmail",
          auth: {
            user,
            pass,
          },
        }
      : {
          host: host || "smtp.gmail.com",
          port,
          secure: port === 465,
          auth: {
            user,
            pass,
          },
          tls: {
            rejectUnauthorized: false,
          },
        },
  );

  const info = await transporter.sendMail({
    from: fromEmail,
    to: toEmail,
    replyTo: `"${name}" <${email}>`,
    subject: `${subject} - from ${name}`,
    text: `New Portfolio Message:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nDate: ${submissionDate}\n\nMessage:\n${message}`,
    html: htmlContent,
  });

  return {
    success: true,
    messageId: info.messageId,
    simulated: false,
  };
}
