import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GlowBackground } from "@/components/ui/GlowBackground";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akhil Acharekar | Senior Full-Stack Developer",
  description:
    "Futuristic developer portfolio featuring Apple Liquid Glass UI aesthetics, interactive Three.js 3D graphics, Next.js App Router, and high-performance engineering.",
  keywords: [
    "Next.js",
    "Three.js",
    "React Three Fiber",
    "Apple Liquid Glass",
    "Glassmorphism",
    "Developer Portfolio",
    "Full-Stack Engineer",
    "Creative Developer",
    "TypeScript",
    "Tailwind CSS",
  ],
  authors: [{ name: "Alex Daniels" }],
  creator: "Alex Daniels",
  metadataBase: new URL("https://portfolio.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio.dev",
    title: "Alex Daniels | Senior Full-Stack & 3D Web Architect",
    description:
      "Futuristic developer portfolio built with Next.js, Three.js, and Apple Liquid Glass design language.",
    siteName: "Alex Daniels Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Daniels | Senior Full-Stack & 3D Web Architect",
    description:
      "Futuristic developer portfolio built with Next.js, Three.js, and Apple Liquid Glass design language.",
    creator: "@alexdaniels",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#03060c",
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        {/* Anti-FOUC script: Defaults to Dark theme, reads localStorage if previously toggled */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('portfolio-theme');
                  if (saved === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen transition-colors duration-300 font-sans antialiased selection:bg-sky-500/30 selection:text-white">
        <ThemeProvider>
          <ScrollProgress />
          <GlowBackground />
          <Navbar />
          <main className="relative z-10 flex flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
