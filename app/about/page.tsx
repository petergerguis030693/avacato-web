import type { Metadata } from "next";
import Image from "next/image";
import { site } from "../../lib/site";

export const metadata: Metadata = {
  title: "نبذة عن المكتب",
  description:
    "مكتب الأفوكاتو للمحاماة والاستشارات القانونية — باسوس. سرعة، دقة، نتيجة واضحة.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  const values = ["سرعة", "دقة", "احترافية", "شفافية"];
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <h1 className="text-3xl font-bold text-cream sm:text-4xl">
            نبذة عن أعمال مكتبنا
          </h1>
          <p className="mt-4 text-lg text-muted">
            مكتب الأفوكاتو للمحاماة والاستشارات القانونية — نخدم أفراد وشركات بنتيجة ملموسة: أوراق تتظبط وحق يتحفظ.
          </p>
          <div className="mt-6 space-y-4 text-cream/90">
            <p>
              بنغطي تأسيس الشركات والتراخيص والاستيراد والتصدير والإجراءات الحكومية، وكمان القضايا المدنية والجنائية والأسرية وقضايا مجلس الدولة.
            </p>
            <p>
              كمان بنساعد في الشهر العقاري وتقنين أراضي الدولة، وصياغة العقود، والتمثيل القانوني للشركات.
            </p>
            <p>
              هدفنا بسيط: تحفظ حقك، تخلّص أوراقك أسرع، وتاخد استشارة واضحة من غير لف.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {values.map((v) => (
              <span
                key={v}
                className="rounded-btn border border-gold/40 px-4 py-2 text-sm font-semibold text-gold"
              >
                {v}
              </span>
            ))}
          </div>
          <a href={site.phoneHref} className="btn-gold mt-8 inline-flex" dir="ltr">
            تواصل معنا — <span className="tel-ltr">{site.phoneDisplay}</span>
          </a>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-gold/30">
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
  );
}
