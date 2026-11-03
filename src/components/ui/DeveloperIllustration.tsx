"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, Code, Sparkles, CheckCircle2 } from "lucide-react";

export function DeveloperIllustration() {
  return (
    <div className="relative w-full max-w-[500px] mx-auto flex items-center justify-center select-none">
      {/* Ambient Radial Glow Backdrop */}
      <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-sky-500/25 via-indigo-500/20 to-purple-500/25 blur-3xl opacity-70 pointer-events-none" />

      {/* Main Illustration Floating Container */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-full rounded-3xl border border-slate-200/90 dark:border-white/15 bg-white/70 dark:bg-slate-950/50 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
      >
        {/* Top Floating Glass Badge: Live Status */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute -top-4 -right-2 sm:-right-4 px-3.5 py-1.5 rounded-full border border-sky-400/40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-lg flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-sky-300 z-20"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span>Coding Session Live</span>
        </motion.div>

        {/* Vector SVG: Man / Developer Working on PC */}
        <div className="w-full aspect-[4/3] flex items-center justify-center">
          <svg
            viewBox="0 0 520 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-md"
          >
            <defs>
              {/* Gradients for desk, screens, chair & developer */}
              <linearGradient id="screenGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#818cf8" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="screenDark" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#1e293b" />
              </linearGradient>
              <linearGradient id="deskGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#334155" />
                <stop offset="50%" stopColor="#475569" />
                <stop offset="100%" stopColor="#334155" />
              </linearGradient>
              <linearGradient id="hoodieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0284c7" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
              <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fcd34d" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
              <linearGradient id="chairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
              <linearGradient id="lightBeam" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Back Wall Glow & Window Element */}
            <circle cx="260" cy="180" r="160" fill="url(#lightBeam)" />

            {/* Shelf & Books / Plants in background */}
            <rect x="80" y="80" width="130" height="6" rx="3" fill="#64748b" opacity="0.6" />
            <rect x="90" y="55" width="14" height="25" rx="2" fill="#38bdf8" opacity="0.7" />
            <rect x="107" y="60" width="12" height="20" rx="2" fill="#a855f7" opacity="0.7" />
            <rect x="122" y="50" width="16" height="30" rx="2" fill="#0284c7" opacity="0.7" />
            {/* Small succulent plant */}
            <path d="M180 65 Q185 55 190 65 Q195 55 200 65 Z" fill="#10b981" />
            <rect x="182" y="65" width="16" height="15" rx="3" fill="#cbd5e1" opacity="0.8" />

            {/* Ergonomic Office Chair (Backrest) */}
            <rect x="135" y="160" width="75" height="120" rx="14" fill="url(#chairGrad)" stroke="#475569" strokeWidth="2" />
            <rect x="155" y="130" width="35" height="25" rx="8" fill="#334155" />
            <path d="M172 280 L172 350 M145 350 L200 350" stroke="#475569" strokeWidth="5" strokeLinecap="round" />

            {/* Developer Figure (Sitting & Working) */}
            {/* Body / Hoodie */}
            <path
              d="M150 205 Q172 195 195 205 L215 285 Q172 295 130 285 Z"
              fill="url(#hoodieGrad)"
            />

            {/* Head & Hair */}
            <ellipse cx="172" cy="165" rx="18" ry="21" fill="url(#skinGrad)" />
            {/* Hair modern crop */}
            <path
              d="M154 165 C154 148 162 142 175 142 C188 142 192 150 192 160 C186 156 178 155 168 158 Z"
              fill="#1e293b"
            />
            {/* Over-ear headphones */}
            <rect x="150" y="157" width="6" height="16" rx="3" fill="#38bdf8" />
            <rect x="188" y="157" width="6" height="16" rx="3" fill="#38bdf8" />
            <path d="M153 158 C153 144 191 144 191 158" stroke="#38bdf8" strokeWidth="3" fill="none" />

            {/* Arms extending toward keyboard */}
            <path
              d="M190 220 Q230 235 270 252"
              stroke="#0284c7"
              strokeWidth="14"
              strokeLinecap="round"
            />
            <path
              d="M165 225 Q210 245 255 258"
              stroke="#0369a1"
              strokeWidth="12"
              strokeLinecap="round"
            />
            {/* Hands typing */}
            <circle cx="270" cy="252" r="7" fill="url(#skinGrad)" />
            <circle cx="255" cy="258" r="7" fill="url(#skinGrad)" />

            {/* Modern Desk Surface */}
            <rect x="50" y="270" width="420" height="14" rx="5" fill="url(#deskGrad)" />
            <path d="M85 284 L85 375 M435 284 L435 375" stroke="#475569" strokeWidth="6" strokeLinecap="round" />

            {/* Large Primary Monitor */}
            {/* Monitor Stand */}
            <rect x="305" y="240" width="30" height="32" rx="2" fill="#64748b" />
            <rect x="290" y="268" width="60" height="4" rx="2" fill="#475569" />

            {/* Monitor Bezel */}
            <rect x="235" y="130" width="170" height="115" rx="8" fill="url(#screenDark)" stroke="#38bdf8" strokeWidth="2" />

            {/* Screen Inner Display: Code Editor UI */}
            <rect x="240" y="135" width="160" height="105" rx="5" fill="#090d16" />
            {/* Window Top Bar with traffic dots */}
            <circle cx="248" cy="142" r="2.5" fill="#ef4444" />
            <circle cx="255" cy="142" r="2.5" fill="#eab308" />
            <circle cx="262" cy="142" r="2.5" fill="#10b981" />
            {/* Code Lines on Screen */}
            <rect x="248" y="152" width="45" height="3" rx="1.5" fill="#38bdf8" />
            <rect x="298" y="152" width="35" height="3" rx="1.5" fill="#c084fc" />
            <rect x="256" y="160" width="55" height="3" rx="1.5" fill="#94a3b8" />
            <rect x="256" y="168" width="70" height="3" rx="1.5" fill="#38bdf8" />
            <rect x="264" y="176" width="40" height="3" rx="1.5" fill="#34d399" />
            <rect x="264" y="184" width="55" height="3" rx="1.5" fill="#f43f5e" />
            <rect x="256" y="192" width="80" height="3" rx="1.5" fill="#818cf8" />
            <rect x="248" y="200" width="30" height="3" rx="1.5" fill="#c084fc" />
            {/* Code cursor */}
            <rect x="282" y="199" width="2" height="5" fill="#38bdf8" />
            {/* Terminal Window at bottom of screen */}
            <rect x="244" y="212" width="152" height="24" rx="3" fill="#030712" />
            <rect x="248" y="218" width="50" height="2" rx="1" fill="#10b981" />
            <rect x="248" y="224" width="80" height="2" rx="1" fill="#64748b" />

            {/* Secondary Vertical Monitor (Left Side) */}
            <rect x="200" y="145" width="28" height="95" rx="4" fill="url(#screenDark)" stroke="#64748b" strokeWidth="1.5" />
            <rect x="203" y="148" width="22" height="89" rx="2" fill="#050811" />
            <rect x="206" y="155" width="16" height="2" fill="#38bdf8" opacity="0.8" />
            <rect x="206" y="161" width="12" height="2" fill="#818cf8" opacity="0.8" />
            <rect x="206" y="167" width="14" height="2" fill="#c084fc" opacity="0.8" />
            <rect x="206" y="173" width="10" height="2" fill="#34d399" opacity="0.8" />
            <rect x="206" y="179" width="15" height="2" fill="#94a3b8" opacity="0.8" />

            {/* Glowing Mechanical Keyboard */}
            <rect x="245" y="254" width="70" height="10" rx="2" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />
            {/* Glowing key rows */}
            <line x1="248" y1="257" x2="312" y2="257" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 2" />
            <line x1="248" y1="261" x2="312" y2="261" stroke="#818cf8" strokeWidth="1.5" strokeDasharray="3 2" />

            {/* Wireless Mouse */}
            <ellipse cx="330" cy="259" rx="5" ry="7" fill="#334155" stroke="#38bdf8" strokeWidth="0.8" />

            {/* Coffee Mug on Desk */}
            <rect x="365" y="252" width="14" height="16" rx="2" fill="#f8fafc" />
            <path d="M379 255 Q384 260 379 265" stroke="#f8fafc" strokeWidth="2" fill="none" />
            {/* Coffee Steam */}
            <path d="M370 248 Q372 242 369 238" stroke="#94a3b8" strokeWidth="1.2" fill="none" opacity="0.6" />
            <path d="M374 249 Q376 243 373 239" stroke="#94a3b8" strokeWidth="1.2" fill="none" opacity="0.6" />

            {/* Desk Mat */}
            <rect x="230" y="250" width="125" height="18" rx="3" fill="#0f172a" opacity="0.4" />

            {/* Liquid Cooled PC Tower on Desk (Right side) */}
            <rect x="415" y="180" width="45" height="85" rx="5" fill="#0b0f19" stroke="#818cf8" strokeWidth="1.5" />
            {/* Glass panel with glowing fan & tubes */}
            <rect x="418" y="184" width="39" height="77" rx="3" fill="#020617" />
            <circle cx="437" cy="202" r="11" fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 2" />
            <circle cx="437" cy="235" r="11" fill="none" stroke="#a855f7" strokeWidth="2" strokeDasharray="4 2" />
            {/* RAM sticks with RGB */}
            <rect x="422" y="218" width="2" height="12" fill="#38bdf8" />
            <rect x="426" y="218" width="2" height="12" fill="#c084fc" />
          </svg>
        </div>

        {/* Bottom Floating Glass Badge: Tech Stacks */}
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-4 -left-2 sm:-left-4 px-3.5 py-2 rounded-2xl border border-purple-400/30 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-lg flex items-center gap-2.5 z-20"
        >
          <div className="p-1 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400">
            <Code className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-slate-800 dark:text-white flex items-center gap-1">
              <span>Next.js • React • TypeScript</span>
            </div>
            <div className="text-[9px] text-slate-500 dark:text-slate-400">High-Performance Clean Code</div>
          </div>
        </motion.div>

        {/* Small Floating Pill: Optimization Score */}
        <motion.div
          animate={{ x: [-4, 4, -4] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="hidden sm:flex absolute top-1/2 -right-6 -translate-y-1/2 px-2.5 py-1.5 rounded-xl border border-emerald-400/40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-md items-center gap-1.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-300 z-20"
        >
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
          <span>100% Responsive</span>
        </motion.div>
      </motion.div>
    </div>
  );
}

