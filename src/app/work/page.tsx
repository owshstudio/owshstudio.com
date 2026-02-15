"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";

const projects = [
  {
    id: "orange-crate-brewing",
    title: "Orange Crate Brewing Co.",
    category: "Food & Beverage",
    location: "Syracuse, NY",
    description:
      "Syracuse's go-to sports bar and brewery needed a site that matched their game day energy and drove online orders.",
    image: "/work/orangecrate.jpg",
    url: "https://orangecratebrewingco.com",
    featured: true,
    stats: [
      { label: "Type", value: "Restaurant" },
      { label: "Features", value: "Menu, Events" },
      { label: "Orders", value: "Online" },
    ],
  },
  {
    id: "collegeclassreviews",
    title: "CollegeClassReviews",
    category: "Education Platform",
    location: "Studio Project",
    description:
      "Course review platform for NY universities. 14,000+ pages of dynamically generated content with full CMS.",
    image: "/work/collegeclassreviews.jpg",
    url: "https://collegeclassreviews.com",
    featured: false,
    stats: [
      { label: "Pages", value: "14K+" },
      { label: "Type", value: "Full CMS" },
    ],
  },
  {
    id: "mclears-cottage-colony",
    title: "McLear's Cottage Colony",
    category: "Hospitality",
    location: "Hammond, NY",
    description:
      "A 90-year-old family cottage colony needed a modern website that honored their rich heritage.",
    image: "/work/mclears.jpg",
    url: "/work/mclears-cottage-colony",
    featured: false,
    stats: [
      { label: "Pages", value: "6" },
      { label: "Plan", value: "Standard" },
    ],
  },
  {
    id: "puckcast",
    title: "PuckCast.ai",
    category: "Sports Analytics",
    location: "Studio Project",
    description:
      "NHL predictions and analytics platform with real-time data and power rankings.",
    image: "/work/puckcast.jpg",
    url: "https://puckcast.ai",
    featured: false,
    stats: [
      { label: "Type", value: "Web App" },
      { label: "Stack", value: "Next.js" },
    ],
  },
  {
    id: "owsh-systems",
    title: "OWSH Systems",
    category: "SaaS Platform",
    location: "Studio Project",
    description:
      "Website health platform that helps businesses understand and improve their digital presence.",
    image: "/work/owshsystems.jpg",
    url: "https://owshsystems.com",
    featured: false,
    stats: [
      { label: "Type", value: "SaaS" },
      { label: "Stack", value: "Next.js" },
    ],
  },
  {
    id: "coming-soon",
    title: "Your Business",
    category: "Could be here",
    location: "Buffalo, NY",
    description:
      "Want to be featured here? Let's build something you're proud of.",
    image: null,
    url: "/contact",
    featured: false,
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function WorkPage() {
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
            Our <span className="gradient-text">work</span>
          </h1>
          <p className="text-xl text-white/60">
            Real sites for real businesses. No templates, no shortcuts—just
            thoughtful design that serves your customers.
          </p>
        </motion.div>
      </section>

      {/* Featured Project */}
      {projects.filter((p) => p.featured).map((project) => (
        <section key={project.id} className="mb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="group block">
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden gradient-border mb-8">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-owsh-orange/10 via-owsh-magenta/10 to-owsh-purple/10" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

                  {/* Overlay content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <div className="flex items-center gap-2 text-owsh-orange text-sm font-medium mb-3 drop-shadow-lg">
                      <span>{project.category}</span>
                      <span className="text-white/30">•</span>
                      <span className="text-white/50">{project.location}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 group-hover:gradient-text transition-all drop-shadow-lg">
                      {project.title}
                    </h2>
                    <p className="text-white/70 text-lg max-w-2xl mb-6 drop-shadow-lg">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-8">
                      {project.stats?.map((stat) => (
                        <div key={stat.label}>
                          <div className="text-2xl font-bold text-white drop-shadow-lg">
                            {stat.value}
                          </div>
                          <div className="text-sm text-white/50 drop-shadow-lg">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visit site button */}
                  <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="flex items-center gap-2 px-4 py-2 bg-white text-owsh-dark rounded-full text-sm font-medium">
                      Visit Site
                      <ArrowUpRightIcon className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Other Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold text-white mb-8"
        >
          More projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {project.url.startsWith('http') ? (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="group block">
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden gradient-border mb-4">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-owsh-orange/10 via-owsh-magenta/10 to-owsh-purple/10 flex items-center justify-center">
                          <span className="text-white/20 text-lg font-medium">Your project here</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-owsh-orange text-sm font-medium mb-2">
                      <span>{project.category}</span>
                      {project.location && (
                        <>
                          <span className="text-white/30">•</span>
                          <span className="text-white/50">{project.location}</span>
                        </>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:gradient-text transition-all mb-2">
                      {project.title}
                    </h3>
                    <p className="text-white/50 text-sm">{project.description}</p>
                  </a>
                ) : (
                  <Link href={project.url} className="group block">
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden gradient-border mb-4">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-owsh-orange/10 via-owsh-magenta/10 to-owsh-purple/10 flex items-center justify-center">
                          <span className="text-white/20 text-lg font-medium">Your project here</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-owsh-orange text-sm font-medium mb-2">
                      <span>{project.category}</span>
                      {project.location && (
                        <>
                          <span className="text-white/30">•</span>
                          <span className="text-white/50">{project.location}</span>
                        </>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:gradient-text transition-all mb-2">
                      {project.title}
                    </h3>
                    <p className="text-white/50 text-sm">{project.description}</p>
                  </Link>
                )}
              </motion.div>
            ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-owsh-orange/10 via-owsh-magenta/10 to-owsh-purple/10" />
          <div className="relative p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Want to see your business here?
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
              Let&apos;s build something you&apos;re proud of.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-owsh-orange via-owsh-magenta to-owsh-purple rounded-full text-white font-medium hover:opacity-90 transition-opacity btn-glow"
            >
              Start Your Project
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
