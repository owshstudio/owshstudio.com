"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  EnvelopeIcon,
  MapPinIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mzdarwrn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      alert("Something went wrong. Please try again or email us directly.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Let&apos;s <span className="gradient-text">talk</span>
          </h1>
          <p className="text-xl text-white/60">
            Ready to start? Have questions? Just want to say hi? I typically
            respond within 24 hours.
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.1 }}
          >
            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-owsh-orange/20 flex items-center justify-center">
                    <CheckCircleIcon className="w-8 h-8 text-owsh-orange" />
                  </div>
                </div>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Message sent!
                </h2>
                <p className="text-white/60 mb-6">
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormState({ name: "", email: "", business: "", message: "" });
                  }}
                  className="text-owsh-orange hover:underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white/70 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-owsh-magenta/50 focus:ring-1 focus:ring-owsh-magenta/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white/70 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-owsh-magenta/50 focus:ring-1 focus:ring-owsh-magenta/50 transition-colors"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="business"
                    className="block text-sm font-medium text-white/70 mb-2"
                  >
                    Business name
                  </label>
                  <input
                    type="text"
                    id="business"
                    value={formState.business}
                    onChange={(e) =>
                      setFormState({ ...formState, business: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-owsh-magenta/50 focus:ring-1 focus:ring-owsh-magenta/50 transition-colors"
                    placeholder="Your business name (optional)"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white/70 mb-2"
                  >
                    Tell me about your project
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-owsh-magenta/50 focus:ring-1 focus:ring-owsh-magenta/50 transition-colors resize-none"
                    placeholder="What kind of website do you need? What's your business about? Any details help."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-gradient-to-r from-owsh-orange via-owsh-magenta to-owsh-purple text-white font-medium hover:opacity-90 transition-opacity btn-glow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Direct Contact */}
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10">
              <h2 className="text-xl font-semibold text-white mb-6">
                Or reach out directly
              </h2>
              <div className="space-y-4">
                <a
                  href="mailto:hello@owshunlimited.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] hover:bg-white/5 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-owsh-orange/20 flex items-center justify-center">
                    <EnvelopeIcon className="w-6 h-6 text-owsh-orange" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">Email</p>
                    <p className="text-white group-hover:gradient-text transition-all">
                      hello@owshunlimited.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02]">
                  <div className="w-12 h-12 rounded-full bg-owsh-purple/20 flex items-center justify-center">
                    <MapPinIcon className="w-6 h-6 text-owsh-purple" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">Location</p>
                    <p className="text-white">Buffalo, NY</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10">
              <h2 className="text-xl font-semibold text-white mb-6">
                Follow along
              </h2>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/owshstudio" target="_blank" rel="noopener noreferrer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-4 rounded-xl bg-white/[0.02] hover:bg-white/5 transition-colors text-center"
                >
                  <svg
                    className="w-6 h-6 mx-auto mb-2 text-white/70"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span className="text-sm text-white/70">Instagram</span>
                </a>
                <a
                  href="https://facebook.com/owshstudio" target="_blank" rel="noopener noreferrer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-4 rounded-xl bg-white/[0.02] hover:bg-white/5 transition-colors text-center"
                >
                  <svg
                    className="w-6 h-6 mx-auto mb-2 text-white/70"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span className="text-sm text-white/70">Facebook</span>
                </a>
                <a
                  href="https://linkedin.com/company/owshstudio" target="_blank" rel="noopener noreferrer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-4 rounded-xl bg-white/[0.02] hover:bg-white/5 transition-colors text-center"
                >
                  <svg
                    className="w-6 h-6 mx-auto mb-2 text-white/70"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="text-sm text-white/70">LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Response Time */}
            <div className="p-8 rounded-2xl bg-gradient-to-r from-owsh-orange/5 via-owsh-magenta/5 to-owsh-purple/5 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-white">
                  Typically responds within 24 hours
                </span>
              </div>
              <p className="text-white/50 text-sm">
                I read every message personally. If it&apos;s urgent, mention it in your
                message and I&apos;ll prioritize.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
