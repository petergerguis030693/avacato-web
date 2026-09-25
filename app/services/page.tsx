import type { Metadata } from "next";
import Link from "next/link";
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
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold text-cream sm:text-4xl">
        خدمات تخلّص شغلك… مش بس كلام
      </h1>
      <p className="mt-4 max-w-2xl text-muted">
        كل خدمة تحت ليها نتيجة واضحة: أوراق جاهزة، رخصة شغّالة، أو مسار قانوني تعرفه من أول اجتماع.
      </p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <ServiceCard key={s.slug} service={s} />
        ))}
      </div>
      <div className="card mt-8 p-6">
        <h2 className="text-xl font-bold text-gold">تصفية وبيع الشركات</h2>
        <p className="mt-2 text-sm text-muted">
          تصفية · نقل ملكية · بيع شركات وإنهاء الإجراءات — تخرج من الشركة بأوراق سليمة
        </p>
        <Link href="/services/companies/" className="mt-3 inline-block text-sm text-gold-bright hover:underline">
          تفاصيل تأسيس الشركات ←
        </Link>
      </div>
      <div className="mt-12 text-center">
        <a href={site.phoneHref} className="btn-gold" dir="ltr">
          اتصل الآن — <span className="tel-ltr">{site.phoneDisplay}</span>
        </a>
      </div>
    </div>
  );
}
