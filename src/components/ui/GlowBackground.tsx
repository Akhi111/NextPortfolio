"use client";

import React from "react";
import { motion } from "framer-motion";

export function GlowBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden transition-colors duration-500">
      {/* Foundation background */}
      <div className="absolute inset-0 bg-[#03060c] dark:bg-[#03060c] [html:not(.dark)_&]:bg-[#f3f6fc]" />

      {/* Top Ambient Glow - Cyan/Blue */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[700px] h-[550px] rounded-full bg-gradient-to-b from-sky-500/25 via-blue-600/15 to-transparent blur-[140px] dark:opacity-100 [html:not(.dark)_&]:opacity-70 [html:not(.dark)_&]:from-sky-300/30 [html:not(.dark)_&]:via-blue-300/20"
      />

      {/* Mid Left Violet Accent */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.12, 0.22, 0.12],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-[35%] -left-[10%] w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-purple-600/20 via-violet-500/10 to-transparent blur-[130px] dark:opacity-100 [html:not(.dark)_&]:opacity-60 [html:not(.dark)_&]:from-purple-300/25"
      />

      {/* Mid Right Cyan/Teal Accent */}
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.12, 0.2, 0.12],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute top-[60%] -right-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-cyan-500/15 via-sky-600/10 to-transparent blur-[140px] dark:opacity-100 [html:not(.dark)_&]:opacity-60 [html:not(.dark)_&]:from-cyan-300/25"
      />

      {/* Subtle Micro-Grid Depth */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] [html:not(.dark)_&]:bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"
        aria-hidden="true"
      />
    </div>
  );
}
