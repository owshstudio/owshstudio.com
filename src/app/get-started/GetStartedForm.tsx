"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Button from "@/components/Button";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const businessTypes = [
  "Restaurant",
  "Home Services",
  "Salon & Spa",
  "Auto",
  "Retail",
  "Professional Services",
  "Other",
];

const yearsOptions = ["Less than 1", "1-3", "3-5", "5-10", "10+"];

const googleBusinessOptions = ["Yes", "No", "Not sure"];

const needsOptions = [
  "New website from scratch",
  "Redesign existing site",
  "Help getting found on Google",
  "Not sure, just want more customers",
];

const featureOptions = [
  "Online booking",
  "Contact form",
  "Photo gallery",
  "Menu or service list",
  "Online store",
  "Blog",
  "Other",
];

const logoOptions = ["Yes", "No", "Need one"];

const referralSources = [
  "Facebook",
  "Instagram",
  "Google",
  "Referral",
  "LinkedIn",
  "Other",
];

function SectionHeader({ title, index }: { title: string; index: number }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="mb-8"
    >
      <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
      <div className="h-px w-12 bg-gradient-to-r from-owsh-orange via-owsh-magenta to-owsh-purple" />
    </motion.div>
  );
}

const inputStyles =
  "w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-owsh-magenta/50 focus:ring-1 focus:ring-owsh-magenta/50 transition-colors";

const selectStyles =
  "w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-owsh-magenta/50 focus:ring-1 focus:ring-owsh-magenta/50 transition-colors appearance-none";

const labelStyles = "block text-sm font-medium text-white/70 mb-2";

export default function GetStartedForm() {
  const [formData, setFormData] = useState({
    businessName: "",
    yourName: "",
    email: "",
    phone: "",
    businessType: "",
    customIndustry: "",
    location: "",
    yearsInBusiness: "",
    currentWebsite: "",
    facebookUrl: "",
    googleBusinessProfile: "",
    instagramHandle: "",
    biggestFrustration: "",
    whatYouNeed: [] as string[],
    mustHaveFeatures: [] as string[],
    hasLogo: "",
    brandColors: "",
    websiteInspiration: "",
    howDidYouHear: "",
    referralName: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const logoInputRef = useRef<HTMLInputElement>(null);
  const photosInputRef = useRef<HTMLInputElement>(null);

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleCheckbox = (field: "whatYouNeed" | "mustHaveFeatures", value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((v) => v !== value)
        : [...prev[field], value],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = new FormData();

      data.append("Business Name", formData.businessName);
      data.append("Name", formData.yourName);
      data.append("Email", formData.email);
      if (formData.phone) data.append("Phone", formData.phone);
      data.append(
        "Business Type",
        formData.businessType === "Other"
          ? formData.customIndustry || "Other"
          : formData.businessType
      );
      data.append("Location", formData.location);
      if (formData.yearsInBusiness)
        data.append("Years in Business", formData.yearsInBusiness);

      if (formData.currentWebsite)
        data.append("Current Website", formData.currentWebsite);
      if (formData.facebookUrl)
        data.append("Facebook", formData.facebookUrl);
      if (formData.googleBusinessProfile)
        data.append("Google Business Profile", formData.googleBusinessProfile);
      if (formData.instagramHandle)
        data.append("Instagram", formData.instagramHandle);
      if (formData.biggestFrustration)
        data.append("Biggest Frustration", formData.biggestFrustration);

      if (formData.whatYouNeed.length > 0)
        data.append("What They Need", formData.whatYouNeed.join(", "));
      if (formData.mustHaveFeatures.length > 0)
        data.append("Must-Have Features", formData.mustHaveFeatures.join(", "));
      if (formData.hasLogo) data.append("Has Logo", formData.hasLogo);
      if (formData.brandColors)
        data.append("Brand Colors/Vibe", formData.brandColors);
      if (formData.websiteInspiration)
        data.append("Website Inspiration", formData.websiteInspiration);

      if (formData.howDidYouHear)
        data.append("How They Found Us", formData.howDidYouHear);
      if (formData.howDidYouHear === "Referral" && formData.referralName)
        data.append("Referral Name", formData.referralName);

      // Attach files
      const logoFiles = logoInputRef.current?.files;
      if (logoFiles && logoFiles.length > 0) {
        data.append("Logo", logoFiles[0]);
      }
      const photoFiles = photosInputRef.current?.files;
      if (photoFiles) {
        for (let i = 0; i < photoFiles.length; i++) {
          data.append("Photos", photoFiles[i]);
        }
      }

      data.append("_subject", `New intake: ${formData.businessName}`);

      const response = await fetch("https://formspree.io/f/mzdarwrn", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      alert("Something went wrong. Please try again or email us directly.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Let&apos;s <span className="gradient-text">build yours</span>
          </h1>
          <p className="text-xl text-white/60">
            Tell us about your business and we&apos;ll take it from here. Most
            sites go live within 5-7 business days.
          </p>
        </motion.div>
      </section>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="p-12 rounded-2xl bg-white/[0.02] border border-white/10 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="flex justify-center mb-8"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-owsh-orange/20 via-owsh-magenta/20 to-owsh-purple/20 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, type: "spring" }}
                  >
                    <CheckCircleIcon className="w-10 h-10 text-owsh-orange" />
                  </motion.div>
                </div>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-2xl sm:text-3xl font-semibold text-white mb-4"
              >
                You&apos;re in!
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-white/60 text-lg"
              >
                We&apos;ll reach out within 24 hours to get started.
              </motion.p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="space-y-16"
            >
              {/* Section 1: About Your Business */}
              <motion.section
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <SectionHeader title="About Your Business" index={0} />
                <div className="space-y-6">
                  <div>
                    <label htmlFor="businessName" className={labelStyles}>
                      Business name <span className="text-owsh-magenta">*</span>
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      required
                      value={formData.businessName}
                      onChange={(e) => updateField("businessName", e.target.value)}
                      className={inputStyles}
                      placeholder="Your business name"
                    />
                  </div>

                  <div>
                    <label htmlFor="yourName" className={labelStyles}>
                      Your name <span className="text-owsh-magenta">*</span>
                    </label>
                    <input
                      type="text"
                      id="yourName"
                      required
                      value={formData.yourName}
                      onChange={(e) => updateField("yourName", e.target.value)}
                      className={inputStyles}
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className={labelStyles}>
                      Email <span className="text-owsh-magenta">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className={inputStyles}
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className={labelStyles}>
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      className={inputStyles}
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="businessType" className={labelStyles}>
                      Business type / industry{" "}
                      <span className="text-owsh-magenta">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="businessType"
                        required
                        value={formData.businessType}
                        onChange={(e) => updateField("businessType", e.target.value)}
                        className={selectStyles}
                      >
                        <option value="" disabled>
                          Select your industry
                        </option>
                        {businessTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                        <svg
                          className="h-4 w-4 text-white/40"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {formData.businessType === "Other" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <label htmlFor="customIndustry" className={labelStyles}>
                          Tell us your industry
                        </label>
                        <input
                          type="text"
                          id="customIndustry"
                          value={formData.customIndustry}
                          onChange={(e) =>
                            updateField("customIndustry", e.target.value)
                          }
                          className={inputStyles}
                          placeholder="e.g. Photography, Fitness, Landscaping..."
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div>
                    <label htmlFor="location" className={labelStyles}>
                      Location (city, state){" "}
                      <span className="text-owsh-magenta">*</span>
                    </label>
                    <input
                      type="text"
                      id="location"
                      required
                      value={formData.location}
                      onChange={(e) => updateField("location", e.target.value)}
                      className={inputStyles}
                      placeholder="Buffalo, NY"
                    />
                  </div>

                  <div>
                    <label htmlFor="yearsInBusiness" className={labelStyles}>
                      Years in business
                    </label>
                    <div className="relative">
                      <select
                        id="yearsInBusiness"
                        value={formData.yearsInBusiness}
                        onChange={(e) =>
                          updateField("yearsInBusiness", e.target.value)
                        }
                        className={selectStyles}
                      >
                        <option value="" disabled>
                          Select
                        </option>
                        {yearsOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                        <svg
                          className="h-4 w-4 text-white/40"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Section 2: Your Current Online Presence */}
              <motion.section
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <SectionHeader title="Your Current Online Presence" index={1} />
                <div className="space-y-6">
                  <div>
                    <label htmlFor="currentWebsite" className={labelStyles}>
                      Current website URL
                    </label>
                    <input
                      type="text"
                      id="currentWebsite"
                      value={formData.currentWebsite}
                      onChange={(e) =>
                        updateField("currentWebsite", e.target.value)
                      }
                      className={inputStyles}
                      placeholder="https://yoursite.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="facebookUrl" className={labelStyles}>
                      Facebook page URL
                    </label>
                    <input
                      type="text"
                      id="facebookUrl"
                      value={formData.facebookUrl}
                      onChange={(e) =>
                        updateField("facebookUrl", e.target.value)
                      }
                      className={inputStyles}
                      placeholder="https://facebook.com/yourbusiness"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="googleBusinessProfile"
                      className={labelStyles}
                    >
                      Google Business Profile
                    </label>
                    <div className="relative">
                      <select
                        id="googleBusinessProfile"
                        value={formData.googleBusinessProfile}
                        onChange={(e) =>
                          updateField("googleBusinessProfile", e.target.value)
                        }
                        className={selectStyles}
                      >
                        <option value="" disabled>
                          Select
                        </option>
                        {googleBusinessOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                        <svg
                          className="h-4 w-4 text-white/40"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="instagramHandle" className={labelStyles}>
                      Instagram handle
                    </label>
                    <input
                      type="text"
                      id="instagramHandle"
                      value={formData.instagramHandle}
                      onChange={(e) =>
                        updateField("instagramHandle", e.target.value)
                      }
                      className={inputStyles}
                      placeholder="@yourbusiness"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="biggestFrustration"
                      className={labelStyles}
                    >
                      What&apos;s your biggest frustration with your online
                      presence right now?
                    </label>
                    <textarea
                      id="biggestFrustration"
                      rows={3}
                      value={formData.biggestFrustration}
                      onChange={(e) =>
                        updateField("biggestFrustration", e.target.value)
                      }
                      className={`${inputStyles} resize-none`}
                      placeholder="e.g. My site is outdated, I don't have one, nobody can find me online..."
                    />
                  </div>
                </div>
              </motion.section>

              {/* Section 3: What You're Looking For */}
              <motion.section
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <SectionHeader title="What You're Looking For" index={2} />
                <div className="space-y-8">
                  <div>
                    <p className={labelStyles}>What do you need?</p>
                    <div className="space-y-3">
                      {needsOptions.map((option) => (
                        <label
                          key={option}
                          className="flex items-center gap-3 cursor-pointer group"
                        >
                          <div className="relative flex items-center justify-center">
                            <input
                              type="checkbox"
                              checked={formData.whatYouNeed.includes(option)}
                              onChange={() =>
                                toggleCheckbox("whatYouNeed", option)
                              }
                              className="peer sr-only"
                            />
                            <div className="w-5 h-5 rounded border border-white/20 bg-white/5 peer-checked:bg-gradient-to-r peer-checked:from-owsh-orange peer-checked:via-owsh-magenta peer-checked:to-owsh-purple peer-checked:border-transparent transition-all flex items-center justify-center">
                              <svg
                                className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={3}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            {formData.whatYouNeed.includes(option) && (
                              <svg
                                className="absolute w-3 h-3 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={3}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            )}
                          </div>
                          <span className="text-white/70 text-sm group-hover:text-white transition-colors">
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className={labelStyles}>Must-have features</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {featureOptions.map((option) => (
                        <label
                          key={option}
                          className="flex items-center gap-3 cursor-pointer group"
                        >
                          <div className="relative flex items-center justify-center">
                            <input
                              type="checkbox"
                              checked={formData.mustHaveFeatures.includes(option)}
                              onChange={() =>
                                toggleCheckbox("mustHaveFeatures", option)
                              }
                              className="peer sr-only"
                            />
                            <div className="w-5 h-5 rounded border border-white/20 bg-white/5 peer-checked:bg-gradient-to-r peer-checked:from-owsh-orange peer-checked:via-owsh-magenta peer-checked:to-owsh-purple peer-checked:border-transparent transition-all flex items-center justify-center">
                              <svg
                                className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={3}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            {formData.mustHaveFeatures.includes(option) && (
                              <svg
                                className="absolute w-3 h-3 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={3}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            )}
                          </div>
                          <span className="text-white/70 text-sm group-hover:text-white transition-colors">
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="hasLogo" className={labelStyles}>
                      Do you have a logo?
                    </label>
                    <div className="relative">
                      <select
                        id="hasLogo"
                        value={formData.hasLogo}
                        onChange={(e) => updateField("hasLogo", e.target.value)}
                        className={selectStyles}
                      >
                        <option value="" disabled>
                          Select
                        </option>
                        {logoOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                        <svg
                          className="h-4 w-4 text-white/40"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="brandColors" className={labelStyles}>
                      Brand colors or vibe?
                    </label>
                    <input
                      type="text"
                      id="brandColors"
                      value={formData.brandColors}
                      onChange={(e) =>
                        updateField("brandColors", e.target.value)
                      }
                      className={inputStyles}
                      placeholder="e.g. modern and clean, rustic and warm, bold and colorful"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="websiteInspiration"
                      className={labelStyles}
                    >
                      Any websites you love the look of?
                    </label>
                    <textarea
                      id="websiteInspiration"
                      rows={3}
                      value={formData.websiteInspiration}
                      onChange={(e) =>
                        updateField("websiteInspiration", e.target.value)
                      }
                      className={`${inputStyles} resize-none`}
                      placeholder="Drop some links or describe what you like"
                    />
                  </div>
                </div>
              </motion.section>

              {/* Section 4: Photos & Assets */}
              <motion.section
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <SectionHeader title="Photos & Assets" index={3} />
                <div className="space-y-6">
                  <div>
                    <label className={labelStyles}>Logo upload</label>
                    <label className="flex flex-col items-center justify-center w-full h-32 rounded-lg border-2 border-dashed border-white/10 bg-white/[0.02] hover:border-owsh-magenta/30 hover:bg-white/[0.04] transition-all cursor-pointer">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          className="w-8 h-8 text-white/30 mb-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                          />
                        </svg>
                        <p className="text-sm text-white/40">
                          Click to upload your logo
                        </p>
                        <p className="text-xs text-white/25 mt-1">
                          PNG, JPG, SVG
                        </p>
                      </div>
                      <input
                        ref={logoInputRef}
                        type="file"
                        className="hidden"
                        accept="image/*,.svg"
                      />
                    </label>
                  </div>

                  <div>
                    <label className={labelStyles}>
                      Photos of your business / work
                    </label>
                    <label className="flex flex-col items-center justify-center w-full h-32 rounded-lg border-2 border-dashed border-white/10 bg-white/[0.02] hover:border-owsh-magenta/30 hover:bg-white/[0.04] transition-all cursor-pointer">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          className="w-8 h-8 text-white/30 mb-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                          />
                        </svg>
                        <p className="text-sm text-white/40">
                          Click to upload photos
                        </p>
                        <p className="text-xs text-white/25 mt-1">
                          Select multiple files
                        </p>
                      </div>
                      <input
                        ref={photosInputRef}
                        type="file"
                        className="hidden"
                        accept="image/*"
                        multiple
                      />
                    </label>
                    <p className="text-xs text-white/30 mt-2">
                      We can work with what you have. Even phone photos work
                      great.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Section 5: How'd You Find Us? */}
              <motion.section
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <SectionHeader title="How'd You Find Us?" index={4} />
                <div className="space-y-6">
                  <div>
                    <label htmlFor="howDidYouHear" className={labelStyles}>
                      How did you hear about OWSH?
                    </label>
                    <div className="relative">
                      <select
                        id="howDidYouHear"
                        value={formData.howDidYouHear}
                        onChange={(e) =>
                          updateField("howDidYouHear", e.target.value)
                        }
                        className={selectStyles}
                      >
                        <option value="" disabled>
                          Select
                        </option>
                        {referralSources.map((source) => (
                          <option key={source} value={source}>
                            {source}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                        <svg
                          className="h-4 w-4 text-white/40"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {formData.howDidYouHear === "Referral" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <label htmlFor="referralName" className={labelStyles}>
                          Who referred you?
                        </label>
                        <input
                          type="text"
                          id="referralName"
                          value={formData.referralName}
                          onChange={(e) =>
                            updateField("referralName", e.target.value)
                          }
                          className={inputStyles}
                          placeholder="Their name"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.section>

              {/* Submit */}
              <motion.div
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </motion.div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
