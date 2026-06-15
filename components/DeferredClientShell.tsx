"use client";

import dynamic from "next/dynamic";

const AmbientCursorGlow = dynamic(
  () => import("@/components/ui/AmbientCursorGlow"),
  { ssr: false }
);
const WhatsAppFloat = dynamic(() => import("@/components/WhatsAppFloat"), {
  ssr: false,
});

export default function DeferredClientShell() {
  return (
    <>
      <AmbientCursorGlow />
      <WhatsAppFloat />
    </>
  );
}
