import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { PageHeader } from "../components/PageHeader";
import { HomeServicesFreer } from "../components/FreerServices";
import { painPoints, site } from "../lib/site";

const COPY_LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

/** Home-only: render copy-file markdown links inside existing text slots. */
function CopyLinks({
  text,
  className,
}: {
  text: string;
  className: string;
}) {
  const nodes: ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  const re = new RegExp(COPY_LINK_RE.source, "g");
  while ((match = re.exec(text)) !== null) {
    if (match.index > last) {
      nodes.push(text.slice(last, match.index));
    }
    nodes.push(
      <Link key={`${match[2]}-${match.index}`} href={match[2]} className={className}>
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

export const metadata: Metadata = {
  title: { absolute: site.home.metaTitle },
  description: site.home.metaDescription,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — Page Headers v1.3 */}
      <link
        rel="preload"
        as="image"
        href="/headers/header-home.webp"
        type="image/webp"
      />
      <PageHeader image="home" priority>
        {/* UI Spec v1.5.1: desktop-only visual-left; RTL text-align unchanged */}
        <div className="home-hero-copy">
          <p className="mb-4 text-sm font-semibold tracking-wide text-gold">
            محاماة واستشارات قانونية — باسوس
          </p>
          <h1 className="max-w-3xl text-3xl font-bold leading-tight text-white sm:text-5xl">
            {site.home.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-base text-on-dark-muted sm:text-lg">
            <CopyLinks
              text={site.home.lead}
              className="text-gold-bright underline decoration-gold/40 hover:brightness-110"
            />
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={site.phoneHref} className="btn-gold" dir="ltr">
              اتصل الآن — <span className="tel-ltr">{site.phoneDisplay}</span>
            </a>
            <a
              href={site.whatsappHref}
              className="btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              تواصل عبر واتساب
            </a>
            <Link href="/services/" className="btn-ghost">
              اطّلعوا على خدماتنا
            </Link>
          </div>
        </div>
      </PageHeader>

      {/* 2. Services — freer layout v1.4 */}
      <HomeServicesFreer />

      {/* 3. Pain */}
      <section className="section-pad bg-surface-alt text-ink">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">هل لديكم سؤال قانوني؟</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {painPoints.map((q) => (
              <li
                key={q}
                className="rounded-card border border-navy/10 bg-white p-5 text-sm leading-relaxed shadow-sm"
              >
                {q}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-lg font-bold text-navy">
            اتصلوا الآن —{" "}
            <a href={site.phoneHref} className="text-navy underline decoration-gold" dir="ltr">
              <span className="tel-ltr">{site.phoneDisplay}</span>
            </a>
          </p>
        </div>
      </section>

      {/* 4. خطوات العمل */}
      <section className="section-pad bg-navy" aria-labelledby="process-h2">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="mb-2 text-sm font-semibold tracking-wide text-gold">
            {site.process.label}
          </p>
          <h2 id="process-h2" className="text-2xl font-bold text-white sm:text-3xl">
            {site.process.h2}
          </h2>
          <p className="mt-3 max-w-2xl text-on-dark-muted">{site.process.intro}</p>
          <ol className="mt-10 grid gap-8 sm:grid-cols-3 sm:gap-6">
            {site.process.steps.map((step) => (
              <li key={step.nr} className="flex gap-4 sm:flex-col sm:gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-navy-deep font-bold text-gold">
                  {step.nr}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-on-dark-muted">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm text-on-dark-muted">
            <a href={site.phoneHref} className="text-gold-bright hover:underline" dir="ltr">
              اتصل الآن — <span className="tel-ltr">{site.phoneDisplay}</span>
            </a>
            {" · "}
            <a
              href={site.whatsappHref}
              className="text-whatsapp hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              أو تواصل عبر واتساب
            </a>
          </p>
        </div>
      </section>

      {/* 5. Trust Proof-Strip */}
      <section className="section-pad bg-cream" aria-labelledby="trust-label">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p id="trust-label" className="mb-6 text-center text-sm font-semibold tracking-wide text-navy">
            {site.trustLabel}
          </p>
          <div className="grid gap-8 sm:grid-cols-3 sm:gap-10">
            {site.trustProof.map((card, i) => (
              <div
                key={card.title}
                className={`px-1 py-2 sm:px-2 ${i > 0 ? "sm:border-s sm:border-gold/25 sm:ps-8" : ""}`}
              >
                <p className="text-lg font-bold text-navy">{card.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{card.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs tracking-wide text-muted">
            {site.trustMeta.join(" · ")}
          </p>
        </div>
      </section>

      {/* 6. FAQ */}
      <section id="faq" className="section-pad bg-surface-alt scroll-mt-24" aria-labelledby="faq-h2">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="mb-2 text-sm font-semibold tracking-wide text-navy">
            {site.faq.label}
          </p>
          <h2 id="faq-h2" className="text-2xl font-bold text-navy sm:text-3xl">
            {site.faq.h2}
          </h2>
          <div className="mt-8 space-y-3">
            {site.faq.items.map((item) => (
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
                  <CopyLinks
                    text={item.a}
                    className="font-semibold text-navy underline decoration-gold/50 underline-offset-4 hover:text-gold-ink"
                  />
                </p>
              </details>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted">
            {site.home.disclaimer}
          </p>
        </div>
      </section>

      {/* 7. CTA band Tel + WhatsApp */}
      <section className="relative overflow-hidden section-pad">
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
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {site.home.ctaHeadline}
          </h2>
          <p className="mt-3 text-on-dark-muted">
            {site.home.ctaSub}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={site.phoneHref} className="btn-gold inline-flex" dir="ltr">
              اتصل الآن — <span className="tel-ltr">{site.phoneDisplay}</span>
            </a>
            <a
              href={site.whatsappHref}
              className="btn-whatsapp inline-flex"
              target="_blank"
              rel="noopener noreferrer"
            >
              تواصل عبر واتساب
            </a>
          </div>
          <p className="mt-5 text-sm text-on-dark-muted">
            {site.home.disclaimer}
          </p>
        </div>
      </section>
    </>
  );
}
