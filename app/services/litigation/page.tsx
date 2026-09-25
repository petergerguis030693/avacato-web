import type { Metadata } from "next";
import Link from "next/link";
import { getService, services, site } from "../../../lib/site";

const service = getService("litigation")!;

export const metadata: Metadata = {
  title: service.metaTitle.replace(" | مكتب الأفوكاتو", ""),
  description: service.metaDescription,
  alternates: { canonical: service.href },
};

export default function ServiceDetailPage() {
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="mb-3 text-sm text-gold">
        <Link href="/services/" className="hover:text-gold-bright">الخدمات</Link>
        <span className="mx-2 text-muted">/</span>
        <span>{service.title}</span>
      </p>
      <h1 className="text-3xl font-bold text-cream sm:text-4xl">{service.h1}</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">{service.lead}</p>
      <ul className="mt-8 max-w-2xl space-y-3">
        {service.bullets.map((b) => (
          <li key={b} className="flex gap-3 text-cream/90">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-10">
        <a href={site.phoneHref} className="btn-gold" dir="ltr">
          اتصل الآن — <span className="tel-ltr">{site.phoneDisplay}</span>
        </a>
      </div>
      <section className="mt-16">
        <h2 className="text-xl font-bold text-gold">خدمات ذات صلة</h2>
        <ul className="mt-4 flex flex-wrap gap-3">
          {related.map((s) => (
            <li key={s.slug}>
              <Link href={s.href} className="rounded-btn border border-gold/30 px-4 py-2 text-sm text-cream hover:border-gold hover:text-gold-bright">
                {s.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
