"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Mail,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Github,
  Linkedin,
  MapPin,
  Sparkles,
  RefreshCcw,
} from "lucide-react";
import { contactFormSchema, ContactFormInput } from "@/lib/validations";
import { ContactApiResponse } from "@/types";
import { GlassCard } from "../ui/GlassCard";
import { GlassButton } from "../ui/GlassButton";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: ContactFormInput) => {
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result: ContactApiResponse = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to dispatch message.");
      }

      setStatusMessage({
        type: "success",
        text: result.message || "Message sent successfully!",
      });

      // Fire celebratory confetti effect
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.7 },
          colors: ["#38bdf8", "#818cf8", "#c084fc"],
        });
      } catch {
        // Safe fallback if canvas context isn't available
      }

      reset();
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.";
      setStatusMessage({
        type: "error",
        text: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const directContacts = [
    {
      label: "Direct Email",
      value: "acharekarakhil@gmail.com",
      href: "mailto:acharekarakhil@gmail.com",
      icon: <Mail className="w-5 h-5 text-sky-500" />,
    },
    {
      label: "GitHub Profile",
      value: "github.com/Akhi111",
      href: "https://github.com/Akhi111",
      icon: <Github className="w-5 h-5 text-purple-500" />,
    },
    {
      label: "LinkedIn",
      value: "Akhil Acharekar",
      href: "https://www.linkedin.com/in/akhil-acharekar-669528148",
      icon: <Linkedin className="w-5 h-5 text-cyan-500" />,
    },
    {
      label: "Location",
      value: "Pune, Maharashtra, India",
      href: null,
      icon: <MapPin className="w-5 h-5 text-emerald-500" />,
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto"
    >
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
          <span>Get In Touch</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4"
        >
          Let&apos;s Build Something Extraordinary
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed"
        >
          Have a revolutionary project in mind, an engineering leadership role,
          or want to discuss 3D Web architecture? Reach out below.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Info Column */}
        <div className="lg:col-span-5 space-y-4">
          <GlassCard className="p-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Direct Contact Channels
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
              I am open to full-time roles, strategic consulting, and bespoke
              contract engagements.
            </p>

            <div className="space-y-4">
              {directContacts.map((contact, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-100/70 dark:bg-white/5 hover:bg-slate-200/60 dark:hover:bg-white/10 transition-all"
                >
                  <div className="p-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/60 shadow-sm">
                    {contact.icon}
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {contact.label}
                    </div>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        target={
                          contact.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          contact.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-300 transition-colors"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                        {contact.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Quick Notice */}
          <div className="p-5 rounded-2xl border border-sky-400/30 bg-sky-500/10 dark:bg-sky-500/5 backdrop-blur-md">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 dark:text-sky-300 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Prompt Response Guarantee</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Inquiries dispatched through this form trigger an authenticated
              serverless notification and are typically answered within 24
              business hours.
            </p>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-7">
          <GlassCard className="p-6 sm:p-8">
            <AnimatePresence mode="wait">
              {statusMessage?.type === "success" ? (
                <motion.div
                  key="success-box"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full border border-emerald-500/50 bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Email sent successfully
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md">
                    {statusMessage.text}
                  </p>
                  <button
                    onClick={() => setStatusMessage(null)}
                    className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <RefreshCcw className="w-3.5 h-3.5" />
                    <span>Send Another Message</span>
                  </button>
                </motion.div>
              ) : (
                <form
                  key="contact-form"
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-5"
                >
                  {/* Honeypot field (hidden from real users to catch bot scripts) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="hp_field">Do not fill this</label>
                    <input
                      id="hp_field"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      {...register("honeypot")}
                    />
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Full Name <span className="text-sky-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Ada Lovelace"
                        {...register("name")}
                        className={`w-full px-4 py-3 rounded-xl border bg-white/80 dark:bg-slate-950/60 backdrop-blur-md text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-all focus:outline-none ${
                          errors.name
                            ? "border-rose-500/50 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/30"
                            : "border-slate-200 dark:border-white/10 focus:border-sky-400/60 focus:ring-1 focus:ring-sky-400/20"
                        }`}
                        aria-invalid={errors.name ? "true" : "false"}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-rose-500 dark:text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Email Address <span className="text-sky-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="ada@computing.org"
                        {...register("email")}
                        className={`w-full px-4 py-3 rounded-xl border bg-white/80 dark:bg-slate-950/60 backdrop-blur-md text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-all focus:outline-none ${
                          errors.email
                            ? "border-rose-500/50 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/30"
                            : "border-slate-200 dark:border-white/10 focus:border-sky-400/60 focus:ring-1 focus:ring-sky-400/20"
                        }`}
                        aria-invalid={errors.email ? "true" : "false"}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-rose-500 dark:text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email.message}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Subject <span className="text-sky-500">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="Project Collaboration / Engineering Opportunity"
                      {...register("subject")}
                      className={`w-full px-4 py-3 rounded-xl border bg-white/80 dark:bg-slate-950/60 backdrop-blur-md text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-all focus:outline-none ${
                        errors.subject
                          ? "border-rose-500/50 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/30"
                          : "border-slate-200 dark:border-white/10 focus:border-sky-400/60 focus:ring-1 focus:ring-sky-400/20"
                      }`}
                      aria-invalid={errors.subject ? "true" : "false"}
                    />
                    {errors.subject && (
                      <p className="mt-1.5 text-xs text-rose-500 dark:text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.subject.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Message <span className="text-sky-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Share project goals, architectural specifications, or timeline details..."
                      {...register("message")}
                      className={`w-full px-4 py-3 rounded-xl border bg-white/80 dark:bg-slate-950/60 backdrop-blur-md text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-all focus:outline-none resize-none ${
                        errors.message
                          ? "border-rose-500/50 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/30"
                          : "border-slate-200 dark:border-white/10 focus:border-sky-400/60 focus:ring-1 focus:ring-sky-400/20"
                      }`}
                      aria-invalid={errors.message ? "true" : "false"}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-rose-500 dark:text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Status Banner on error */}
                  {statusMessage?.type === "error" && (
                    <div className="p-3.5 rounded-xl border border-rose-500/30 bg-rose-500/10 text-rose-700 dark:text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{statusMessage.text}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <GlassButton
                      type="submit"
                      variant="cyan"
                      size="lg"
                      glow
                      disabled={isSubmitting}
                      className="w-full"
                      icon={
                        isSubmitting ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <Send className="w-4 h-4" />
                        )
                      }
                      iconPosition="right"
                    >
                      {isSubmitting ? "Sending Email..." : "Send Email"}
                    </GlassButton>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
