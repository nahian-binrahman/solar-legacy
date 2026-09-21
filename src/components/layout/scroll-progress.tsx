"use client";

import * as React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-solar-500 via-solar-300 to-solar-400 z-[100] origin-left shadow-[0_0_10px_rgba(245,179,56,0.9)] pointer-events-none"
      style={{ scaleX }}
    />
  );
}
