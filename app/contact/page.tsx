import type { Metadata } from "next";
import { ContactForm } from "../../components/ContactForm";
import { site } from "../../lib/site";

export const metadata: Metadata = {
  title: { absolute: "تواصل معنا | مكتب الأفوكاتو — 01123027887" },
  description:
    "اتصل بمكتب الأفوكاتو: 01123027887 — باسوس، طريق القناطر الخيرية، فوق مطعم البرنس.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold text-cream sm:text-4xl">للتواصل</h1>
      <p className="mt-4 text-muted">كلمنا مباشرة أو اترك رسالة — نرد في أقرب وقت.</p>

      <div className="mt-12 grid gap-10 lg:grid-cols-5">
        <aside className="lg:col-span-2">
          <div className="card space-y-6 p-6">
            <div>
              <p className="mb-2 text-sm font-semibold text-gold">الهاتف</p>
              <a
                href={site.phoneHref}
                className="text-2xl font-bold text-gold-bright hover:text-gold"
                dir="ltr"
              >
                <span className="tel-ltr">{site.phoneDisplay}</span>
              </a>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold text-gold">العنوان</p>
              <ul className="space-y-1 text-sm text-cream/90">
                {site.addressLines.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
