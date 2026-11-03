"use client";

import React, { useRef, useState } from "react";
import { HTMLMotionProps, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  enableTilt?: boolean;
  tiltIntensity?: number;
  glowColor?: "cyan" | "blue" | "purple" | "default";
}

export function GlassCard({
  children,
  className,
  enableTilt = false,
  tiltIntensity = 12,
  glowColor = "default",
  onMouseMove: customMouseMove,
  onMouseEnter: customMouseEnter,
  onMouseLeave: customMouseLeave,
  style: customStyle,
  ...props
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tilt physics using Framer Motion springs
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { stiffness: 200, damping: 25 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const rotateX = useTransform(smoothY, [0, 1], [tiltIntensity, -tiltIntensity]);
  const rotateY = useTransform(smoothX, [0, 1], [-tiltIntensity, tiltIntensity]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (customMouseMove) customMouseMove(e);
    if (!enableTilt || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const clientX = (e.clientX - rect.left) / rect.width;
    const clientY = (e.clientY - rect.top) / rect.height;
    x.set(clientX);
    y.set(clientY);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (customMouseEnter) customMouseEnter(e);
    setIsHovered(true);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (customMouseLeave) customMouseLeave(e);
    setIsHovered(false);
    x.set(0.5);
    y.set(0.5);
  };

  const glowStyles = {
    cyan: "group-hover:shadow-[0_0_50px_rgba(34,211,238,0.25)] group-hover:border-cyan-500/40 dark:group-hover:border-cyan-500/40",
    blue: "group-hover:shadow-[0_0_50px_rgba(56,189,248,0.25)] group-hover:border-sky-500/40 dark:group-hover:border-sky-500/40",
    purple: "group-hover:shadow-[0_0_50px_rgba(168,85,247,0.25)] group-hover:border-purple-500/40 dark:group-hover:border-purple-500/40",
    default:
      "group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] group-hover:border-slate-400/40 dark:group-hover:border-white/25",
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        ...(enableTilt ? { transformStyle: "preserve-3d", rotateX, rotateY } : {}),
        ...customStyle,
      }}
      className={cn(
        "group relative rounded-2xl border backdrop-blur-xl transition-all duration-300",
        "bg-white/70 border-slate-200/90 text-slate-800 shadow-[0_8px_30px_rgba(0,0,0,0.06)]",
        "dark:bg-slate-950/40 dark:border-white/10 dark:text-slate-100 dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)]",
        glowStyles[glowColor],
        className
      )}
      {...props}
    >
      {/* Liquid Glass Highlight Reflection */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-60 dark:from-white/10 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />

      {/* Dynamic Cursor Spotlight for interactive feel */}
      {isHovered && enableTilt && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(400px circle at ${smoothX.get() * 100}% ${
              smoothY.get() * 100
            }%, rgba(56, 189, 248, 0.15), transparent 70%)`,
          }}
          aria-hidden="true"
        />
      )}

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
