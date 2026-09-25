import type { Metadata } from "next";
import { PageHeader } from "../../components/PageHeader";
import { site } from "../../lib/site";

export const metadata: Metadata = {
  title: "بيانات قانونية",
  description: "بيانات التواصل وإخلاء المسؤولية — مكتب الأفوكاتو.",
  alternates: { canonical: "/legal/" },
};

export default function LegalPage() {
  return (
    <>
      <PageHeader image="legal" compact>
        <h1 className="text-2xl font-bold text-white sm:text-3xl">
          بيانات قانونية
        </h1>
      </PageHeader>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <section className="space-y-3 text-ink">
          <h2 className="text-xl font-bold text-navy">بيانات التواصل</h2>
          <p>
            <span className="text-muted">الاسم التجاري: </span>
            مكتب الأفوكاتو للمحاماة والاستشارات القانونية
          </p>
          <p>
            <span className="text-muted">الهاتف: </span>
            <a href={site.phoneHref} className="text-gold-ink" dir="ltr">
              <span className="tel-ltr">{site.phoneDisplay}</span>
            </a>
          </p>
          <p>
            <span className="text-muted">العنوان: </span>
            {site.addressShort}
          </p>
        </section>

        <section className="mt-10 space-y-3 text-ink">
          <h2 className="text-xl font-bold text-navy">إخلاء مسؤولية</h2>
          <p className="leading-relaxed">
            المحتوى على هذا الموقع لأغراض تعريفية عامة ولا يُعد استشارة قانونية ملزمة.
            للحصول على استشارة خاصة بحالتكم، يرجى التواصل مباشرة مع المكتب.
            لا نذكر بيانات سجل وهمية — عند توفر رقم سجل/بطاقة ضريبية رسمية تُضاف لاحقًا.
          </p>
        </section>
      </div>
    </>
  );
}
