import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ServiceCard } from "../components/ServiceCard";
import { painPoints, services, site } from "../lib/site";

export const metadata: Metadata = {
  title: { absolute: "مكتب الأفوكاتو | محاماة واستشارات قانونية — باسوس" },
  description:
    "تأسيس شركات، تراخيص، قضايا، شهر عقاري — بنخلّص أوراقك ونحفظ حقك. اتصل: 01123027887",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-scales.jpg"
            alt=""
            fill
            className="object-cover opacity-25"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/90 to-navy-deep" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
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
        </div>
      </section>

      <section className="section-pad bg-navy-deep">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-cream sm:text-3xl">خدماتنا</h2>
          <p className="mt-2 max-w-2xl text-muted">
            من تأسيس الشركة لحد التراخيص والقضايا — كل اللي يخص شغلك القانوني.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

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

      <section className="section-pad bg-navy">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-3">
            {site.trustPills.map((v) => (
              <div
                key={v.title}
                className="rounded-card border border-gold/40 bg-navy-deep px-6 py-8 text-center"
              >
                <p className="text-2xl font-bold text-gold">{v.title}</p>
                <p className="mt-2 text-sm text-muted">{v.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
          <a href={site.phoneHref} className="btn-gold mt-8 inline-flex" dir="ltr">
            اتصل الآن — <span className="tel-ltr">{site.phoneDisplay}</span>
          </a>
        </div>
      </section>
    </>
  );
}
