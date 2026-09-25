import type { Metadata } from "next";
import { ServiceDetail } from "../../../components/ServiceDetail";
import { getService } from "../../../lib/site";

const service = getService("litigation")!;

export const metadata: Metadata = {
  title: service.metaTitle.replace(" | مكتب الأفوكاتو", ""),
  description: service.metaDescription,
  alternates: { canonical: service.href },
};

export default function ServiceDetailPage() {
  return <ServiceDetail service={service} />;
}
