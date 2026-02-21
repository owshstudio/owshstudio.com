import type { Metadata } from "next";
import GetStartedForm from "./GetStartedForm";

export const metadata: Metadata = {
  title: "Get Started",
  description:
    "Tell us about your business and we'll build you a website that actually works.",
};

export default function GetStartedPage() {
  return <GetStartedForm />;
}
