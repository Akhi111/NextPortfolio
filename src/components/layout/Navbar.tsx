"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../ui/ThemeToggle";

const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section spy
      const sections = ["home", "projects", "experience", "skills", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(targetId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "pointer-events-auto flex items-center justify-between gap-3 sm:gap-4 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300",
          "border backdrop-blur-2xl",
          scrolled
            ? "border-slate-300/80 dark:border-white/20 bg-white/85 dark:bg-[#060a14]/85 shadow-[0_15px_35px_rgba(0,0,0,0.1)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.7)]"
            : "border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-[#080d1a]/70 shadow-[0_10px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_10px_35px_rgba(0,0,0,0.5)]",
        )}
      >
        {/* Monogram / Logo */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, "#home")}
          className="flex items-center gap-2 group cursor-pointer"
          aria-label="Home"
        >
          <div className="relative w-8 h-8 rounded-full border border-sky-400/40 bg-gradient-to-tr from-sky-500/20 to-purple-500/20 flex items-center justify-center shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-transform duration-300 group-hover:scale-105">
            <span className="text-xs font-black tracking-wider text-slate-900 dark:text-white">
              A
            </span>
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-cyan-400 animate-ping opacity-75" />
          </div>
          <span className="hidden md:inline-block text-xs font-semibold tracking-wider uppercase text-slate-700 dark:text-slate-300 group-hover:text-black dark:group-hover:text-white transition-colors">
            Akhil
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 relative">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={cn(
                  "relative px-4 py-1.5 text-xs font-medium tracking-wide transition-colors duration-200 cursor-pointer rounded-full",
                  isActive
                    ? "text-slate-950 dark:text-white font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200",
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full border border-sky-400/30 dark:border-white/20 bg-sky-500/10 dark:bg-gradient-to-r dark:from-sky-500/20 dark:via-blue-500/25 dark:to-purple-500/20 shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </a>
            );
          })}
        </div>

        {/* Action Button & Theme Toggle */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle Button */}
          <ThemeToggle />

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-full border border-sky-400/30 bg-sky-500/10 text-sky-700 dark:text-sky-300 hover:bg-sky-500/20 hover:border-sky-400/50 transition-all cursor-pointer shadow-[0_0_15px_rgba(56,189,248,0.2)]"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="pointer-events-auto absolute top-20 left-4 right-4 md:hidden rounded-2xl border border-slate-200/80 dark:border-white/15 bg-white/95 dark:bg-[#090d1c]/95 backdrop-blur-2xl p-5 shadow-2xl z-50 text-slate-900 dark:text-slate-100"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={cn(
                      "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all",
                      isActive
                        ? "bg-sky-500/10 dark:bg-white/10 text-sky-600 dark:text-white border border-sky-400/30 dark:border-white/15"
                        : "text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5",
                    )}
                  >
                    <span>{item.name}</span>
                    {isActive && <Sparkles className="w-4 h-4 text-sky-400" />}
                  </a>
                );
              })}

              <div className="pt-3 mt-2 border-t border-slate-200 dark:border-white/10 flex items-center justify-between gap-3">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Theme
                </span>
                <ThemeToggle showLabel />
              </div>

              <div className="pt-2 mt-1">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "#contact")}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-sky-400/40 bg-sky-500/20 text-sky-700 dark:text-sky-200 text-sm font-medium"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
