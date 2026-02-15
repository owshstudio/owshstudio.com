"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckIcon, XMarkIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const plans = [
  {
    name: "Landing Page",
    price: 75,
    period: "/month",
    description: "Simple, effective presence for straightforward businesses.",
    bestFor: "Service landing pages, single-offering businesses",
    features: [
      { name: "1 page design", included: true },
      { name: "Contact form", included: true },
      { name: "Mobile responsive", included: true },
      { name: "Basic SEO setup", included: true },
      { name: "Hosting included", included: true },
      { name: "SSL certificate", included: true },
      { name: "Monthly content updates", included: true },
      { name: "Email support", included: true },
      { name: "Google Business setup", included: false },
      { name: "Analytics dashboard", included: false },
      { name: "CMS access", included: false },
      { name: "Priority support", included: false },
    ],
  },
  {
    name: "Standard",
    price: 185,
    period: "/month",
    description: "Everything most local businesses need to thrive online.",
    bestFor: "Restaurants, contractors, shops, professional services",
    popular: true,
    features: [
      { name: "5-7 page design", included: true },
      { name: "Contact form", included: true },
      { name: "Mobile responsive", included: true },
      { name: "Full SEO setup", included: true },
      { name: "Hosting included", included: true },
      { name: "SSL certificate", included: true },
      { name: "Monthly content updates", included: true },
      { name: "Email support", included: true },
      { name: "Google Business setup", included: true },
      { name: "Analytics dashboard", included: true },
      { name: "CMS access", included: false },
      { name: "Priority support", included: false },
    ],
  },
  {
    name: "Full CMS",
    price: 400,
    period: "/month",
    description: "Complete control with self-editable content management.",
    bestFor: "Blogs, menus, inventory, frequent updates",
    features: [
      { name: "10+ page design", included: true },
      { name: "Contact form", included: true },
      { name: "Mobile responsive", included: true },
      { name: "Full SEO setup", included: true },
      { name: "Hosting included", included: true },
      { name: "SSL certificate", included: true },
      { name: "Unlimited content updates", included: true },
      { name: "Email support", included: true },
      { name: "Google Business setup", included: true },
      { name: "Analytics dashboard", included: true },
      { name: "CMS access + training", included: true },
      { name: "Priority support", included: true },
    ],
  },
];

const faqs = [
  {
    question: "Why is the build free?",
    answer:
      "Because $5K upfront is why most businesses don't have good websites. We'd rather earn your trust monthly than take a big check and disappear. If you don't love what we build, you walk away without paying a cent.",
  },
  {
    question: "What if I want to cancel?",
    answer:
      "Cancel anytime. No fees, no guilt trip, no questions asked. We'll even export your content if you want to take it elsewhere. The site design stays with us unless you buyout, but your content is always yours.",
  },
  {
    question: 'What\'s the catch?',
    answer:
      "No catch. We make money when you stay. That means we're incentivized to keep your site working and you happy. If we suck, you leave. Simple as that.",
  },
  {
    question: "Can I own my site outright?",
    answer:
      "Yes. Ownership equals 12 months of your monthly plan. If you've been with us over 12 months and want to cancel, we'll send you the full project folder. Under 12 months? Pay the difference and it's yours. Either way, we retain the right to display your site in our portfolio.",
  },
  {
    question: "What's included in monthly updates?",
    answer:
      "Text changes, image swaps, minor layout tweaks, new menu items—the day-to-day stuff. For larger changes like new pages or major redesigns, we'll scope that separately. Most updates are turned around within 48 hours.",
  },
  {
    question: "Do you do e-commerce?",
    answer:
      "Not yet. We're focused on service businesses right now—restaurants, contractors, professional services, hospitality. If you need a full online store, we can refer you to someone good.",
  },
  {
    question: "How long does the build take?",
    answer:
      "Most sites are ready in 2-3 weeks. Complex projects with lots of content might take 4-5 weeks. We'll give you a timeline upfront and keep you updated throughout.",
  },
  {
    question: "What do you need from me?",
    answer:
      "Access to your brand assets (logo, photos), answers to some questions about your business, and feedback during the design process. We handle the heavy lifting—you just need to be responsive.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

function FAQ({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border-b border-white/10"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg text-white group-hover:gradient-text transition-all">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="text-2xl text-white/50"
        >
          +
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-white/60 leading-relaxed">{answer}</p>
      </motion.div>
    </motion.div>
  );
}

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Simple, <span className="gradient-text">transparent</span> pricing
          </h1>
          <p className="text-xl text-white/60">
            We build your site free. You pay monthly to keep it live. No surprises,
            no hidden fees, no contracts.
          </p>
        </motion.div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex flex-col"
            >
              <div
                className={`flex-1 flex flex-col p-8 rounded-2xl relative ${
                  plan.popular
                    ? "bg-gradient-to-b from-owsh-magenta/10 to-transparent"
                    : "bg-white/[0.02] border border-white/10"
                }`}
                style={plan.popular ? {
                  background: 'linear-gradient(to bottom, rgba(217, 70, 239, 0.1), transparent)',
                  border: '2px solid transparent',
                  backgroundClip: 'padding-box',
                  position: 'relative',
                } : undefined}
              >
              {plan.popular && (
                <div className="absolute inset-0 rounded-2xl -z-10" style={{
                  background: 'linear-gradient(135deg, #f97316, #d946ef, #8b5cf6)',
                  margin: '-2px',
                  borderRadius: 'calc(1rem + 2px)',
                }} />
              )}
              {plan.popular && (
                <div className="flex justify-center -mt-4 mb-4">
                  <span className="px-4 py-1 rounded-full text-xs font-semibold relative">
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-owsh-orange via-owsh-magenta to-owsh-purple" style={{ padding: '1px', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} />
                    <span className="relative gradient-text font-semibold">Most Popular</span>
                  </span>
                </div>
              )}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-white/50 text-sm mb-6">{plan.description}</p>
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-white">
                      ${plan.price}
                    </span>
                    <span className="text-white/50 ml-2">{plan.period}</span>
                  </div>
                </div>

                <div className="flex-1">
                  <p className="text-sm text-owsh-orange mb-4 font-medium">
                    Best for: {plan.bestFor}
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature.name}
                        className={`flex items-center gap-3 text-sm ${
                          feature.included ? "text-white/70" : "text-white/30"
                        }`}
                      >
                        {feature.included ? (
                          <CheckIcon className="w-4 h-4 text-owsh-orange flex-shrink-0" />
                        ) : (
                          <XMarkIcon className="w-4 h-4 flex-shrink-0" />
                        )}
                        {feature.name}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className={`mt-8 w-full py-4 rounded-full text-center font-medium transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-owsh-orange via-owsh-magenta to-owsh-purple text-white hover:opacity-90 btn-glow"
                      : "bg-white/5 text-white hover:bg-white/15 border border-white/20"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* All Plans Include */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl font-semibold text-white mb-8">
            All plans include
          </h2>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-white/60">
            {[
              "Free design & build",
              "Hosting & SSL",
              "Security updates",
              "Backups",
              "No contracts",
              "Cancel anytime",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4 text-owsh-orange" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Questions?
          </h2>
          <p className="text-white/60">
            Here are the ones we get asked most.
          </p>
        </motion.div>

        <div className="divide-y divide-white/10 border-t border-white/10">
          {faqs.map((faq, index) => (
            <FAQ key={faq.question} {...faq} index={index} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-owsh-orange/10 via-owsh-magenta/10 to-owsh-purple/10" />
          <div className="relative p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Still have questions?
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
              No pressure, no sales pitch. Just a conversation about what you need.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-owsh-orange via-owsh-magenta to-owsh-purple rounded-full text-white font-medium hover:opacity-90 transition-opacity btn-glow"
            >
              Let&apos;s Talk
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
