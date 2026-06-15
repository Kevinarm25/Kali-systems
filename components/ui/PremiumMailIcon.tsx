"use client";

import { useId } from "react";

type PremiumMailIconProps = {
  className?: string;
};

/** Sobre minimalista con gradiente KALI — consistente con íconos de marca del footer */
export default function PremiumMailIcon({ className = "" }: PremiumMailIconProps) {
  const gradientId = useId();

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="5"
          y1="5"
          x2="19"
          y2="19"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#ddd6fe" />
          <stop offset="45%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <path
        d="M5.5 6.75A2.25 2.25 0 0 1 7.75 4.5h8.5a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 16.25 19.5h-8.5a2.25 2.25 0 0 1-2.25-2.25V6.75Z"
        stroke={`url(#${gradientId})`}
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M6.15 7.65 12 11.85l5.85-4.2"
        stroke={`url(#${gradientId})`}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.15 16.35 9.9 13.2M17.85 16.35 14.1 13.2"
        stroke={`url(#${gradientId})`}
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
    </svg>
  );
}
