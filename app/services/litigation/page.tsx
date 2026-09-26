import type { Metadata } from "next";
import { ServiceDetail } from "../../../components/ServiceDetail";
import { getService } from "../../../lib/site";

const service = getService("litigation")!;

export const metadata: Metadata = {
  title: { absolute: service.metaTitle },
  description: service.metaDescription,
  alternates: { canonical: service.href },
};

export default function ServiceDetailPage() {
  return <ServiceDetail service={service} />;
}
