"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeftIcon,
  ArrowUpRightIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";

const project = {
  title: "McLear's Cottage Colony",
  category: "Hospitality",
  location: "Hammond, NY",
  url: "https://mclears.com",
  heroImage: "/work/mclears-hero.jpg",
  challenge: `McLear's Cottage Colony has been welcoming families to the Thousand Islands for over 90 years. But their online presence didn't reflect the warmth and heritage that makes them special.

They needed a website that honored their rich history while making it easy for modern travelers to discover them and inquire about stays.`,
  solution: `We created a 6-page responsive website that tells their story through beautiful imagery and thoughtful copy. The design balances nostalgia with modern usability—historic photos sit alongside contemporary amenities, and the booking inquiry process is just a few taps away.

Key features include a heritage timeline showcasing their 90-year history, an accommodation comparison to help guests choose the right cottage, and a contact form that routes inquiries directly to Janet.`,
  features: [
    "6-page responsive website",
    "Heritage timeline with historical photos",
    "Accommodation comparison table",
    "Integrated contact form",
    "Full SEO setup with local schema",
    "Google Business optimization",
    "Mobile-first design",
  ],
  stats: [
    { value: "6", label: "Pages Built" },
    { value: "3", label: "Weeks to Launch" },
    { value: "90+", label: "Years of History" },
  ],
  testimonial: {
    quote:
      "Finally, a website I'm actually proud to share with guests. Noah understood exactly what we needed and delivered beyond our expectations.",
    author: "Janet McLear",
    role: "Owner",
  },
  images: [
    { src: "/work/mclears-1.jpg", alt: "McLear's homepage" },
    { src: "/work/mclears-2.jpg", alt: "McLear's accommodations page" },
    { src: "/work/mclears-3.jpg", alt: "McLear's mobile view" },
  ],
};

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function McLearsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Back link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back to Work
        </Link>
      </div>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 text-sm mb-6">
            <span className="text-owsh-orange font-medium">{project.category}</span>
            <span className="text-white/30">•</span>
            <span className="text-white/50">{project.location}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            {project.title}
          </h1>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-owsh-orange hover:underline underline-offset-4"
          >
            Visit Live Site
            <ArrowUpRightIcon className="w-4 h-4" />
          </a>
        </motion.div>
      </section>

      {/* Hero Image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.1 }}
          className="relative aspect-[16/10] rounded-2xl overflow-hidden"
        >
          <Image
            src="/work/mclears-case-hero.jpg"
            alt="McLear's Cottage Colony website homepage"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-8 max-w-2xl"
        >
          {project.stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-white/50 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Challenge & Solution */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-white mb-6">The Challenge</h2>
            <div className="text-white/60 leading-relaxed whitespace-pre-line">
              {project.challenge}
            </div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-2xl font-semibold text-white mb-6">The Solution</h2>
            <div className="text-white/60 leading-relaxed whitespace-pre-line">
              {project.solution}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-white mb-8">What We Built</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5"
              >
                <CheckIcon className="w-5 h-5 text-owsh-orange flex-shrink-0" />
                <span className="text-white/70">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Image Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
            <Image
              src="/work/mclears-case-desktop.jpg"
              alt="McLear's accommodations page on desktop"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
            <Image
              src="/work/mclears-case-mobile.jpg"
              alt="McLear's website on mobile devices"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Testimonial */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-owsh-orange/5 via-owsh-magenta/5 to-owsh-purple/5" />
          <div className="relative p-12 md:p-16 text-center">
            <svg
              className="w-12 h-12 mx-auto mb-8 text-owsh-magenta/30"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-2xl md:text-3xl font-medium text-white leading-relaxed max-w-3xl mx-auto mb-8">
              {project.testimonial.quote}
            </blockquote>
            <div>
              <div className="text-white font-medium">
                {project.testimonial.author}
              </div>
              <div className="text-white/50 text-sm">{project.testimonial.role}</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Next Project CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-8 p-8 rounded-2xl border border-white/10"
        >
          <div>
            <p className="text-white/50 text-sm mb-2">Want results like this?</p>
            <h3 className="text-2xl font-semibold text-white">
              Let&apos;s build your website
            </h3>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-owsh-orange via-owsh-magenta to-owsh-purple rounded-full text-white font-medium hover:opacity-90 transition-opacity btn-glow"
          >
            Start Your Project
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
