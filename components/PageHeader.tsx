import Image from "next/image";
import type { ReactNode } from "react";

export type PageHeaderImageKey =
  | "home"
  | "services"
  | "companies"
  | "licenses"
  | "import-export"
  | "gov"
  | "litigation"
  | "real-estate"
  | "about"
  | "contact"
  | "legal";

type PageHeaderProps = {
  image: PageHeaderImageKey;
  children: ReactNode;
  /** Legal: shorter height, weaker overlay, no CTA */
  compact?: boolean;
  /** Preload LCP — Home only */
  priority?: boolean;
  className?: string;
};

/**
 * Full-bleed justice-themed page header (UI Spec v1.3).
 * Navy solid fallback; H1/Lead/CTAs as children above the image.
 */
export function PageHeader({
  image,
  children,
  compact = false,
  priority = false,
  className = "",
}: PageHeaderProps) {
  const src = `/headers/header-${image}.webp`;

  const heightCls = compact
    ? "min-h-[clamp(140px,22vh,220px)] md:min-h-[clamp(160px,24vh,240px)]"
    : "min-h-[clamp(200px,32vh,360px)] md:min-h-[clamp(280px,38vh,480px)]";

  const overlayCls = compact ? "bg-navy/40" : "bg-navy/60";

  return (
    <section
      className={`relative flex items-center overflow-hidden bg-navy ${heightCls} ${className}`}
    >
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={src}
          alt=""
          fill
          className="object-cover object-center"
          priority={priority}
          sizes="100vw"
        />
        <div className={`absolute inset-0 ${overlayCls}`} />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/25 via-transparent to-navy/55" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className={compact ? "py-6 sm:py-7" : "py-10 sm:py-12"}>{children}</div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-px bg-gold/40"
        aria-hidden
      />
    </section>
  );
}
