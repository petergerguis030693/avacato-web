import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "../components/PageHeader";
import { HomeServicesFreer } from "../components/FreerServices";
import { painPoints, site } from "../lib/site";

export const metadata: Metadata = {
  title: { absolute: "مكتب الأفوكاتو | محاماة واستشارات قانونية — باسوس" },
  description:
    "تأسيس شركات، تراخيص، قضايا، شهر عقاري — بنخلّص أوراقك ونحفظ حقك. اتصل: 01123027887",
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
          <p className="mb-4 text-sm font-semibold tracking-wide text-gold">
            محاماة واستشارات قانونية — باسوس
          </p>
          <h1 className="max-w-3xl text-3xl font-bold leading-tight text-cream sm:text-5xl">
            أوراقك تتظبط… وحقك محفوظ
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted sm:text-lg">
            من تأسيس الشركة لحد التراخيص والقضايا والشهر العقاري — بنمشّي الإجراءات معاك لحد ما تاخد النتيجة في إيدك.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={site.phoneHref} className="btn-gold" dir="ltr">
              اتصل الآن — <span className="tel-ltr">{site.phoneDisplay}</span>
            </a>
            <Link href="/services/" className="btn-ghost">
              شوف خدماتنا
            </Link>
          </div>
          <p className="mt-4 text-sm text-muted">
            أو{" "}
            <a
              href={site.whatsappHref}
              className="text-gold-bright underline decoration-gold/40 hover:text-gold"
              target="_blank"
              rel="noopener noreferrer"
            >
              واتساب
            </a>
          </p>
      </PageHeader>

      {/* 2. Services — freer layout v1.4 */}
      <HomeServicesFreer />

      {/* 3. Pain */}
      <section className="section-pad bg-cream text-ink">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">عندك سؤال قانوني؟</h2>
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
          <p className="mt-8 text-center text-lg font-bold">
            كلمنا الآن —{" "}
            <a href={site.phoneHref} className="text-navy underline decoration-gold" dir="ltr">
              <span className="tel-ltr">{site.phoneDisplay}</span>
            </a>
          </p>
        </div>
      </section>

      {/* 4. الإعداد */}
      <section className="section-pad bg-navy-deep" aria-labelledby="process-h2">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="mb-2 text-sm font-semibold tracking-wide text-gold">
            {site.process.label}
          </p>
          <h2 id="process-h2" className="text-2xl font-bold text-cream sm:text-3xl">
            {site.process.h2}
          </h2>
          <p className="mt-3 max-w-2xl text-muted">{site.process.intro}</p>
          <ol className="mt-10 grid gap-8 sm:grid-cols-3 sm:gap-6">
            {site.process.steps.map((step) => (
              <li key={step.nr} className="flex gap-4 sm:flex-col sm:gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-navy font-bold text-gold">
                  {step.nr}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-cream">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm text-muted">
            <a href={site.phoneHref} className="text-gold-bright hover:underline" dir="ltr">
              اتصل الآن — <span className="tel-ltr">{site.phoneDisplay}</span>
            </a>
            {" · "}
            <a
              href={site.whatsappHref}
              className="text-gold-bright hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              أو واتساب
            </a>
          </p>
        </div>
      </section>

      {/* 5. Trust Proof-Strip */}
      <section className="section-pad bg-navy" aria-labelledby="trust-label">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p id="trust-label" className="mb-6 text-center text-sm font-semibold tracking-wide text-gold">
            {site.trustLabel}
          </p>
          <div className="grid gap-8 sm:grid-cols-3 sm:gap-10">
            {site.trustProof.map((card, i) => (
              <div
                key={card.title}
                className={`px-1 py-2 sm:px-2 ${i > 0 ? "sm:border-s sm:border-gold/25 sm:ps-8" : ""}`}
              >
                <p className="text-lg font-bold text-gold">{card.title}</p>
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
      <section id="faq" className="section-pad bg-navy-deep scroll-mt-24" aria-labelledby="faq-h2">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="mb-2 text-sm font-semibold tracking-wide text-gold">
            {site.faq.label}
          </p>
          <h2 id="faq-h2" className="text-2xl font-bold text-cream sm:text-3xl">
            {site.faq.h2}
          </h2>
          <div className="mt-8 space-y-3">
            {site.faq.items.map((item) => (
              <details
                key={item.q}
                className="group rounded-card border border-gold/25 bg-navy open:border-gold/50"
              >
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-semibold text-cream marker:content-none [&::-webkit-details-marker]:hidden">
                  <span>{item.q}</span>
                  <span
                    className="shrink-0 text-gold transition group-open:rotate-180"
                    aria-hidden
                  >
                    ▾
                  </span>
                </summary>
                <p className="border-t border-gold/15 px-4 py-3 text-sm leading-relaxed text-muted">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
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
          <h2 className="text-2xl font-bold text-cream sm:text-3xl">
            جاهز تبدأ؟ كلم مكتب الأفوكاتو دلوقتي
          </h2>
          <p className="mt-3 text-muted">
            دقيقة مكالمة أوضح من أسبوع دوران على النت.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={site.phoneHref} className="btn-gold inline-flex" dir="ltr">
              اتصل الآن — <span className="tel-ltr">{site.phoneDisplay}</span>
            </a>
            <a
              href={site.whatsappHref}
              className="btn-ghost inline-flex"
              target="_blank"
              rel="noopener noreferrer"
            >
              واتساب
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
