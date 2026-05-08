"use client";
import { motion } from "framer-motion";

export default function AnimatedGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-kali-black via-transparent to-kali-black" />
      <motion.div
        className="absolute -top-1/3 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(124,92,255,0.18) 0%, rgba(34,211,238,0.05) 35%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
