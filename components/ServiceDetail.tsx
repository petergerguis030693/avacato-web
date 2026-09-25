import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { FeaturedRow } from "./FeaturedRow";
import { PageHeader, type PageHeaderImageKey } from "./PageHeader";
import { ServiceReveal } from "./ServiceReveal";
import { getService, type Service, site } from "../lib/site";

const COPY_LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

/** Renders copy-file markdown links with existing gold-ink underline tokens. */
function CopyLinks({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  const re = new RegExp(COPY_LINK_RE.source, "g");
  while ((match = re.exec(text)) !== null) {
    if (match.index > last) {
      nodes.push(text.slice(last, match.index));
    }
    nodes.push(
      <Link
        key={`${match[2]}-${match.index}`}
        href={match[2]}
        className="font-semibold text-gold-ink underline decoration-gold/50 underline-offset-4 hover:text-navy"
      >
        {match[1]}
      </Link>,
    );
    last = match.index + match[0].length;
  }
  if (last < text.length) {
    nodes.push(text.slice(last));
  }
  return <>{nodes}</>;
}

function DualCta({
  className = "",
  stretch = false,
}: {
  className?: string;
  stretch?: boolean;
}) {
  const width = stretch ? "w-full sm:w-auto" : "";
  return (
    <div
      className={`flex flex-col items-stretch justify-start gap-3 sm:flex-row sm:items-center ${className}`}
    >
      <a href={site.phoneHref} className={`btn-gold ${width}`} dir="ltr">
        اتصل الآن — <span className="tel-ltr">{site.phoneDisplay}</span>
      </a>
      <a
        href={site.whatsappHref}
        className={`btn-whatsapp ${width}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {site.labels.talkWhatsapp}
      </a>
    </div>
  );
}

export function ServiceDetail({ service }: { service: Service }) {
  const related = service.related
    .map((slug) => getService(slug))
    .filter((s): s is Service => Boolean(s));
  const isLitigation = service.slug === "litigation";

  return (
    <ServiceReveal>
      <article>
        {/* Hero — Page Headers v1.3 + dual CTA */}
        <PageHeader image={service.slug as PageHeaderImageKey}>
          <p className="mb-3 text-sm text-gold">
            <Link href="/services/" className="hover:text-gold-bright">
              الخدمات
            </Link>
            <span className="mx-2 text-on-dark-muted">/</span>
            <span>{service.title}</span>
          </p>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            {service.h1}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-on-dark-muted sm:text-lg">
            {service.lead}
          </p>
          {isLitigation && (
            <p className="mt-3 max-w-3xl text-sm text-gold-bright/90">
              {site.litigationDisclaimer}
            </p>
          )}
          <DualCta className="mt-7" />
        </PageHeader>

        {/* Desktop 2-col · Mobile: CTA aside then zones */}
        <div className="border-b border-navy/10 bg-cream">
          <div className="detail-wrap grid py-10 lg:grid-cols-[minmax(0,1.62fr)_minmax(0,1fr)] lg:items-start lg:gap-12 lg:py-16 xl:gap-14">
            <div className="order-2 divide-y divide-navy/10 lg:order-1">
              {/* المنفعة */}
              <section className="detail-zone" data-reveal>
                <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                  {site.detail.benefit}
                </h2>
                <ul className="mt-8 grid gap-6">
                  {service.benefits.map((item, i) => (
                    <li
                      key={item.title}
                      data-reveal
                      data-reveal-delay={i * 50}
                    >
                      <h3 className="text-lg font-bold text-ink">
                        {item.title}
                      </h3>
                      <span
                        className="mt-2 block h-px w-12 bg-gold"
                        aria-hidden
                      />
                      <p className="mt-3 text-base leading-relaxed text-ink">
                        {item.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>

              {/* نطاق العمل */}
              <section
                className="detail-zone"
                data-reveal
                id={service.slug === "companies" ? "liquidation" : undefined}
              >
                <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                  {site.detail.deliverables}
                </h2>
                <ul className="mt-8 grid gap-3 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-3">
                  {service.bullets.map((b, i) => (
                    <li
                      key={b}
                      className="flex gap-3 text-ink"
                      data-reveal
                      data-reveal-delay={i * 45}
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                        aria-hidden
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* متى تحتاجون محاميًا — litigation only (Copy v7) */}
              {service.whenYouNeed && (
                <section className="detail-zone" data-reveal>
                  <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                    {service.whenYouNeed.title}
                  </h2>
                  <ul className="mt-8 grid gap-6">
                    {service.whenYouNeed.items.map((item, i) => (
                      <li
                        key={item.title}
                        data-reveal
                        data-reveal-delay={i * 50}
                      >
                        <h3 className="text-lg font-bold text-ink">
                          {item.title}
                        </h3>
                        <span
                          className="mt-2 block h-px w-12 bg-gold"
                          aria-hidden
                        />
                        <p className="mt-3 text-base leading-relaxed text-ink">
                          <CopyLinks text={item.body} />
                        </p>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-8 text-base leading-relaxed text-ink">
                    {service.whenYouNeed.softCta}
                  </p>
                </section>
              )}

              {/* خطوات العمل — exactly 3 steps */}
              <section className="detail-zone" data-reveal>
                <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                  {site.detail.steps}
                </h2>
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
                        data-reveal
                        data-reveal-delay={i * 55}
                      >
                        <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-navy font-bold text-gold">
                          {nr}
                        </span>
                        <div>
                          <h3 className="text-lg font-bold text-ink">
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
              </section>

              {/* لمن هذه الخدمة */}
              <section className="detail-zone" data-reveal>
                <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                  {site.detail.audience}
                </h2>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {service.chips.map((chip) => (
                    <li
                      key={chip}
                      className="rounded-btn border border-navy/15 bg-white px-3 py-1.5 text-sm text-ink"
                    >
                      {chip}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-base leading-relaxed text-ink">
                  {service.audience}
                </p>
              </section>

              {/* أسئلة متكررة */}
              <section className="detail-zone" data-reveal>
                <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                  {site.detail.faq}
                </h2>
                <div className="mt-6 space-y-3">
                  {service.faq.map((item) => (
                    <details
                      key={item.q}
                      className="group rounded-card border border-navy/10 bg-white open:border-gold/40"
                    >
                      <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-semibold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                        <span>{item.q}</span>
                        <span
                          className="shrink-0 text-gold-ink transition group-open:rotate-180"
                          aria-hidden
                        >
                          ▾
                        </span>
                      </summary>
                      <p className="border-t border-navy/10 px-4 py-3 text-sm leading-relaxed text-muted">
                        <CopyLinks text={item.a} />
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            </div>

            {/* Aside CTA — mobile after hero, desktop sticky */}
            <aside
              className="order-1 mb-10 lg:order-2 lg:mb-0 lg:sticky lg:top-[5.5rem] lg:self-start"
              data-reveal
              data-reveal-delay={80}
            >
              <div className="rounded-card border border-gold/40 bg-navy p-6 sm:p-7">
                <p className="text-sm font-semibold tracking-wide text-gold">
                  {site.detail.asideStart}
                </p>
                <DualCta className="mt-5" stretch />
                {isLitigation && (
                  <p className="mt-4 text-sm leading-relaxed text-gold-bright/90">
                    {site.litigationDisclaimer}
                  </p>
                )}
                <h3 className="mt-7 text-base font-bold text-gold">
                  {site.detail.asideWhy}
                </h3>
                <ul className="mt-3 space-y-2">
                  {service.asideWhy.map((why) => (
                    <li key={why} className="flex gap-2 text-sm text-white/90">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                        aria-hidden
                      />
                      <span>{why}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 border-t border-gold/20 pt-5">
                  <p className="mb-3 text-sm font-semibold tracking-wide text-gold">
                    {site.detail.related}
                  </p>
                  <ul className="space-y-2">
                    {related.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={s.href}
                          className="text-sm font-semibold text-white transition-opacity hover:text-gold-bright hover:underline hover:decoration-gold/70 hover:underline-offset-4"
                        >
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* خدمات مرتبطة — Featured-row style v1.4 */}
        <section className="border-b border-navy/10 bg-surface-alt" data-reveal>
          <div className="detail-wrap py-10 lg:py-16">
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              {site.detail.related}
            </h2>
            <div className="mt-8 flex flex-col gap-5 sm:gap-6">
              {related.map((s, i) => (
                <div
                  key={s.slug}
                  data-reveal
                  data-reveal-delay={i * 50}
                >
                  <FeaturedRow service={s} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final dual CTA — full width like Home */}
        <section className="relative overflow-hidden" data-reveal>
          <div className="absolute inset-0">
            <Image
              src="/images/gavel.jpg"
              alt=""
              fill
              className="object-cover opacity-20"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-navy/90" />
          </div>
          <div className="relative mx-auto max-w-3xl px-4 py-12 text-center sm:px-6 lg:py-16">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              {site.detail.finalH2}
            </h2>
            <p className="mt-3 text-on-dark-muted">{site.detail.finalBody}</p>
            {isLitigation && (
              <p className="mt-3 text-sm text-gold-bright/90">
                {site.litigationDisclaimer}
              </p>
            )}
            <DualCta className="mt-8 justify-center sm:justify-center" />
          </div>
        </section>
      </article>
    </ServiceReveal>
  );
}
