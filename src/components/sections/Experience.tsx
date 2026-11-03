"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle, Sparkles } from "lucide-react";
import { experienceData } from "@/data/experience";
import { GlassCard } from "../ui/GlassCard";

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const lineHeight = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-400/30 bg-sky-500/10 text-sky-700 dark:text-sky-300 text-xs font-medium mb-4"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Career Journey</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4"
        >
          Professional Experience
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed"
        >
          Proven track record leading engineering initiatives, scaling WebGL 3D systems, and delivering mission-critical applications.
        </motion.p>
      </div>

      {/* Timeline Container */}
      <div ref={containerRef} className="relative">
        {/* Animated Vertical Line Background */}
        <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-slate-300 dark:bg-white/10 hidden md:block" />

        {/* Dynamic Progress Line */}
        <motion.div
          style={{ scaleY: lineHeight }}
          className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-gradient-to-b from-sky-400 via-indigo-500 to-purple-500 origin-top hidden md:block shadow-[0_0_15px_rgba(56,189,248,0.7)]"
        />

        {/* Timeline Items */}
        <div className="space-y-12 relative">
          {experienceData.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Center Node */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-9 h-9 rounded-full border border-sky-400/50 bg-white dark:bg-[#070b16] items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.5)] z-20">
                  <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-sky-400 to-purple-400 animate-pulse" />
                </div>

                {/* Content Card */}
                <div className="w-full md:w-[calc(50%-40px)]">
                  <GlassCard
                    enableTilt
                    tiltIntensity={8}
                    glowColor={isEven ? "cyan" : "purple"}
                    className="p-6 sm:p-7"
                  >
                    {/* Header info */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200 dark:border-white/15 bg-slate-100 dark:bg-white/5 text-sky-700 dark:text-sky-300 text-xs font-semibold">
                        <Briefcase className="w-3.5 h-3.5" />
                        {item.type}
                      </div>

                      <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-sky-500" />
                          {item.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-purple-500" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                      {item.title}
                    </h3>
                    <div className="text-sm font-medium text-sky-600 dark:text-sky-300 mb-4">
                      {item.company}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Key Achievements Bullet points */}
                    <div className="space-y-2 mb-5">
                      {item.achievements.map((ach, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 leading-normal">
                          <CheckCircle className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies tags */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200 dark:border-white/10">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 text-[11px] rounded-md border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
