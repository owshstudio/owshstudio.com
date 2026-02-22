import type { Metadata } from "next";
import MultiStepForm from "./MultiStepForm";

export const metadata: Metadata = {
  title: "Get Started",
  description:
    "Tell us about your business and we'll build you a website that actually works.",
};

export default function GetStartedPage() {
  return <MultiStepForm />;
}
