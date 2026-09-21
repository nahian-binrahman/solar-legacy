"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  href?: string;
  scrolled?: boolean;
  variant?: "dark" | "light" | "auto";
}

export function BrandLogo({
  className = "",
  size = "md",
  href = "/",
  scrolled = false,
  variant = "auto",
}: BrandLogoProps) {
  const heightClass = scrolled
    ? size === "lg"
      ? "h-9 sm:h-10"
      : "h-7 sm:h-8"
    : size === "lg"
    ? "h-11 sm:h-12"
    : "h-8 sm:h-9";

  const isLight = variant === "light";

  const content = (
    <div
      className={`relative inline-flex items-center transition-all duration-300 group select-none ${className}`}
    >
      <div className="relative flex items-center">
        {/* Dark background version (white text + gold sun) */}
        <Image
          src="/logo-dark.png"
          alt="Solar Legacy Logo"
          width={340}
          height={86}
          className={`${heightClass} w-auto object-contain transition-all duration-500 filter group-hover:brightness-110 ${
            isLight ? "opacity-0 absolute inset-0 pointer-events-none" : "opacity-100"
          } ${
            scrolled
              ? "drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"
              : "drop-shadow-[0_2px_12px_rgba(245,179,56,0.35)]"
          }`}
          priority
        />
        {/* Light background version (dark text + gold sun) */}
        <Image
          src="/logo-light.png"
          alt="Solar Legacy Logo"
          width={340}
          height={86}
          className={`${heightClass} w-auto object-contain transition-all duration-500 filter group-hover:brightness-95 ${
            isLight ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"
          } drop-shadow-[0_2px_8px_rgba(0,0,0,0.1)]`}
          priority
        />
      </div>
    </div>
  );

  if (!href) return content;

  return (
    <Link href={href} className="inline-flex items-center focus:outline-none">
      {content}
    </Link>
  );
}
