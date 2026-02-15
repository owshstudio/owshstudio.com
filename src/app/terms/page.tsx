"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-white/60 text-lg mb-8">
              Last updated: February 2026
            </p>

            <div className="space-y-8 text-white/70">
              <section>
                <h2 className="text-xl font-semibold text-white mb-4">
                  The Plain English Version
                </h2>
                <p>
                  We build websites. You pay monthly. Either party can end the
                  relationship at any time. We own the design work until you buy
                  it out. Don&apos;t use our services for anything illegal.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">
                  Our Services
                </h2>
                <p>
                  OWSH Studio provides web design and development services on a
                  subscription basis. We design and build your website at no
                  upfront cost, and you pay a monthly fee to keep it live and
                  maintained.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">
                  Payment Terms
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Monthly subscription fees are due on the same day each month</li>
                  <li>Payments are processed via secure payment provider</li>
                  <li>Failed payments will result in site suspension after 7 days</li>
                  <li>No refunds for partial months</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">
                  Cancellation
                </h2>
                <p>
                  You can cancel your subscription at any time. Your site will
                  remain live until the end of your current billing period. After
                  cancellation, we&apos;ll take the site offline unless you&apos;ve
                  purchased a buyout.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">
                  Ownership & Intellectual Property
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-white">Your content:</strong> You own
                    all text, images, and content you provide to us
                  </li>
                  <li>
                    <strong className="text-white">Our design:</strong> We retain
                    ownership of the website design and code until a buyout is
                    completed
                  </li>
                  <li>
                    <strong className="text-white">Buyout option:</strong> Ownership
                    equals 12 months of your monthly plan. If you&apos;ve been with
                    us over 12 months, we&apos;ll send you the full project folder
                    upon cancellation. Under 12 months? Pay the difference.
                  </li>
                  <li>
                    <strong className="text-white">Portfolio rights:</strong> We
                    retain the right to display your site in our portfolio and
                    marketing materials
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">
                  What We Expect From You
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate information about your business</li>
                  <li>Respond to requests for content and feedback in a timely manner</li>
                  <li>Don&apos;t use the website for illegal purposes</li>
                  <li>Pay your subscription on time</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">
                  Limitation of Liability
                </h2>
                <p>
                  We do our best, but websites sometimes break. We&apos;re not liable
                  for lost revenue, data, or any indirect damages. Our total
                  liability is limited to the fees you&apos;ve paid us in the last 12
                  months.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">
                  Changes to Terms
                </h2>
                <p>
                  We may update these terms from time to time. We&apos;ll notify you of
                  any significant changes via email.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">
                  Questions?
                </h2>
                <p>
                  If you have any questions about these terms, reach out at{" "}
                  <a
                    href="mailto:hello@owshunlimited.com"
                    className="text-owsh-orange hover:underline"
                  >
                    hello@owshunlimited.com
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
