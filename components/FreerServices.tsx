import Link from "next/link";
import type { Service } from "../lib/site";
import { services, site } from "../lib/site";
import { FeaturedRow } from "./FeaturedRow";

/** Spec v1.4: تأسيس الشركات · التراخيص · القضايا */
export const FEATURED_SLUGS = [
  "companies",
  "licenses",
  "litigation",
] as const;

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
