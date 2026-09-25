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
          خدمات بنتيجة واضحة… لا وعود عامة
        </h1>
        <p className="mt-4 max-w-2xl text-muted">
          لكل خدمة نتيجة محددة: أوراق جاهزة، رخصة سارية، أو مسار قانوني تعرفونه من أول اجتماع.
        </p>
      </PageHeader>

      <ServicesPageFreer />
    </>
  );
}
