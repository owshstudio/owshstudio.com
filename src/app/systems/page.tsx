"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/Button";
import {
  BoltIcon,
  MagnifyingGlassIcon,
  EyeIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  CpuChipIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const pillars = [
  {
    icon: BoltIcon,
    title: "Performance",
    description:
      "Core Web Vitals, loading speed, mobile optimization, server response times. Your site loads fast on every device.",
  },
  {
    icon: MagnifyingGlassIcon,
    title: "SEO",
    description:
      "Meta tags, heading structure, content quality, schema markup, sitemap validation. Search engines find and rank your site.",
  },
  {
    icon: EyeIcon,
    title: "Accessibility",
    description:
      "13 WCAG 2.1 AA checks. Alt text, form labels, color contrast, keyboard navigation. Everyone can use your site.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Trust and Security",
    description:
      "SSL validation, security headers, mixed content detection, safe browsing checks. Your visitors are protected.",
  },
  {
    icon: DocumentTextIcon,
    title: "Content Quality",
    description:
      "Readability scoring, content freshness, expertise signals, FAQ detection. Your content connects with customers.",
  },
  {
    icon: CpuChipIcon,
    title: "Deep Site Analysis",
    description:
      "Multi-page crawl up to 100 pages. Broken links, redirect chains, orphan pages, template analysis. Nothing gets missed.",
  },
];

const stats = [
  { value: "150+", label: "Health Checks" },
  { value: "46", label: "Fix Guides" },
  { value: "4", label: "Chrome Extensions" },
  { value: "6", label: "Audit Categories" },
];

const tools = [
  {
    title: "Page Audit",
    description: "SEO and content analysis",
    href: "https://audit.owshsystems.com",
  },
  {
    title: "Schema and Sitemap",
    description: "Structured data validation",
    href: "https://audit.owshsystems.com",
  },
  {
    title: "Accessibility",
    description: "WCAG compliance",
    href: "https://audit.owshsystems.com",
  },
  {
    title: "Performance",
    description: "Core Web Vitals",
    href: "https://audit.owshsystems.com",
  },
];

export default function SystemsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            The Engine Behind{" "}
            <span className="gradient-text">Every Build</span>
          </h1>
          <p className="text-white/60 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Every OWSH Studio site is built against 150+ digital health
            standards. Here is exactly what we check, why it matters, and how it
            makes your site better than the competition.
          </p>
        </motion.div>
      </section>

      {/* 6 Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            6 Pillars of <span className="gradient-text">Digital Health</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="gradient-border p-8 hover:bg-white/[0.02] transition-colors"
            >
              <pillar.icon className="w-8 h-8 text-owsh-orange mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">
                {pillar.title}
              </h3>
              <p className="text-white/60">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* By The Numbers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            By The Numbers
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl sm:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </p>
              <p className="text-white/60">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Free Audit Tools */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Free Audit Tools
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            See where your current site stands. No signup, no credit card. Just
            paste your URL.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <motion.a
              key={tool.title}
              href={tool.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group gradient-border p-6 hover:bg-white/[0.02] transition-colors block"
            >
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-owsh-orange transition-colors">
                {tool.title}
              </h3>
              <p className="text-white/50 text-sm">{tool.description}</p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready for a site that{" "}
            <span className="gradient-text">passes every check</span>?
          </h2>
          <Button href="/contact" size="lg">
            Get Started
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
