"use client";

import type { Icon, IconProps } from "@phosphor-icons/react";
import { ICON_SIZE, ICON_WEIGHT, type IconSizeKey } from "@/lib/iconStyles";

type KaliIconProps = {
  icon: Icon;
  size?: IconSizeKey;
  className?: string;
  weight?: IconProps["weight"];
};

export default function KaliIcon({
  icon: IconComponent,
  size = "md",
  className = "",
  weight = ICON_WEIGHT,
}: KaliIconProps) {
  return (
    <IconComponent
      size={ICON_SIZE[size]}
      weight={weight}
      className={`shrink-0 transition-colors duration-300 ${className}`}
      aria-hidden
    />
  );
}
