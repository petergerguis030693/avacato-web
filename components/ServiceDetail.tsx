import Link from "next/link";
import { getService, type Service, site } from "../lib/site";

export function ServiceDetail({ service }: { service: Service }) {
  const related = service.related
    .map((slug) => getService(slug))
    .filter((s): s is Service => Boolean(s));
  const isLitigation = service.slug === "litigation";

  return (
    <article>
      {/* Hero */}
      <section className="border-b border-gold/20 bg-navy">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <p className="mb-3 text-sm text-gold">
            <Link href="/services/" className="hover:text-gold-bright">
              الخدمات
            </Link>
            <span className="mx-2 text-muted">/</span>
            <span>{service.title}</span>
          </p>
          <h1 className="text-3xl font-bold text-cream sm:text-4xl">
            {service.h1}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">{service.lead}</p>
          {isLitigation && (
            <p className="mt-4 max-w-2xl text-sm text-muted">
              {site.litigationDisclaimer}
            </p>
          )}
        </div>
      </section>

      {/* المنفعة */}
      <section className="border-b border-gold/20 bg-navy-deep">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="text-2xl font-bold text-gold sm:text-3xl">المنفعة</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-cream/90">
            {service.benefit}
          </p>
        </div>
      </section>

      {/* إيه بنخلّص */}
      <section
        className="border-b border-gold/20 bg-navy"
        id={service.slug === "companies" ? "liquidation" : undefined}
      >
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="text-2xl font-bold text-gold sm:text-3xl">
            إيه بنخلّص
          </h2>
          <ul className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-1">
            {service.bullets.map((b) => (
              <li key={b} className="flex gap-3 text-cream/90">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                  aria-hidden
                />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* الإجراء — 3 خطوات */}
      <section className="border-b border-gold/20 bg-navy-deep">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="text-2xl font-bold text-gold sm:text-3xl">الإجراء</h2>
          <ol className="relative mt-10 grid gap-8 sm:grid-cols-3 sm:gap-6">
            <span
              aria-hidden
              className="absolute bottom-0 end-4 top-0 w-px bg-gold/25 sm:hidden"
            />
            {service.steps.map((step, i) => {
              const nr = String(i + 1).padStart(2, "0");
              return (
                <li
                  key={step.title}
                  className="relative flex gap-4 sm:flex-col sm:gap-3"
                >
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-navy font-bold text-gold">
                    {nr}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-cream">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {step.body}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* لمين */}
      <section className="border-b border-gold/20 bg-cream text-ink">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">لمين</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink/80">
            {service.audience}
          </p>
        </div>
      </section>

      {/* CTA Tel + WhatsApp */}
      <section className="border-b border-gold/20 bg-navy">
        <div className="mx-auto max-w-6xl px-4 py-12 text-center sm:px-6 sm:py-14">
          {isLitigation && (
            <p className="mx-auto mb-6 max-w-xl text-sm text-muted">
              {site.litigationDisclaimer}
            </p>
          )}
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={site.phoneHref} className="btn-gold inline-flex" dir="ltr">
              اتصل الآن — <span className="tel-ltr">{site.phoneDisplay}</span>
            </a>
            <a
              href={site.whatsappHref}
              className="btn-ghost inline-flex"
              target="_blank"
              rel="noopener noreferrer"
            >
              {site.labels.talkWhatsapp}
            </a>
          </div>
        </div>
      </section>

      {/* خدمات مرتبطة */}
      <section className="bg-navy-deep">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="text-2xl font-bold text-gold sm:text-3xl">
            خدمات مرتبطة
          </h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {related.map((s) => (
              <li key={s.slug}>
                <Link
                  href={s.href}
                  className="rounded-btn border border-gold/30 px-4 py-2 text-sm text-cream hover:border-gold hover:text-gold-bright"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
