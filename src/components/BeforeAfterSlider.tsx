"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";

export default function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percent = Math.min(Math.max((x / rect.width) * 100, 0), 100);
      setSliderPosition(percent);
    },
    []
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      setIsDragging(true);
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      setIsDragging(true);
      updatePosition(e.touches[0].clientX);
    },
    [updatePosition]
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      updatePosition(e.touches[0].clientX);
    };

    const handleEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleEnd);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging, updatePosition]);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/9] rounded-2xl overflow-hidden gradient-border cursor-col-resize select-none"
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      {/* After image (full, behind) */}
      <Image
        src="/work/twin-trees-after-hero.jpg"
        alt="Twin Trees Fayetteville website after redesign"
        fill
        className="object-cover"
        draggable={false}
      />

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src="/work/twin-trees-before-hero.jpg"
          alt="Twin Trees Fayetteville website before redesign"
          fill
          className="object-cover"
          draggable={false}
        />
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white/80 text-xs font-medium uppercase tracking-wider pointer-events-none">
        Before
      </div>
      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white/80 text-xs font-medium uppercase tracking-wider pointer-events-none">
        After
      </div>

      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 z-10 pointer-events-none"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        {/* Vertical line */}
        <div className="w-[2px] h-full bg-gradient-to-b from-[#DF4F15] via-[#F9425F] to-[#A326B5]" />

        {/* Grip circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-[#DF4F15] via-[#F9425F] to-[#A326B5] shadow-lg shadow-black/50 flex items-center justify-center">
          <div className="flex items-center gap-[3px]">
            <svg
              width="6"
              height="14"
              viewBox="0 0 6 14"
              fill="none"
              className="text-white/90"
            >
              <path
                d="M4 1L1 7L4 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              width="6"
              height="14"
              viewBox="0 0 6 14"
              fill="none"
              className="text-white/90"
            >
              <path
                d="M2 1L5 7L2 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
