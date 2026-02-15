"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`${alignClass} ${className}`}
    >
      {eyebrow && (
        <span className="inline-block text-sm font-medium tracking-wider uppercase text-owsh-orange mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}
