"use client";

import * as React from "react";
import Link from "next/link";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
  variant?: "dark" | "light" | "auto";
  showTagline?: boolean;
}

export function BrandLogo({
  className = "",
  size = "md",
  href = "/",
  variant = "dark",
  showTagline = true,
}: BrandLogoProps) {
  // Size variations
  const sizeStyles = {
    sm: {
      text: "text-lg sm:text-xl",
      sun: "w-[1.15em] h-[1.15em] -mx-[0.04em]",
      tagline: "text-[8px] tracking-[0.24em]",
      spacing: "gap-1",
    },
    md: {
      text: "text-2xl sm:text-[27px]",
      sun: "w-[1.18em] h-[1.18em] -mx-[0.04em]",
      tagline: "text-[9px] tracking-[0.26em]",
      spacing: "gap-1.5",
    },
    lg: {
      text: "text-3xl sm:text-4xl",
      sun: "w-[1.2em] h-[1.2em] -mx-[0.04em]",
      tagline: "text-[10px] tracking-[0.28em]",
      spacing: "gap-2",
    },
    xl: {
      text: "text-4xl sm:text-5xl",
      sun: "w-[1.22em] h-[1.22em] -mx-[0.04em]",
      tagline: "text-xs tracking-[0.3em]",
      spacing: "gap-2.5",
    },
  }[size];

  const textColor =
    variant === "light"
      ? "text-charcoal-950"
      : "text-white";

  const content = (
    <div className={`flex flex-col group select-none ${className}`}>
      <div
        className={`inline-flex items-baseline font-[family-name:var(--font-outfit),var(--font-manrope),sans-serif] font-black tracking-[-0.04em] lowercase ${sizeStyles.text} ${textColor} leading-none transition-transform duration-300 group-hover:scale-[1.01]`}
      >
        <span>s</span>
        
        {/* Custom Sunburst 'o' with Horizontal Solar Flare */}
        <span className="relative inline-flex items-center justify-center self-center align-middle">
          <svg
            viewBox="0 0 46 32"
            className={`${sizeStyles.sun} text-solar-400 overflow-visible transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(245,179,56,0.65)] group-hover:scale-105`}
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Multi-pointed sharp sun rays */}
            <path
              d="M 21.99 15.60 L 28.80 16.00 L 21.99 16.40 Z M 21.82 17.47 L 28.17 19.96 L 21.57 18.23 Z M 21.08 19.20 L 26.36 23.52 L 20.61 19.84 Z M 19.84 20.61 L 23.52 26.36 L 19.20 21.08 Z M 18.23 21.57 L 19.96 28.17 L 17.47 21.82 Z M 16.40 21.99 L 16.00 28.80 L 15.60 21.99 Z M 14.53 21.82 L 12.04 28.17 L 13.77 21.57 Z M 12.80 21.08 L 8.48 26.36 L 12.16 20.61 Z M 11.39 19.84 L 5.64 23.52 L 10.92 19.20 Z M 10.43 18.23 L 3.83 19.96 L 10.18 17.47 Z M 10.01 16.40 L 3.20 16.00 L 10.01 15.60 Z M 10.18 14.53 L 3.83 12.04 L 10.43 13.77 Z M 10.92 12.80 L 5.64 8.48 L 11.39 12.16 Z M 12.16 11.39 L 8.48 5.64 L 12.80 10.92 Z M 13.77 10.43 L 12.04 3.83 L 14.53 10.18 Z M 15.60 10.01 L 16.00 3.20 L 16.40 10.01 Z M 17.47 10.18 L 19.96 3.83 L 18.23 10.43 Z M 19.20 10.92 L 23.52 5.64 L 19.84 11.39 Z M 20.61 12.16 L 26.36 8.48 L 21.08 12.80 Z M 21.57 13.77 L 28.17 12.04 L 21.82 14.53 Z"
            />
            {/* Center sun disc border & hollow counter */}
            <circle
              cx="16"
              cy="16"
              r="6.2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
            />
            {/* Horizontal solar flare beam shooting rightward across baseline */}
            <polygon
              points="18,17.2 45,18.5 19,19.8"
              fill="currentColor"
              className="opacity-95"
            />
          </svg>
        </span>

        <span>lar</span>
        <span className="inline-block w-[0.32em]" />
        <span>legacy</span>
      </div>

      {showTagline && (
        <span
          className={`font-heading font-semibold uppercase ${sizeStyles.tagline} text-beige-300/80 -mt-0.5 transition-colors group-hover:text-solar-300`}
        >
          Architectural Solar &amp; Storage
        </span>
      )}
    </div>
  );

  if (!href) return content;

  return (
    <Link href={href} className="inline-flex items-center focus:outline-none">
      {content}
    </Link>
  );
}
