"use client";

import React from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "ghost" | "cyan";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  glow?: boolean;
}

export function GlassButton({
  variant = "primary",
  size = "md",
  children,
  icon,
  iconPosition = "right",
  glow = false,
  className,
  disabled,
  ...props
}: GlassButtonProps) {
  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs rounded-lg gap-1.5",
    md: "px-5 py-2.5 text-sm rounded-xl gap-2",
    lg: "px-7 py-3 text-base rounded-xl gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-slate-900 text-white border-slate-800 hover:bg-slate-800 dark:bg-white/10 dark:text-white dark:border-white/20 dark:hover:bg-white/15 dark:hover:border-white/40 active:scale-[0.98]",
    cyan:
      "bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/25 hover:border-cyan-400 active:scale-[0.98]",
    secondary:
      "bg-white/80 text-slate-800 border-slate-300/80 hover:bg-white hover:text-slate-950 hover:border-slate-400 dark:bg-slate-900/40 dark:text-slate-200 dark:border-white/10 dark:hover:bg-slate-800/60 dark:hover:text-white dark:hover:border-white/20 active:scale-[0.98]",
    ghost:
      "bg-transparent text-slate-700 dark:text-slate-300 border-transparent hover:bg-black/5 dark:hover:bg-white/5 active:scale-[0.98]",
  };

  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      disabled={disabled}
      className={cn(
        "relative inline-flex items-center justify-center font-medium border backdrop-blur-md transition-all duration-200 shadow-sm disabled:opacity-50 disabled:pointer-events-none cursor-pointer overflow-hidden group",
        sizeStyles[size],
        variantStyles[variant],
        glow && "shadow-[0_0_20px_rgba(56,189,248,0.25)]",
        className
      )}
      {...props}
    >
      {/* Light sheen animation across glass surface */}
      <div
        className="pointer-events-none absolute -left-full top-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent transition-all duration-700 group-hover:translate-x-[200%]"
        aria-hidden="true"
      />

      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span className="relative z-10">{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </motion.button>
  );
}
