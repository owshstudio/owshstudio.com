"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BlogPost() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link
            href="/blog"
            className="text-white/40 hover:text-white/60 text-sm mb-8 inline-block transition-colors"
          >
            ← Back to blog
          </Link>

          <div className="flex items-center gap-3 text-sm text-white/40 mb-4">
            <span className="text-owsh-orange font-medium">Behind the Build</span>
            <span>•</span>
            <span>February 24, 2026</span>
            <span>•</span>
            <span>6 min read</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            What 150+ digital health standards actually means for your website
          </h1>

          <p className="text-white/60 text-xl leading-relaxed mb-12">
            Every OWSH Studio site is built against 150+ checks. Here is what that
            looks like in practice, why it matters, and what most agencies skip.
          </p>

          <div className="w-full h-px bg-white/10 mb-12" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose-custom space-y-8"
        >
          <p className="text-white/70 text-lg leading-relaxed">
            When we say every OWSH Studio website passes 150+ health checks before it goes
            live, that sounds like marketing. Like one of those numbers companies throw around
            to seem impressive.
          </p>

          <p className="text-white/70 text-lg leading-relaxed">
            It is not. Here is what it actually means.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">
            Your website is more than what it looks like
          </h2>

          <p className="text-white/70 text-lg leading-relaxed">
            Most people think of a website as a visual thing. Colors, layout, photos,
            maybe a contact form. And yeah, those matter. But underneath the surface, your
            website is a stack of technical decisions that affect whether people can find
            you, trust you, and actually use what you built.
          </p>

          <p className="text-white/70 text-lg leading-relaxed">
            Search engines are reading your code. Screen readers are trying to navigate
            your pages. Browsers are measuring how fast things load. Security scanners
            are checking if your certificates are valid. And your visitors? They leave in
            3 seconds if something feels off.
          </p>

          <p className="text-white/70 text-lg leading-relaxed">
            None of that shows up in a Figma mockup. But all of it determines whether
            your website actually works for your business.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">
            The 6 categories we check
          </h2>

          <p className="text-white/70 text-lg leading-relaxed">
            We built a diagnostic engine called OWSH Systems that runs every site through
            six categories of checks. Every Studio site has to pass these before we
            consider it done.
          </p>

          <div className="space-y-6 my-8">
            <div className="p-6 rounded-xl border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">1. Performance</h3>
              <p className="text-white/60">
                Core Web Vitals, loading speed, mobile optimization, server response
                times. Google uses these to rank you. Your customers use them to decide
                if they wait or leave. We test on real devices, not just desktop Chrome.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">2. SEO</h3>
              <p className="text-white/60">
                Meta tags, heading structure, content quality, schema markup, sitemap
                validation. This is how search engines understand what your business does
                and where you are. Most small business sites are missing half of this.
                Not because they chose to skip it, but because nobody told them it existed.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">3. Accessibility</h3>
              <p className="text-white/60">
                13 WCAG 2.1 AA checks. Alt text on images, form labels, color contrast,
                keyboard navigation, ARIA attributes. About 25% of adults have some form
                of disability. If your site is not accessible, you are turning away
                customers and potentially opening yourself up to legal issues.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">4. Trust and Security</h3>
              <p className="text-white/60">
                SSL validation, security headers, mixed content detection, safe browsing
                checks. If your SSL certificate is expired or your site serves mixed HTTP
                and HTTPS content, browsers will warn visitors before they even see your
                page. That is a business killer.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">5. Content Quality</h3>
              <p className="text-white/60">
                Readability scoring, content freshness, expertise signals, FAQ detection.
                Is your content written for humans or stuffed with keywords from 2019? Does
                your page answer the questions people actually search for? We check.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">6. Deep Site Analysis</h3>
              <p className="text-white/60">
                Multi-page crawl across up to 100 pages. Broken links, redirect chains,
                orphan pages, template analysis. One broken link on your menu page means
                someone trying to order from you hits a dead end instead. We catch that
                before it happens.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white pt-4">
            What most agencies actually deliver
          </h2>

          <p className="text-white/70 text-lg leading-relaxed">
            Here is the uncomfortable truth. Most web agencies do not check any of this.
            They design something that looks good, build it, and hand it over. Maybe
            they run a quick Lighthouse audit and call it a day.
          </p>

          <p className="text-white/70 text-lg leading-relaxed">
            That is not because they are bad at their jobs. It is because checking 150+
            standards across 6 categories manually takes hours. Nobody is doing that for a
            $3,000 website. The economics do not work.
          </p>

          <p className="text-white/70 text-lg leading-relaxed">
            We built the engine to do it automatically. Every site, every time, before
            launch. That is the difference between a website that looks good and a website
            that actually performs.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">
            Why this matters for your business
          </h2>

          <p className="text-white/70 text-lg leading-relaxed">
            A website that scores poorly on these standards is not just a technical
            problem. It is a business problem.
          </p>

          <ul className="space-y-3 text-white/70 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-owsh-orange mt-1.5">•</span>
              <span>Poor performance means higher bounce rates and lower conversions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-owsh-orange mt-1.5">•</span>
              <span>Missing SEO means customers who need you can not find you</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-owsh-orange mt-1.5">•</span>
              <span>Accessibility gaps exclude 25% of potential customers</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-owsh-orange mt-1.5">•</span>
              <span>Security issues destroy trust before someone even reads your first sentence</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-owsh-orange mt-1.5">•</span>
              <span>Stale content tells Google your business might not be active anymore</span>
            </li>
          </ul>

          <p className="text-white/70 text-lg leading-relaxed">
            None of these are things a business owner should have to think about. That is
            the whole point. We think about them so you do not have to.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">
            See where your site stands
          </h2>

          <p className="text-white/70 text-lg leading-relaxed">
            Curious how your current website scores? We built free audit tools that
            anyone can use. No signup, no credit card, no sales pitch. Just paste your
            URL and see what comes back.
          </p>

          <div className="flex flex-wrap gap-4 my-8">
            <a
              href="https://audit.owshsystems.com/page-audit"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-owsh-orange via-owsh-magenta to-owsh-purple text-white font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Try the free Page Audit
            </a>
            <Link
              href="/systems"
              className="px-6 py-3 rounded-full border border-white/20 text-white font-medium text-sm hover:border-white/40 transition-colors"
            >
              Learn about our health engine
            </Link>
          </div>

          <p className="text-white/70 text-lg leading-relaxed">
            Or if you just want a site that passes everything on day one, that is what
            we do. Free to build, simple monthly subscription.{" "}
            <Link href="/contact" className="text-owsh-orange hover:underline underline-offset-4">
              Let&apos;s talk.
            </Link>
          </p>

          {/* Author */}
          <div className="w-full h-px bg-white/10 my-12" />

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden relative">
              <img src="/noah.jpg" alt="Noah Owsiany" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-white font-medium">Noah Owsiany</p>
              <p className="text-white/40 text-sm">Founder, OWSH Studio</p>
            </div>
          </div>
        </motion.div>
      </article>
    </div>
  );
}
