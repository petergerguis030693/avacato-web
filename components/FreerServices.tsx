import Link from "next/link";
import type { Service } from "../lib/site";
import { services, site } from "../lib/site";

/** Spec v1.4: تأسيس الشركات · التراخيص · القضايا */
export const FEATURED_SLUGS = [
  "companies",
  "licenses",
  "litigation",
] as const;

const icons: Record<string, string> = {
  companies:
    "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  licenses:
    "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  litigation:
    "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
};

function featuredList(): Service[] {
  return FEATURED_SLUGS.map(
    (slug) => services.find((s) => s.slug === slug)!,
  ).filter(Boolean);
}

function restList(): Service[] {
  const set = new Set<string>(FEATURED_SLUGS);
  return services.filter((s) => !set.has(s.slug));
}

function DualCta({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex flex-col items-stretch justify-start gap-3 sm:flex-row sm:items-center ${className}`}
    >
      <a href={site.phoneHref} className="btn-gold" dir="ltr">
        اتصل الآن — <span className="tel-ltr">{site.phoneDisplay}</span>
      </a>
      <a
        href={site.whatsappHref}
        className="btn-ghost"
        target="_blank"
        rel="noopener noreferrer"
      >
        واتساب
      </a>
    </div>
  );
}

function FeaturedRow({ service }: { service: Service }) {
  const d = icons[service.slug] || icons.companies;
  return (
    <Link
      href={service.href}
      className="group flex gap-4 border-s-[3px] border-gold/70 bg-cream/5 py-5 pe-2 ps-5 transition-colors hover:bg-cream/10 sm:gap-5 sm:py-6 sm:ps-6"
    >
      <span
        className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center text-gold sm:h-11 sm:w-11"
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
        <span className="block text-lg font-bold text-cream group-hover:underline group-hover:decoration-gold/70 group-hover:underline-offset-4 sm:text-xl">
          {service.title}
        </span>
        <span className="mt-1 block text-sm leading-relaxed text-muted">
          {service.teaser}
        </span>
        <span className="mt-2 inline-block text-sm font-semibold text-gold">
          المزيد ←
        </span>
      </span>
    </Link>
  );
}

function LinkRow({ service }: { service: Service }) {
  return (
    <li className="border-b border-gold/15 last:border-b-0">
      <Link
        href={service.href}
        className="group flex flex-col gap-1 py-4 transition-opacity hover:opacity-90 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
      >
        <span className="font-semibold text-cream group-hover:underline group-hover:decoration-gold/60 group-hover:underline-offset-4">
          {service.title}
        </span>
        <span className="max-w-xl text-sm text-muted sm:text-end">
          {service.teaser}
        </span>
      </Link>
    </li>
  );
}

/** Home: 3 featured + rest link list + dual CTA */
export function HomeServicesFreer() {
  const featured = featuredList();
  const rest = restList();
  return (
    <section className="bg-navy-deep py-12 sm:py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="max-w-xl text-2xl font-bold text-cream sm:text-3xl">
          خدماتنا
        </h2>
        <p className="mt-3 max-w-xl text-muted sm:mt-4">
          من تأسيس الشركة لحد التراخيص والقضايا — كل اللي يخص شغلك القانوني.
        </p>

        <div className="mt-10 flex flex-col gap-6 sm:mt-12 sm:gap-8">
          {featured.map((s) => (
            <FeaturedRow key={s.slug} service={s} />
          ))}
        </div>

        <div className="mt-12 sm:mt-16">
          <p className="mb-2 text-sm font-semibold tracking-wide text-gold">
            خدمات تانية
          </p>
          <ul className="max-w-3xl">
            {rest.map((s) => (
              <LinkRow key={s.slug} service={s} />
            ))}
          </ul>
        </div>

        <DualCta className="mt-12 sm:mt-14" />
      </div>
    </section>
  );
}

/** /services: same 3 featured + full list of all 6 (+ liquidation as link) */
export function ServicesPageFreer() {
  const featured = featuredList();
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20 md:py-24">
      <div className="flex flex-col gap-6 sm:gap-8">
        {featured.map((s) => (
          <FeaturedRow key={s.slug} service={s} />
        ))}
      </div>

      <div className="mt-14 sm:mt-20">
        <p className="mb-3 text-sm font-semibold tracking-wide text-gold">
          كل الخدمات
        </p>
        <ul className="w-full">
          {services.map((s) => (
            <LinkRow key={s.slug} service={s} />
          ))}
          <li className="border-b border-gold/15 last:border-b-0">
            <Link
              href={site.liquidation.href}
              className="group flex flex-col gap-1 py-4 transition-opacity hover:opacity-90 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <span className="font-semibold text-cream group-hover:underline group-hover:decoration-gold/60 group-hover:underline-offset-4">
                {site.liquidation.title}
              </span>
              <span className="max-w-xl text-sm text-muted sm:text-end">
                {site.liquidation.teaser}
              </span>
            </Link>
          </li>
        </ul>
      </div>

      <DualCta className="mt-12 sm:mt-14" />
    </div>
  );
}
