"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
}

const posts: BlogPost[] = [
  {
    slug: "what-150-health-standards-means",
    title: "What 150+ digital health standards actually means for your website",
    excerpt:
      "Every OWSH Studio site is built against 150+ checks. Here is what that looks like in practice, why it matters, and what most agencies skip.",
    date: "February 24, 2026",
    readTime: "6 min read",
    category: "Behind the Build",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Blog</h1>
          <p className="text-white/60 text-lg mb-16">
            How we build, what we check, and why it matters.
          </p>
        </motion.div>

        <div className="space-y-12">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="flex items-center gap-3 text-sm text-white/40 mb-3">
                  <span className="text-owsh-orange font-medium">{post.category}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white group-hover:gradient-text transition-all mb-3">
                  {post.title}
                </h2>
                <p className="text-white/60 text-lg leading-relaxed">{post.excerpt}</p>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
