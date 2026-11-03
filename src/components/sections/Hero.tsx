"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  Sparkles,
  Code2,
  Layers,
  Cpu,
} from "lucide-react";
import { GlassButton } from "../ui/GlassButton";
import { DeveloperIllustration } from "../ui/DeveloperIllustration";

export function Hero() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Akhi111",
      icon: <Github className="w-4 h-4" />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/akhil-acharekar-669528148",
      icon: <Linkedin className="w-4 h-4" />,
    },
    // {
    //   name: "Twitter",
    //   href: "https://twitter.com",
    //   icon: <Twitter className="w-4 h-4" />,
    // },
  ];

  const highlights = [
    {
      label: "Years Experience",
      value: "2+",
      icon: <Code2 className="w-4 h-4 text-sky-500" />,
    },
    {
      label: "Shipped Projects",
      value: "7+",
      icon: <Layers className="w-4 h-4 text-purple-500" />,
    },
    {
      label: "Code Quality",
      value: "100%",
      icon: <Cpu className="w-4 h-4 text-cyan-500" />,
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 sm:pt-36 sm:pb-24 flex items-center justify-center px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start z-10 text-left">
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(16,185,129,0.15)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold tracking-wide text-emerald-700 dark:text-emerald-300">
              Available for Opportunities
            </span>
          </motion.div>

          {/* Large Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6 text-slate-900 dark:text-white"
          >
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 dark:from-sky-400 dark:via-indigo-300 dark:to-purple-400 text-glow">
              Software
            </span>{" "}
            That Works For Everyone.
          </motion.h1>

          {/* Animated Subtitle / Role Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2 text-sm sm:text-base font-medium text-sky-600 dark:text-sky-300/90 mb-4"
          >
            <Sparkles className="w-4 h-4 text-cyan-500 animate-pulse" />
            <span>Senior Full-Stack Developer</span>
          </motion.div>

          {/* Short Professional Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-600 dark:text-slate-300/90 text-base sm:text-lg max-w-xl leading-relaxed mb-8 font-normal"
          >
            I design, build and ship complete web applications, from
            pixel-perfect UI to performant APIs, with a focus on usability,
            speed and maintainability.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <a href="#projects" className="inline-block">
              <GlassButton
                variant="cyan"
                size="lg"
                glow
                icon={
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                }
                iconPosition="right"
              >
                Explore My Work
              </GlassButton>
            </a>

            <a href="#contact" className="inline-block">
              <GlassButton variant="secondary" size="lg">
                Let&apos;s Connect
              </GlassButton>
            </a>
          </motion.div>

          {/* Social Links & Highlights Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-6 border-t border-slate-200 dark:border-white/10 w-full"
          >
            {/* Social icons */}
            <div className="flex items-center gap-2.5">
              <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mr-1">
                Follow:
              </span>
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl border border-slate-200/80 dark:border-white/10 bg-white/60 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white hover:bg-white dark:hover:bg-white/10 hover:border-slate-400/50 dark:hover:border-white/25 transition-all cursor-pointer"
                  aria-label={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Quick stats badges */}
            <div className="flex items-center gap-4 sm:ml-auto">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5">
                    {h.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      {h.value}
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 leading-none">
                      {h.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Vector Illustration of Developer Working on PC */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex items-center justify-center w-full"
        >
          {/* Subtle Ambient Ring behind illustration */}
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-sky-400/20 via-purple-500/15 to-transparent blur-3xl pointer-events-none" />

          {/* Vector Developer Illustration */}
          <DeveloperIllustration />
        </motion.div>
      </div>
    </section>
  );
}
