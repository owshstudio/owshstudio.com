"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const values = [
  {
    title: "Radical transparency",
    description:
      "No hidden fees, no vague pricing, no 'contact us for a quote.' You know exactly what you're getting and what it costs.",
  },
  {
    title: "Speed over perfection",
    description:
      "A good website live beats a perfect website someday. We move fast, iterate, and don't let perfect be the enemy of done.",
  },
  {
    title: "Local first",
    description:
      "We're based in Buffalo, NY and focused on local businesses. You're not a ticket number—you're a neighbor.",
  },
  {
    title: "Simple over clever",
    description:
      "No jargon, no overcomplicated solutions. Just clear communication and websites that actually work for your customers.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Hey, I&apos;m <span className="gradient-text">Noah</span>.
            </h1>
            <div className="space-y-6 text-lg text-white/60 leading-relaxed">
              <p>
                I started OWSH Studio because I kept meeting business owners
                who knew they needed a better website but couldn&apos;t justify
                $5-10K to an agency.
              </p>
              <p>
                So they&apos;d DIY something on Wix. Or use a template that looked
                like everyone else. Or just... not have a site at all.
              </p>
              <p className="text-white font-medium">That&apos;s dumb.</p>
              <p>
                A good website shouldn&apos;t cost a fortune. It shouldn&apos;t take
                months. And it shouldn&apos;t require a computer science degree to
                update.
              </p>
              <p>
                OWSH Studio exists to give local businesses real, professional
                websites without the agency price tag. We build it free, you pay
                monthly, cancel whenever.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden gradient-border">
              <Image
                src="/noah.jpg"
                alt="Noah Owsiany"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-owsh-orange/20 rounded-full blur-2xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-owsh-purple/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How we work
          </h2>
          <p className="text-white/60 text-lg max-w-2xl">
            These aren&apos;t corporate values written on a wall. This is how we
            actually operate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {value.title}
              </h3>
              <p className="text-white/60">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The Stack (for nerds) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="p-8 rounded-2xl border border-white/10"
        >
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-xl font-semibold text-white">
              For the nerds: Our stack
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              "Next.js",
              "React",
              "Tailwind CSS",
              "Framer",
              "Framer Motion",
              "Vercel",
              "Figma",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-white/5 text-white/70 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="mt-4 text-white/50 text-sm">
            We use modern tools to build fast, secure, maintainable sites. But you
            don&apos;t need to care about any of this—that&apos;s our job.
          </p>
        </motion.div>
      </section>

      {/* Part of OWSH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="p-8 rounded-2xl border border-white/10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-8 h-8">
              <Image src="/logo.png" alt="OWSH" fill className="object-contain" />
            </div>
            <h2 className="text-xl font-semibold text-white">
              Part of OWSH Unlimited
            </h2>
          </div>
          <p className="text-white/60 mb-4">
            OWSH Studio is one arm of OWSH Unlimited—a holding company building
            tools and services for local businesses. We&apos;re also working on OWSH
            Systems, a website health platform, and more to come.
          </p>
          <a
            href="https://owshunlimited.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-owsh-orange hover:underline underline-offset-4 text-sm"
          >
            Learn more about OWSH →
          </a>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            If your website embarrasses you, let&apos;s fix that.
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
            No sales pitch, no pressure. Just a conversation about what you need.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-owsh-orange via-owsh-magenta to-owsh-purple rounded-full text-white font-medium hover:opacity-90 transition-opacity btn-glow"
          >
            Let&apos;s Talk
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
