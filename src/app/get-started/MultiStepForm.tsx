"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Button from "@/components/Button";

// Options constants
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

interface FormState {
  businessName: string;
  yourName: string;
  email: string;
  phone: string;
  businessType: string;
  customIndustry: string;
  location: string;
  yearsInBusiness: string;
  currentWebsite: string;
  facebookUrl: string;
  googleBusinessProfile: string;
  instagramHandle: string;
  biggestFrustration: string;
  whatYouNeed: string[];
  mustHaveFeatures: string[];
  hasLogo: string;
  brandColors: string;
  websiteInspiration: string;
  howDidYouHear: string;
  referralName: string;
}

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for back
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const logoInputRef = useRef<HTMLInputElement>(null);
  const photosInputRef = useRef<HTMLInputElement>(null);

  const [formState, setFormState] = useState<FormState>({
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
    whatYouNeed: [],
    mustHaveFeatures: [],
    hasLogo: "",
    brandColors: "",
    websiteInspiration: "",
    howDidYouHear: "",
    referralName: "",
  });

  const updateFormState = (field: keyof FormState, value: any) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const toggleArrayValue = (field: "whatYouNeed" | "mustHaveFeatures", value: string) => {
    setFormState((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((v) => v !== value)
        : [...prev[field], value],
    }));
  };

  const validateStep = (step: number): boolean => {
    if (step === 1) {
      return !!(
        formState.businessName.trim() &&
        formState.yourName.trim() &&
        formState.email.trim()
      );
    }
    if (step === 2) {
      return !!(formState.businessType && formState.location.trim());
    }
    return true;
  };

  const goToNextStep = () => {
    if (validateStep(currentStep)) {
      setDirection(1);
      setCurrentStep((prev) => Math.min(prev + 1, 5));
    }
  };

  const goToPrevStep = () => {
    setDirection(-1);
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      const formData = new FormData();

      // Add form fields with readable names
      formData.append("Business Name", formState.businessName);
      formData.append("Your Name", formState.yourName);
      formData.append("Email", formState.email);
      formData.append("Phone", formState.phone);
      formData.append(
        "Business Type",
        formState.businessType === "Other"
          ? formState.customIndustry
          : formState.businessType
      );
      formData.append("Location", formState.location);
      formData.append("Years in Business", formState.yearsInBusiness);
      formData.append("Current Website", formState.currentWebsite);
      formData.append("Facebook URL", formState.facebookUrl);
      formData.append("Google Business Profile", formState.googleBusinessProfile);
      formData.append("Instagram Handle", formState.instagramHandle);
      formData.append("Biggest Frustration", formState.biggestFrustration);
      formData.append("What You Need", formState.whatYouNeed.join(", "));
      formData.append("Must-Have Features", formState.mustHaveFeatures.join(", "));
      formData.append("Has Logo", formState.hasLogo);
      formData.append("Brand Colors/Vibe", formState.brandColors);
      formData.append("Website Inspiration", formState.websiteInspiration);
      formData.append("How Did You Hear", formState.howDidYouHear);
      if (formState.referralName) {
        formData.append("Referral Name", formState.referralName);
      }

      // Add subject
      formData.append("_subject", `New intake: ${formState.businessName}`);

      // Add logo file
      if (logoInputRef.current?.files?.[0]) {
        formData.append("logo", logoInputRef.current.files[0]);
      }

      // Add photo files
      if (photosInputRef.current?.files) {
        Array.from(photosInputRef.current.files).forEach((file, index) => {
          formData.append(`photo_${index + 1}`, file);
        });
      }

      const response = await fetch("https://formspree.io/f/mzdarwrn", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Something went wrong. Please try again or email us directly.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -50 : 50,
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Let&apos;s{" "}
            <span className="gradient-text bg-gradient-to-r from-owsh-orange via-owsh-magenta to-owsh-purple bg-clip-text text-transparent">
              build yours
            </span>
          </h1>
          <p className="text-xl text-white/60">
            Tell us about your business and we&apos;ll take it from here. Most sites
            go live within 5-7 business days.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-12">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Progress Bar */}
                <div className="mb-12">
                  <div className="text-center text-sm font-medium text-white/70 mb-3">
                    Step {currentStep} of 5
                  </div>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((step) => (
                      <div
                        key={step}
                        className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                          step <= currentStep
                            ? "bg-gradient-to-r from-owsh-orange via-owsh-magenta to-owsh-purple"
                            : "bg-white/10"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Step Content */}
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentStep}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                  >
                    {/* Step 1: About Your Business */}
                    {currentStep === 1 && (
                      <div>
                        <h2 className="text-2xl font-semibold text-white mb-2">
                          About Your Business
                        </h2>
                        <div className="h-px w-12 bg-gradient-to-r from-owsh-orange via-owsh-magenta to-owsh-purple mb-8" />

                        <div className="space-y-6">
                          <div>
                            <label className="block text-sm font-medium text-white/70 mb-2">
                              Business Name *
                            </label>
                            <input
                              type="text"
                              value={formState.businessName}
                              onChange={(e) =>
                                updateFormState("businessName", e.target.value)
                              }
                              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-owsh-magenta/50 focus:ring-1 focus:ring-owsh-magenta/50 transition-colors"
                              placeholder="Your business name"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-white/70 mb-2">
                              Your Name *
                            </label>
                            <input
                              type="text"
                              value={formState.yourName}
                              onChange={(e) =>
                                updateFormState("yourName", e.target.value)
                              }
                              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-owsh-magenta/50 focus:ring-1 focus:ring-owsh-magenta/50 transition-colors"
                              placeholder="First and last name"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-white/70 mb-2">
                              Email *
                            </label>
                            <input
                              type="email"
                              value={formState.email}
                              onChange={(e) => updateFormState("email", e.target.value)}
                              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-owsh-magenta/50 focus:ring-1 focus:ring-owsh-magenta/50 transition-colors"
                              placeholder="your@email.com"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-white/70 mb-2">
                              Phone
                            </label>
                            <input
                              type="tel"
                              value={formState.phone}
                              onChange={(e) => updateFormState("phone", e.target.value)}
                              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-owsh-magenta/50 focus:ring-1 focus:ring-owsh-magenta/50 transition-colors"
                              placeholder="(555) 123-4567"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Your Industry & Location */}
                    {currentStep === 2 && (
                      <div>
                        <h2 className="text-2xl font-semibold text-white mb-2">
                          Your Industry &amp; Location
                        </h2>
                        <div className="h-px w-12 bg-gradient-to-r from-owsh-orange via-owsh-magenta to-owsh-purple mb-8" />

                        <div className="space-y-6">
                          <div>
                            <label className="block text-sm font-medium text-white/70 mb-2">
                              Business Type *
                            </label>
                            <div className="relative">
                              <select
                                value={formState.businessType}
                                onChange={(e) =>
                                  updateFormState("businessType", e.target.value)
                                }
                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-owsh-magenta/50 focus:ring-1 focus:ring-owsh-magenta/50 transition-colors appearance-none"
                              >
                                <option value="" style={{ backgroundColor: "#1a1a1a", color: "white" }}>
                                  Select your industry
                                </option>
                                {businessTypes.map((type) => (
                                  <option
                                    key={type}
                                    value={type}
                                    style={{ backgroundColor: "#1a1a1a", color: "white" }}
                                  >
                                    {type}
                                  </option>
                                ))}
                              </select>
                              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                <svg
                                  className="w-5 h-5 text-white/50"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
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

                          {formState.businessType === "Other" && (
                            <div>
                              <label className="block text-sm font-medium text-white/70 mb-2">
                                What industry are you in?
                              </label>
                              <input
                                type="text"
                                value={formState.customIndustry}
                                onChange={(e) =>
                                  updateFormState("customIndustry", e.target.value)
                                }
                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-owsh-magenta/50 focus:ring-1 focus:ring-owsh-magenta/50 transition-colors"
                                placeholder="Tell us your industry"
                              />
                            </div>
                          )}

                          <div>
                            <label className="block text-sm font-medium text-white/70 mb-2">
                              Location (City, State) *
                            </label>
                            <input
                              type="text"
                              value={formState.location}
                              onChange={(e) =>
                                updateFormState("location", e.target.value)
                              }
                              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-owsh-magenta/50 focus:ring-1 focus:ring-owsh-magenta/50 transition-colors"
                              placeholder="Austin, TX"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-white/70 mb-2">
                              Years in Business
                            </label>
                            <div className="relative">
                              <select
                                value={formState.yearsInBusiness}
                                onChange={(e) =>
                                  updateFormState("yearsInBusiness", e.target.value)
                                }
                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-owsh-magenta/50 focus:ring-1 focus:ring-owsh-magenta/50 transition-colors appearance-none"
                              >
                                <option value="" style={{ backgroundColor: "#1a1a1a", color: "white" }}>
                                  Select years
                                </option>
                                {yearsOptions.map((years) => (
                                  <option
                                    key={years}
                                    value={years}
                                    style={{ backgroundColor: "#1a1a1a", color: "white" }}
                                  >
                                    {years}
                                  </option>
                                ))}
                              </select>
                              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                <svg
                                  className="w-5 h-5 text-white/50"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
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
                      </div>
                    )}

                    {/* Step 3: Your Online Presence */}
                    {currentStep === 3 && (
                      <div>
                        <h2 className="text-2xl font-semibold text-white mb-2">
                          Your Online Presence
                        </h2>
                        <div className="h-px w-12 bg-gradient-to-r from-owsh-orange via-owsh-magenta to-owsh-purple mb-8" />

                        <div className="space-y-6">
                          <div>
                            <label className="block text-sm font-medium text-white/70 mb-2">
                              Current Website URL
                            </label>
                            <input
                              type="url"
                              value={formState.currentWebsite}
                              onChange={(e) =>
                                updateFormState("currentWebsite", e.target.value)
                              }
                              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-owsh-magenta/50 focus:ring-1 focus:ring-owsh-magenta/50 transition-colors"
                              placeholder="https://yourwebsite.com"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-white/70 mb-2">
                              Facebook Page URL
                            </label>
                            <input
                              type="url"
                              value={formState.facebookUrl}
                              onChange={(e) =>
                                updateFormState("facebookUrl", e.target.value)
                              }
                              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-owsh-magenta/50 focus:ring-1 focus:ring-owsh-magenta/50 transition-colors"
                              placeholder="https://facebook.com/yourpage"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-white/70 mb-2">
                              Google Business Profile
                            </label>
                            <div className="relative">
                              <select
                                value={formState.googleBusinessProfile}
                                onChange={(e) =>
                                  updateFormState("googleBusinessProfile", e.target.value)
                                }
                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-owsh-magenta/50 focus:ring-1 focus:ring-owsh-magenta/50 transition-colors appearance-none"
                              >
                                <option value="" style={{ backgroundColor: "#1a1a1a", color: "white" }}>
                                  Select an option
                                </option>
                                {googleBusinessOptions.map((option) => (
                                  <option
                                    key={option}
                                    value={option}
                                    style={{ backgroundColor: "#1a1a1a", color: "white" }}
                                  >
                                    {option}
                                  </option>
                                ))}
                              </select>
                              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                <svg
                                  className="w-5 h-5 text-white/50"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
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
                            <label className="block text-sm font-medium text-white/70 mb-2">
                              Instagram Handle
                            </label>
                            <input
                              type="text"
                              value={formState.instagramHandle}
                              onChange={(e) =>
                                updateFormState("instagramHandle", e.target.value)
                              }
                              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-owsh-magenta/50 focus:ring-1 focus:ring-owsh-magenta/50 transition-colors"
                              placeholder="@yourbusiness"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-white/70 mb-2">
                              What&apos;s your biggest frustration with your current
                              online presence?
                            </label>
                            <textarea
                              value={formState.biggestFrustration}
                              onChange={(e) =>
                                updateFormState("biggestFrustration", e.target.value)
                              }
                              rows={4}
                              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-owsh-magenta/50 focus:ring-1 focus:ring-owsh-magenta/50 transition-colors resize-none"
                              placeholder="Tell us what's not working..."
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 4: What You Need */}
                    {currentStep === 4 && (
                      <div>
                        <h2 className="text-2xl font-semibold text-white mb-2">
                          What You Need
                        </h2>
                        <div className="h-px w-12 bg-gradient-to-r from-owsh-orange via-owsh-magenta to-owsh-purple mb-8" />

                        <div className="space-y-6">
                          <div>
                            <label className="block text-sm font-medium text-white/70 mb-3">
                              What do you need?
                            </label>
                            <div className="space-y-3">
                              {needsOptions.map((option) => (
                                <label
                                  key={option}
                                  className="flex items-start gap-3 cursor-pointer group"
                                >
                                  <input
                                    type="checkbox"
                                    checked={formState.whatYouNeed.includes(option)}
                                    onChange={() => toggleArrayValue("whatYouNeed", option)}
                                    className="sr-only"
                                  />
                                  <div
                                    className={`flex-shrink-0 w-5 h-5 rounded border-2 transition-all mt-0.5 ${
                                      formState.whatYouNeed.includes(option)
                                        ? "bg-gradient-to-r from-owsh-orange via-owsh-magenta to-owsh-purple border-transparent"
                                        : "border-white/30 group-hover:border-white/50"
                                    }`}
                                  >
                                    {formState.whatYouNeed.includes(option) && (
                                      <svg
                                        className="w-full h-full text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={3}
                                          d="M5 13l4 4L19 7"
                                        />
                                      </svg>
                                    )}
                                  </div>
                                  <span className="text-white/90 group-hover:text-white transition-colors">
                                    {option}
                                  </span>
                                </label>
                              ))}
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-white/70 mb-3">
                              Must-have features
                            </label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {featureOptions.map((option) => (
                                <label
                                  key={option}
                                  className="flex items-start gap-3 cursor-pointer group"
                                >
                                  <input
                                    type="checkbox"
                                    checked={formState.mustHaveFeatures.includes(option)}
                                    onChange={() =>
                                      toggleArrayValue("mustHaveFeatures", option)
                                    }
                                    className="sr-only"
                                  />
                                  <div
                                    className={`flex-shrink-0 w-5 h-5 rounded border-2 transition-all mt-0.5 ${
                                      formState.mustHaveFeatures.includes(option)
                                        ? "bg-gradient-to-r from-owsh-orange via-owsh-magenta to-owsh-purple border-transparent"
                                        : "border-white/30 group-hover:border-white/50"
                                    }`}
                                  >
                                    {formState.mustHaveFeatures.includes(option) && (
                                      <svg
                                        className="w-full h-full text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={3}
                                          d="M5 13l4 4L19 7"
                                        />
                                      </svg>
                                    )}
                                  </div>
                                  <span className="text-white/90 group-hover:text-white transition-colors">
                                    {option}
                                  </span>
                                </label>
                              ))}
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-white/70 mb-2">
                              Do you have a logo?
                            </label>
                            <div className="relative">
                              <select
                                value={formState.hasLogo}
                                onChange={(e) =>
                                  updateFormState("hasLogo", e.target.value)
                                }
                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-owsh-magenta/50 focus:ring-1 focus:ring-owsh-magenta/50 transition-colors appearance-none"
                              >
                                <option value="" style={{ backgroundColor: "#1a1a1a", color: "white" }}>
                                  Select an option
                                </option>
                                {logoOptions.map((option) => (
                                  <option
                                    key={option}
                                    value={option}
                                    style={{ backgroundColor: "#1a1a1a", color: "white" }}
                                  >
                                    {option}
                                  </option>
                                ))}
                              </select>
                              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                <svg
                                  className="w-5 h-5 text-white/50"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
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
                            <label className="block text-sm font-medium text-white/70 mb-2">
                              Brand colors or vibe
                            </label>
                            <input
                              type="text"
                              value={formState.brandColors}
                              onChange={(e) =>
                                updateFormState("brandColors", e.target.value)
                              }
                              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-owsh-magenta/50 focus:ring-1 focus:ring-owsh-magenta/50 transition-colors"
                              placeholder="e.g., Bold and modern, earthy tones, playful..."
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-white/70 mb-2">
                              Websites you love (inspiration)
                            </label>
                            <textarea
                              value={formState.websiteInspiration}
                              onChange={(e) =>
                                updateFormState("websiteInspiration", e.target.value)
                              }
                              rows={3}
                              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-owsh-magenta/50 focus:ring-1 focus:ring-owsh-magenta/50 transition-colors resize-none"
                              placeholder="Share URLs or describe styles you like..."
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 5: Almost Done */}
                    {currentStep === 5 && (
                      <div>
                        <h2 className="text-2xl font-semibold text-white mb-2">
                          Almost Done
                        </h2>
                        <div className="h-px w-12 bg-gradient-to-r from-owsh-orange via-owsh-magenta to-owsh-purple mb-8" />

                        <div className="space-y-6">
                          <div>
                            <label className="block text-sm font-medium text-white/70 mb-2">
                              Upload your logo (if you have one)
                            </label>
                            <div className="relative">
                              <input
                                ref={logoInputRef}
                                type="file"
                                accept="image/*,.svg,.pdf"
                                className="sr-only"
                                id="logo-upload"
                              />
                              <label
                                htmlFor="logo-upload"
                                className="flex flex-col items-center justify-center gap-3 px-6 py-8 rounded-lg border-2 border-dashed border-white/20 hover:border-white/40 transition-colors cursor-pointer group"
                              >
                                <svg
                                  className="w-12 h-12 text-white/30 group-hover:text-white/50 transition-colors"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                  />
                                </svg>
                                <div className="text-center">
                                  <p className="text-white/70 group-hover:text-white/90 transition-colors">
                                    Click to upload or drag and drop
                                  </p>
                                  <p className="text-sm text-white/40 mt-1">
                                    PNG, JPG, SVG, or PDF
                                  </p>
                                </div>
                              </label>
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-white/70 mb-2">
                              Upload photos of your work or products
                            </label>
                            <div className="relative">
                              <input
                                ref={photosInputRef}
                                type="file"
                                accept="image/*"
                                multiple
                                className="sr-only"
                                id="photos-upload"
                              />
                              <label
                                htmlFor="photos-upload"
                                className="flex flex-col items-center justify-center gap-3 px-6 py-8 rounded-lg border-2 border-dashed border-white/20 hover:border-white/40 transition-colors cursor-pointer group"
                              >
                                <svg
                                  className="w-12 h-12 text-white/30 group-hover:text-white/50 transition-colors"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                  />
                                </svg>
                                <div className="text-center">
                                  <p className="text-white/70 group-hover:text-white/90 transition-colors">
                                    Click to upload or drag and drop
                                  </p>
                                  <p className="text-sm text-white/40 mt-1">
                                    Multiple files accepted
                                  </p>
                                </div>
                              </label>
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-white/70 mb-2">
                              How did you hear about us?
                            </label>
                            <div className="relative">
                              <select
                                value={formState.howDidYouHear}
                                onChange={(e) =>
                                  updateFormState("howDidYouHear", e.target.value)
                                }
                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-owsh-magenta/50 focus:ring-1 focus:ring-owsh-magenta/50 transition-colors appearance-none"
                              >
                                <option value="" style={{ backgroundColor: "#1a1a1a", color: "white" }}>
                                  Select an option
                                </option>
                                {referralSources.map((source) => (
                                  <option
                                    key={source}
                                    value={source}
                                    style={{ backgroundColor: "#1a1a1a", color: "white" }}
                                  >
                                    {source}
                                  </option>
                                ))}
                              </select>
                              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                <svg
                                  className="w-5 h-5 text-white/50"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
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

                          {formState.howDidYouHear === "Referral" && (
                            <div>
                              <label className="block text-sm font-medium text-white/70 mb-2">
                                Who referred you?
                              </label>
                              <input
                                type="text"
                                value={formState.referralName}
                                onChange={(e) =>
                                  updateFormState("referralName", e.target.value)
                                }
                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-owsh-magenta/50 focus:ring-1 focus:ring-owsh-magenta/50 transition-colors"
                                placeholder="Their name or business"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="flex gap-4 mt-12">
                  {currentStep > 1 && (
                    <Button variant="secondary" onClick={goToPrevStep}>
                      Back
                    </Button>
                  )}

                  {currentStep < 5 ? (
                    <Button
                      onClick={goToNextStep}
                      disabled={!validateStep(currentStep)}
                      className="ml-auto"
                    >
                      Next
                    </Button>
                  ) : (
                    <Button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="ml-auto"
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                  )}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 0.2,
                  }}
                  className="inline-block mb-6"
                >
                  <CheckCircleIcon className="w-24 h-24 text-owsh-magenta" />
                </motion.div>
                <h2 className="text-4xl font-bold text-white mb-4">
                  You&apos;re in!
                </h2>
                <p className="text-xl text-white/60">
                  We&apos;ll reach out within 24 hours to get started.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
