type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeader({
  label,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <div
      className={`${centered ? "text-center mx-auto" : ""} max-w-2xl mb-12 md:mb-14 ${className}`}
    >
      <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-kali-accent/80 mb-3 sm:mb-4">
        {label}
      </p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.08] text-gradient">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 sm:mt-5 text-white/50 text-base sm:text-lg leading-relaxed ${
            centered ? "max-w-xl mx-auto" : "max-w-xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
