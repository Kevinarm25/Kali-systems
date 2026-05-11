"use client";
import { motion, useReducedMotion } from "framer-motion";

export default function AnimatedGrid() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-kali-black via-transparent to-kali-black" />
      <motion.div
        className="absolute -top-1/3 left-1/2 hidden w-[900px] h-[900px] -translate-x-1/2 rounded-full md:block"
        style={{
          background:
            "radial-gradient(circle, rgba(124,92,255,0.12) 0%, rgba(34,211,238,0.035) 35%, transparent 70%)",
          filter: "blur(28px)",
        }}
        animate={reduceMotion ? { opacity: 0.55 } : { scale: [1, 1.04, 1], opacity: [0.45, 0.65, 0.45] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
