"use client";

import { useEffect } from "react";

export function EasterEgg() {
  useEffect(() => {
    // Console easter egg
    const styles = [
      "color: #DF4F15",
      "font-size: 20px",
      "font-weight: bold",
    ].join(";");

    const subStyles = [
      "color: #A326B5",
      "font-size: 14px",
    ].join(";");

    console.log("%c⬆️ OWSH Studio", styles);
    console.log("%cWe build websites that work.", subStyles);
    console.log(
      "%cLooking for a job? Email hello@owshunlimited.com",
      "color: #F9425F; font-size: 12px;"
    );

    // Konami code easter egg
    const konamiCode = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "KeyB",
      "KeyA",
    ];
    let konamiIndex = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          // Trigger easter egg
          document.body.style.animation = "rainbow 3s ease-in-out";
          setTimeout(() => {
            document.body.style.animation = "";
          }, 3000);
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return null;
}
