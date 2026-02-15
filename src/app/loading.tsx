"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center gap-6"
      >
        {/* Animated logo/spinner */}
        <div className="relative w-16 h-16">
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-owsh-orange border-r-owsh-magenta"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-2 rounded-full border-2 border-transparent border-b-owsh-magenta border-l-owsh-purple"
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-4 rounded-full bg-gradient-to-br from-owsh-orange via-owsh-magenta to-owsh-purple"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </div>
        <span className="text-white/50 text-sm">Loading...</span>
      </motion.div>
    </div>
  );
}
