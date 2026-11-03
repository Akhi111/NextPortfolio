"use client";

import React from "react";
import { ArrowUp, Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com",
      icon: <Github className="w-4 h-4" />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: <Linkedin className="w-4 h-4" />,
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: <Twitter className="w-4 h-4" />,
    },
    {
      name: "Email",
      href: "mailto:alex.developer@example.com",
      icon: <Mail className="w-4 h-4" />,
    },
  ];

  return (
    <footer className="relative border-t border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-[#040711]/90 backdrop-blur-2xl py-12 px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* Background ambient sheen */}
      <div
        className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-t from-sky-500/10 to-transparent blur-[100px]"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full border border-sky-400/40 bg-sky-500/20 flex items-center justify-center">
              <span className="text-xs font-bold text-slate-900 dark:text-white">
                A
              </span>
            </div>
            <span className="font-semibold text-sm tracking-wide text-slate-900 dark:text-white">
              Akhil Acharekar
            </span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 max-w-sm">
            Crafting futuristic, high-performance web experiences.
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex items-center flex-wrap justify-center gap-6 text-xs text-slate-600 dark:text-slate-400">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-sky-600 dark:hover:text-sky-300 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Icons & Back to Top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white hover:border-slate-400/40 dark:hover:border-white/25 hover:bg-white dark:hover:bg-white/10 transition-all cursor-pointer"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl border border-sky-400/30 bg-sky-500/10 text-sky-700 dark:text-sky-300 hover:bg-sky-500/20 hover:border-sky-400/60 transition-all cursor-pointer shadow-[0_0_15px_rgba(56,189,248,0.2)]"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Bottom Sub-row */}
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
        <div>
          &copy; {new Date().getFullYear()} Akhil Acharekar. All rights
          reserved.
        </div>
        <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
          <span>Designed &amp; Developed with</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
          <span>passion &amp; precision.</span>
        </div>
      </div>
    </footer>
  );
}
