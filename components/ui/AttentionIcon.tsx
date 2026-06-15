"use client";

import { At, CalendarCheck, Headset } from "@phosphor-icons/react";
import { FaWhatsapp } from "react-icons/fa";
import { ICON_SIZE, attentionShellClass } from "@/lib/iconStyles";
import KaliIcon from "@/components/ui/KaliIcon";

export type AttentionIconType = "whatsapp" | "email" | "calendar" | "support";

type AttentionIconProps = {
  type: AttentionIconType;
  className?: string;
};

const BRAND_STYLE = {
  width: ICON_SIZE.sm,
  height: ICON_SIZE.sm,
};

export default function AttentionIcon({ type, className = "" }: AttentionIconProps) {
  return (
    <span className={`${attentionShellClass} ${className}`} aria-hidden>
      {type === "whatsapp" && (
        <FaWhatsapp
          className="text-emerald-400 transition-transform duration-300 group-hover:scale-105"
          style={BRAND_STYLE}
        />
      )}
      {type === "email" && (
        <KaliIcon
          icon={At}
          size="sm"
          className="text-violet-300 transition-transform duration-300 group-hover:scale-105 group-hover:text-violet-200"
        />
      )}
      {type === "calendar" && (
        <KaliIcon
          icon={CalendarCheck}
          size="sm"
          className="text-kali-cyan/90 transition-transform duration-300 group-hover:scale-105 group-hover:text-kali-cyan"
        />
      )}
      {type === "support" && (
        <KaliIcon
          icon={Headset}
          size="sm"
          className="text-kali-accent/90 transition-transform duration-300 group-hover:scale-105 group-hover:text-kali-accent"
        />
      )}
    </span>
  );
}
