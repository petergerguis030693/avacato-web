import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "../../components/PageHeader";
import { ServiceCard } from "../../components/ServiceCard";
import { services, site } from "../../lib/site";

export const metadata: Metadata = {
  title: "خدماتنا القانونية",
  description:
    "شركات، تراخيص، استيراد وتصدير، إجراءات حكومية، قضايا، شهر عقاري — نتيجة ملموسة لكل خدمة. 01123027887",
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader image="services">
        <h1 className="text-3xl font-bold text-cream sm:text-4xl">
          خدمات تخلّص شغلك… مش بس كلام
        </h1>
        <p className="mt-4 max-w-2xl text-muted">
          كل خدمة تحت ليها نتيجة واضحة: أوراق جاهزة، رخصة شغّالة، أو مسار قانوني تعرفه من أول اجتماع.
        </p>
      </PageHeader>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
          <Link
            href={site.liquidation.href}
            className="card group block p-6"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-card border border-gold/40 text-gold">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-cream group-hover:text-gold-bright">
              {site.liquidation.title}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm text-muted">
              {site.liquidation.teaser}
            </p>
            <span className="mt-4 inline-block text-sm text-gold">المزيد ←</span>
          </Link>
        </div>
        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
      </div>
    </>
  );
}
