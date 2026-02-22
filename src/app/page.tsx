"use client";

import {
  motion,
  useScroll,
  useTransform,
  useInView,
  animate,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import MagneticButton from "@/components/MagneticButton";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import {
  ArrowRightIcon,
  CheckIcon,
  BoltIcon,
  MagnifyingGlassIcon,
  EyeIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

// Animation variants
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const slideFromLeft = {
  initial: { opacity: 0, x: -60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.7, ease: "easeOut" as const },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Gradient section divider
function GradientDivider() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="gradient-divider" />
    </div>
  );
}

// Animated counter that counts up when scrolled into view
function AnimatedCounter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, target, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, target]);

  return (
    <span ref={ref} className="inline-flex items-baseline">
      <span>{display}</span>
      {suffix && <span>{suffix}</span>}
    </span>
  );
}

// Health score circular ring
function HealthScoreRing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const circumference = 2 * Math.PI * 54; // radius = 54
  const fillPercent = 94 / 100;
  const strokeDashoffset = circumference * (1 - fillPercent);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="relative w-36 h-36">
        <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
          {/* Background ring */}
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="6"
          />
          {/* Gradient definition */}
          <defs>
            <linearGradient
              id="scoreGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#DF4F15" />
              <stop offset="50%" stopColor="#F9425F" />
              <stop offset="100%" stopColor="#A326B5" />
            </linearGradient>
          </defs>
          {/* Animated fill ring */}
          <motion.circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke="url(#scoreGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={
              isInView
                ? { strokeDashoffset: strokeDashoffset }
                : { strokeDashoffset: circumference }
            }
            transition={{ duration: 2, ease: "easeOut" }}
          />
        </svg>
        {/* Score text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center rotate-0">
          <span className="text-3xl font-bold text-white">
            {isInView ? <AnimatedCounter target={94} /> : "0"}
          </span>
          <span className="text-sm text-white/40">/100</span>
        </div>
      </div>
      <span className="text-sm text-white/50 mt-3 font-medium">
        Health Score
      </span>
    </div>
  );
}

// Powered by OWSH Systems badge
function PoweredBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full gradient-border-pill badge-glow">
      <ShieldCheckIcon className="w-4 h-4 text-owsh-orange" />
      <span className="text-sm font-medium text-white/80">
        Powered by OWSH Systems
      </span>
    </div>
  );
}

// Hero Section with animated gradient orbs
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  // Different parallax speeds for each orb
  const orbY1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const orbY3 = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20"
    >
      {/* Animated gradient orbs with different parallax speeds */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y: orbY1 }}
          className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-owsh-orange/20 blur-[120px] animate-pulse-glow"
        />
        <motion.div
          style={{ y: orbY2 }}
          className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-owsh-magenta/20 blur-[120px] animate-pulse-glow [animation-delay:1s]"
        />
        <motion.div
          style={{ y: orbY3 }}
          className="absolute -bottom-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-owsh-purple/20 blur-[120px] animate-pulse-glow [animation-delay:2s]"
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div
        style={{ opacity, y: textY }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
      >
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="flex justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/70">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Now accepting new clients
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight"
          >
            <span className="block text-white">Your digital presence is</span>
            <span className="block gradient-text gradient-text-grain animate-gradient">costing you customers.</span>
          </motion.h1>

          {/* Subheadline - no price */}
          <motion.p
            variants={fadeUp}
            className="max-w-2xl mx-auto text-xl sm:text-2xl text-white/60"
          >
            We find what is broken, fix what is missing, and build sites that actually bring in business. Every site we deliver passes the same standards used by top agencies.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <MagneticButton>
              <Button href="/get-started" size="lg">
                Get Started
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Button>
            </MagneticButton>
            <Button href="/work" variant="secondary" size="lg">
              See Our Work
            </Button>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            variants={fadeUp}
            className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/40"
          >
            <span className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-owsh-orange" />
              Sites built to outperform, not just look good
            </span>
            <span className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-owsh-magenta" />
              No contracts
            </span>
            <span className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-owsh-purple" />
              Free to build, pay when you are ready
            </span>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 rounded-full bg-white/40" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// Problem Section - concise with visual punch
function ProblemStatement() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Subtle gradient glow in background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full bg-owsh-magenta/5 blur-[150px]" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="gradient-border p-10 sm:p-16"
        >
          <p className="text-xl sm:text-2xl md:text-3xl text-white/70 leading-relaxed mb-6">
            Most businesses know they need a better website. They just don&apos;t have $5,000 and 3 months to get one.
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">
            We build it for free. You only pay when you love it.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// How It Works Section - Vertical 3-column grid
function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Tell us about your business",
      description:
        "15-minute call. We learn what you need. No sales pitch, just questions.",
    },
    {
      number: "02",
      title: "We build and optimize your site",
      description:
        "Every site is checked against 150+ digital health standards before you see it. Performance, SEO, accessibility, security. Built in from line one.",
    },
    {
      number: "03",
      title: "You go live",
      description:
        "Love it? Pay monthly. Hate it? Walk away. No hard feelings.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          {...slideFromLeft}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            How it works
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            No upfront costs. No long contracts. Just a great website.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative group"
            >
              {/* Connecting arrow between steps (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-16 -right-4 lg:-right-5 z-10 items-center">
                  <div className="w-6 lg:w-8 h-px bg-gradient-to-r from-owsh-orange via-owsh-magenta to-owsh-purple" />
                  <svg className="w-3 h-3 text-owsh-magenta -ml-px" fill="currentColor" viewBox="0 0 12 12">
                    <path d="M4 1l6 5-6 5V1z" />
                  </svg>
                </div>
              )}

              <div className="gradient-border p-8 lg:p-10 h-full hover:bg-white/[0.03] transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(249,66,95,0.15)]">
                <span className="text-7xl font-bold gradient-text opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                  {step.number}
                </span>
                <h3 className="text-xl lg:text-2xl font-semibold text-white mt-6 mb-4">
                  {step.title}
                </h3>
                <p className="text-white/60 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Transformation Engine Section
function TransformationEngine() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: sliderScrollProgress } = useScroll({
    target: sliderRef,
    offset: ["start end", "end start"],
  });
  const sliderY = useTransform(sliderScrollProgress, [0, 1], [30, -30]);

  return (
    <section className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          {...slideFromLeft}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            See the <span className="gradient-text">difference</span>
          </h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto">
            We check if Google can actually find your business. If your site loads before people leave. If it works on every phone and browser. If customers can trust what they see. Most sites fail over half of these checks. Ours don&apos;t.
          </p>
        </motion.div>

        {/* Animated counter + Health score */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-20 mb-16"
        >
          <div className="flex flex-col items-center">
            <span className="text-7xl sm:text-8xl font-bold gradient-text">
              <AnimatedCounter target={150} suffix="+" />
            </span>
            <span className="text-sm text-white/50 mt-2 font-medium">
              health standards checked on every build
            </span>
          </div>
          <HealthScoreRing />
        </motion.div>

        <motion.div
          ref={sliderRef}
          style={{ y: sliderY }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <BeforeAfterSlider />
        </motion.div>

        {/* Powered by OWSH Systems badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex justify-center mt-6 mb-2"
        >
          <PoweredBadge />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-white/40 text-sm mt-4 max-w-2xl mx-auto"
        >
          Twin Trees Fayetteville. Same business, completely transformed online presence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto mt-12"
        >
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {[
              { icon: BoltIcon, label: "Fast loading" },
              { icon: MagnifyingGlassIcon, label: "Found on Google" },
              { icon: EyeIcon, label: "Works for everyone" },
              { icon: ShieldCheckIcon, label: "Safe and trusted" },
              { icon: DocumentTextIcon, label: "Clear messaging" },
              { icon: CpuChipIcon, label: "Nothing missed" },
            ].map((item) => (
              <span
                key={item.label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/70"
              >
                <item.icon className="w-4 h-4 text-owsh-orange" />
                {item.label}
              </span>
            ))}
          </div>
          <p className="text-center text-white/60 mb-6">
            Every site we build passes 150+ checks across these 6 categories before it goes live.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/systems" variant="secondary" size="md">
              See what we check
            </Button>
            <a
              href="https://audit.owshsystems.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/50 hover:text-white transition-colors underline underline-offset-4"
            >
              Try a free audit
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Featured Work Section
function FeaturedWork() {
  const projects = [
    {
      title: "Orange Crate Brewing Co.",
      category: "Food & Beverage",
      image: "/work/orangecrate.jpg",
      href: "https://orangecratebrewingco.com",
    },
    {
      title: "CollegeClassReviews",
      category: "Education Platform",
      image: "/work/collegeclassreviews.jpg",
      href: "https://collegeclassreviews.com",
    },
    {
      title: "PuckCast.ai",
      category: "Sports Analytics",
      image: "/work/puckcast.jpg",
      href: "https://puckcast.ai",
    },
  ];

  return (
    <section className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-6"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Recent work
            </h2>
            <p className="text-white/60 text-lg max-w-xl">
              Real sites for real businesses. No mockups, no templates.
            </p>
          </div>
          <Link
            href="/work"
            className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            View all work
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <a href={project.href} target="_blank" rel="noopener noreferrer" className="group block">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden gradient-border">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-owsh-orange/10 via-owsh-magenta/10 to-owsh-purple/10 flex items-center justify-center">
                      <span className="text-white/30 text-xl">?</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-owsh-orange text-sm font-medium drop-shadow-lg">
                      {project.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white mt-2 group-hover:gradient-text transition-all drop-shadow-lg">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pricing Preview Section
function PricingPreview() {
  const plans = [
    {
      name: "Starter",
      price: "$75",
      period: "/month",
      description: "Perfect for simple presence",
      features: ["1 page", "Contact form", "Mobile friendly", "Basic SEO"],
    },
    {
      name: "Growth",
      price: "$185",
      period: "/month",
      description: "For most businesses",
      features: [
        "5-7 pages",
        "Full SEO setup",
        "Google Business",
        "Analytics",
        "Monthly updates",
      ],
      popular: true,
    },
    {
      name: "Pro",
      price: "$400",
      period: "/month",
      description: "Self-editable content",
      features: [
        "10+ pages",
        "Content management",
        "Blog capability",
        "Unlimited edits",
        "Priority support",
      ],
    },
  ];

  return (
    <section className="py-24 sm:py-32 relative">
      {/* Gradient accent */}
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-owsh-magenta/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          {...slideFromLeft}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            We build it free. You pay monthly to keep it live. No surprises.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="gradient-border-pill px-3 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}
              <div
                className={`h-full p-8 rounded-2xl relative ${
                  plan.popular
                    ? "gradient-border"
                    : "bg-white/[0.02] border border-white/10"
                }`}
              >
                <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                <p className="text-white/50 text-sm mt-1">{plan.description}</p>
                <div className="mt-6 mb-8">
                  <span className="text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-white/50">{plan.period}</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-white/70 text-sm"
                    >
                      <CheckIcon className="w-4 h-4 text-owsh-orange flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-white/40 mb-6">
            All plans include hosting, SSL, security updates, and support.
          </p>
          <Link
            href="/pricing"
            className="group inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            See full pricing details
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// Testimonial Section
function Testimonial() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-owsh-orange/5 via-owsh-magenta/5 to-owsh-purple/5" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="flex justify-center">
            <svg
              className="w-12 h-12 text-owsh-magenta/30"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-medium text-white leading-relaxed">
            Super helpful and personable. The website turned out better than I ever imagined. Would recommend over and over again.
          </blockquote>
          <p className="text-white/40 mt-6 text-lg">Real client feedback</p>
        </motion.div>
      </div>
    </section>
  );
}

// Final CTA Section
function FinalCTA() {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Ready to stop being{" "}
            <span className="gradient-text">embarrassed</span> by your website?
          </h2>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Let&apos;s build something you&apos;re proud of. Takes 15 minutes to get started.
          </p>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Or bring us your Facebook page. We&apos;ll turn it into a real website.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <MagneticButton>
              <Button href="/get-started" size="lg">
                Let&apos;s Build Yours
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Button>
            </MagneticButton>
          </div>
          <p className="text-white/40 text-sm">
            Or just have questions?{" "}
            <a
              href="mailto:hello@owshunlimited.com"
              className="text-white/60 hover:text-white underline underline-offset-4 transition-colors"
            >
              hello@owshunlimited.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <GradientDivider />
      <ProblemStatement />
      <HowItWorks />
      <GradientDivider />
      <TransformationEngine />
      <GradientDivider />
      <FeaturedWork />
      <GradientDivider />
      <PricingPreview />
      <Testimonial />
      <FinalCTA />
    </>
  );
}
