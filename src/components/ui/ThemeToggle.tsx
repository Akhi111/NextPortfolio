"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className, showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-8 h-8 rounded-full border border-white/10 dark:border-white/10 bg-white/5" />
    );
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className={`relative inline-flex items-center justify-center p-2 rounded-full border transition-all duration-300 cursor-pointer overflow-hidden ${
        isDark
          ? "border-white/15 bg-white/5 text-amber-300 hover:bg-white/10 hover:border-amber-400/40 shadow-[0_0_15px_rgba(251,191,36,0.15)]"
          : "border-slate-300/80 bg-white/80 text-sky-600 hover:bg-white hover:border-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.2)]"
      } ${className || ""}`}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="flex items-center gap-2"
          >
            <Moon className="w-4 h-4" />
            {showLabel && <span className="text-xs font-medium text-slate-300">Dark</span>}
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: 90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="flex items-center gap-2"
          >
            <Sun className="w-4 h-4 text-amber-500" />
            {showLabel && <span className="text-xs font-medium text-slate-700">Light</span>}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

