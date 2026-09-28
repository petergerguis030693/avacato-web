import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "../../components/PageHeader";
import { site } from "../../lib/site";

export const metadata: Metadata = {
  title: "نبذة عن المكتب",
  description:
    "مكتب الأفوكاتو — باسوس. استشارات وتمثيل وتأسيس شركات. 01123027887",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  const values = [
    "من خلال تقديم الخدمات القانونية ومتابعة الإجراءات المتعلقة بكل حالة",
    "استشارات قانونية وتمثيل قضائي وخدمات تأسيس الشركات",
    "نعمل على تقديم الخدمات القانونية للأفراد والشركات",
    "دراسة قانونية ومتابعة الإجراءات والتواصل مع العملاء",
  ];
  return (
    <>
      <PageHeader image="about">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">من نحن</h1>
        <p className="mt-4 max-w-2xl text-lg text-on-dark-muted">
          مكتب الأفوكاتو للمحاماة والاستشارات القانونية — نخدم أفرادًا وشركات من خلال تقديم الخدمات القانونية ومتابعة الإجراءات المتعلقة بكل حالة: استشارات قانونية وتمثيل قضائي وخدمات تأسيس الشركات.
        </p>
        <a href={site.phoneHref} className="btn-gold mt-8 inline-flex" dir="ltr">
          تواصلوا معنا — <span className="tel-ltr">{site.phoneDisplay}</span>
        </a>
      </PageHeader>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">من نحن</h2>
            <div className="mt-4 space-y-4 text-ink">
              <p>
                مكتب الأفوكاتو للمحاماة والاستشارات القانونية، مقره باسوس بمحافظة القليوبية، ويقدم مجموعة من الخدمات القانونية للأفراد والشركات في مصر.
              </p>
              <p>
                تشمل خدمات المكتب الاستشارات القانونية، والتمثيل أمام المحاكم، وتأسيس الشركات، واستخراج التراخيص، ومتابعة الإجراءات الحكومية، والتسجيل العقاري وتقنين الأراضي.
              </p>
              <p>
                نعتمد في تقديم خدماتنا على دراسة كل حالة وفقًا لظروفها ومستنداتها، وتوضيح الإجراءات القانونية المتاحة للعملاء، ومتابعة الملفات وفقًا لنطاق العمل المتفق عليه.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {values.map((v) => (
                <span
                  key={v}
                  className="rounded-btn border border-gold/40 px-4 py-2 text-sm font-semibold text-gold-ink"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-navy/10">
            <Image
              src="/images/law-books.jpg"
              alt="كتب قانونية"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-navy/40" />
            <div className="absolute bottom-4 start-4 end-4 flex items-center gap-3 rounded-card bg-navy/90 p-3">
              <Image
                src="/brand/logo-wall-shield.jpg"
                alt=""
                width={48}
                height={48}
                className="h-12 w-12 rounded-card object-cover"
              />
              <p className="text-sm font-bold text-gold">{site.name}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
