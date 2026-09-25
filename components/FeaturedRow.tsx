import Link from "next/link";
import type { Service } from "../lib/site";

const icons: Record<string, string> = {
  companies:
    "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  licenses:
    "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  litigation:
    "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
  "import-export":
    "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
  gov: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  "real-estate":
    "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
};

/** Spec v1.4 featured row — reused on service-detail related band (v1.5). */
export function FeaturedRow({ service }: { service: Service }) {
  const d = icons[service.slug] || icons.companies;
  return (
    <Link
      href={service.href}
      className="group flex gap-4 border-s-[3px] border-gold/70 bg-white py-5 pe-2 ps-5 transition-colors hover:bg-surface-alt sm:gap-5 sm:py-6 sm:ps-6"
    >
      <span
        className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center text-gold-ink sm:h-11 sm:w-11"
        aria-hidden
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={d} />
        </svg>
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-lg font-bold text-ink group-hover:underline group-hover:decoration-gold/70 group-hover:underline-offset-4 sm:text-xl">
          {service.title}
        </span>
        <span className="mt-1 block text-sm leading-relaxed text-muted">
          {service.teaser}
        </span>
        <span className="mt-2 inline-block text-sm font-semibold text-gold-ink">
          المزيد ←
        </span>
      </span>
    </Link>
  );
}
