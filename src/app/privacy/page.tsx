"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-white/60 text-lg mb-8">
              Last updated: February 2026
            </p>

            <div className="space-y-8 text-white/70">
              <section>
                <h2 className="text-xl font-semibold text-white mb-4">
                  The Short Version
                </h2>
                <p>
                  We collect the minimum amount of information needed to provide
                  our services. We don&apos;t sell your data. We don&apos;t spam you. We
                  respect your privacy.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">
                  What We Collect
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-white">Contact information:</strong>{" "}
                    Name, email, business name when you reach out to us
                  </li>
                  <li>
                    <strong className="text-white">Usage data:</strong> Basic
                    analytics to understand how our site is used (via privacy-focused
                    analytics, not Google)
                  </li>
                  <li>
                    <strong className="text-white">Project details:</strong>{" "}
                    Information you provide about your business and website needs
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">
                  How We Use It
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To respond to your inquiries</li>
                  <li>To provide our web design services</li>
                  <li>To improve our website and services</li>
                  <li>To send occasional updates (only if you opt in)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">
                  What We Don&apos;t Do
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Sell your information to third parties</li>
                  <li>Send spam or unwanted marketing emails</li>
                  <li>Track you across the internet</li>
                  <li>Use dark patterns to collect more data</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">
                  Your Rights
                </h2>
                <p>
                  You can request to see, update, or delete any personal information
                  we have about you. Just email{" "}
                  <a
                    href="mailto:hello@owshunlimited.com"
                    className="text-owsh-orange hover:underline"
                  >
                    hello@owshunlimited.com
                  </a>{" "}
                  and I&apos;ll take care of it.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">
                  Questions?
                </h2>
                <p>
                  If you have any questions about this privacy policy, reach out at{" "}
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
