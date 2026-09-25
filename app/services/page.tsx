import type { Metadata } from "next";
import { PageHeader } from "../../components/PageHeader";
import { ServicesPageFreer } from "../../components/FreerServices";

export const metadata: Metadata = {
  title: "خدماتنا القانونية",
  description:
    "شركات، تراخيص، استيراد وتصدير، إجراءات حكومية، قضايا، شهر عقاري — نتيجة ملموسة لكل خدمة. 01123027887",
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader image="services">
        <h1 className="text-3xl font-bold text-cream sm:text-4xl">
          خدمات تخلّص شغلك… مش بس كلام
        </h1>
        <p className="mt-4 max-w-2xl text-muted">
          كل خدمة تحت ليها نتيجة واضحة: أوراق جاهزة، رخصة شغّالة، أو مسار قانوني تعرفه من أول اجتماع.
        </p>
      </PageHeader>

      <ServicesPageFreer />
    </>
  );
}
