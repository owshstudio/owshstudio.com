"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8"
        >
          <span className="text-[12rem] font-bold leading-none gradient-text">
            404
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          <h1 className="text-2xl sm:text-3xl font-semibold text-white">
            Page not found
          </h1>
          <p className="text-white/60 max-w-md mx-auto">
            Looks like this page doesn&apos;t exist. Maybe it moved, or maybe you typed
            something wrong. Either way, let&apos;s get you back on track.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-owsh-orange via-owsh-magenta to-owsh-purple rounded-full text-white font-medium hover:opacity-90 transition-opacity btn-glow"
          >
            Go Home
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white font-medium hover:bg-white/10 transition-colors"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
