"use client";

import { motion } from "framer-motion";

interface GradientBlobProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
}

export default function GradientBlob({
  className = "",
  size = "md",
  position = "center",
}: GradientBlobProps) {
  const sizes = {
    sm: "w-[300px] h-[300px]",
    md: "w-[500px] h-[500px]",
    lg: "w-[700px] h-[700px]",
    xl: "w-[900px] h-[900px]",
  };

  const positions = {
    "top-left": "-top-1/4 -left-1/4",
    "top-right": "-top-1/4 -right-1/4",
    "bottom-left": "-bottom-1/4 -left-1/4",
    "bottom-right": "-bottom-1/4 -right-1/4",
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`absolute ${sizes[size]} ${positions[position]} pointer-events-none ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-owsh-orange/20 via-owsh-magenta/20 to-owsh-purple/20 rounded-full blur-3xl animate-pulse-glow" />
    </motion.div>
  );
}
