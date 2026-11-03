"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Code2, Database, Server, Wrench } from "lucide-react";
import { skillCategories } from "@/data/skills";
import { GlassCard } from "../ui/GlassCard";

export function Skills() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);

  const categoryIcons = [
    <Code2 key="code" className="w-4 h-4 text-sky-500" />,
    <Server key="server" className="w-4 h-4 text-purple-500" />,
    <Database key="db" className="w-4 h-4 text-cyan-500" />,
    <Wrench key="wrench" className="w-4 h-4 text-emerald-500" />,
  ];

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-400/30 bg-sky-500/10 text-sky-700 dark:text-sky-300 text-xs font-medium mb-4"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Core Competencies</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4"
        >
          Technical Arsenal &amp; Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed"
        >
          Specialized in high-performance frontend graphics, distributed backend systems, and modern cloud deployment pipelines.
        </motion.p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
        {skillCategories.map((cat, idx) => {
          const isActive = activeCategoryIndex === idx;
          return (
            <button
              key={cat.category}
              onClick={() => setActiveCategoryIndex(idx)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium border transition-all cursor-pointer ${
                isActive
                  ? "bg-sky-500/15 dark:bg-gradient-to-r dark:from-sky-500/20 dark:to-purple-500/20 border-sky-400/50 text-slate-900 dark:text-white font-semibold shadow-[0_0_20px_rgba(56,189,248,0.2)]"
                  : "bg-white/80 dark:bg-white/5 border-slate-200/90 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white hover:bg-white dark:hover:bg-white/10"
              }`}
            >
              {categoryIcons[idx % categoryIcons.length]}
              <span>{cat.category}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Category Skills Display */}
      <motion.div
        key={activeCategoryIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {skillCategories[activeCategoryIndex].skills.map((skill, idx) => (
          <GlassCard
            key={skill.name}
            enableTilt
            tiltIntensity={6}
            glowColor={idx % 2 === 0 ? "cyan" : "purple"}
            className="p-5"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-semibold text-sm text-slate-900 dark:text-white">{skill.name}</span>
              <span className="text-xs font-mono font-medium text-sky-600 dark:text-sky-400">{skill.level}%</span>
            </div>

            {/* Proficiency progress bar */}
            <div className="h-1.5 w-full rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.05 }}
                className="h-full rounded-full bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-500 shadow-[0_0_10px_rgba(56,189,248,0.6)]"
              />
            </div>
          </GlassCard>
        ))}
      </motion.div>

      {/* All Skills Floating Badges Cloud */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 p-8 rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white/60 dark:bg-slate-950/40 backdrop-blur-xl"
      >
        <h4 className="text-center text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-6">
          Complete Technology Ecosystem
        </h4>
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {skillCategories.flatMap((cat) => cat.skills).map((s) => (
            <span
              key={s.name}
              className="px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 text-xs text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white hover:border-sky-400/40 hover:bg-sky-500/10 transition-all cursor-default"
            >
              {s.name}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
