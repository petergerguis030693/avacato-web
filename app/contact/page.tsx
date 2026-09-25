import type { Metadata } from "next";
import { ContactForm } from "../../components/ContactForm";
import { PageHeader } from "../../components/PageHeader";
import { site } from "../../lib/site";

export const metadata: Metadata = {
  title: { absolute: site.contact.metaTitle },
  description: site.contact.metaDescription,
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader image="contact">
        <h1 className="text-3xl font-bold text-cream sm:text-4xl">
          {site.contact.h1}
        </h1>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:max-w-xl">
          <a
            href={site.phoneHref}
            className="btn-gold min-h-12 flex-1 text-center text-base"
            dir="ltr"
          >
            {site.contact.telButton}
          </a>
          <a
            href={site.whatsappHref}
            className="btn-ghost min-h-12 flex-1 text-center text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            {site.contact.whatsappButton}
          </a>
        </div>
      </PageHeader>

      <div className="mx-auto max-w-6xl px-4 py-12 pb-16 sm:px-6 sm:py-16">
        <div className="space-y-2 text-cream/90">
          {site.addressLines.map((l) => (
            <p key={l}>{l}</p>
          ))}
        </div>

        <p className="mt-4">
          <a
            href={site.mapHref}
            className="text-gold-bright underline decoration-gold/50 hover:text-gold"
            target="_blank"
            rel="noopener noreferrer"
          >
            {site.mapLabel}
          </a>
        </p>

        <div className="mt-12 max-w-2xl">
          <ContactForm />
        </div>
      </div>
    </>
  );
}
