import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { JsonLd } from "../components/JsonLd";
import { site } from "../lib/site";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.host),
  title: {
    default: "مكتب الأفوكاتو | محاماة واستشارات قانونية — باسوس",
    template: "%s | مكتب الأفوكاتو",
  },
  description:
    "تأسيس شركات، تراخيص، قضايا جنائي ومدني وأسرة، شهر عقاري واستشارات قانونية. اتصل: 01123027887",
  openGraph: {
    type: "website",
    locale: "ar_EG",
    siteName: "مكتب الأفوكاتو",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "مكتب الأفوكاتو",
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="font-cairo antialiased">
        <JsonLd />
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/30 bg-navy/95 p-3 md:hidden">
          <a
            href={site.phoneHref}
            className="btn-gold w-full text-center text-sm"
            dir="ltr"
          >
            اتصل الآن · <span className="tel-ltr">{site.phoneDisplay}</span>
          </a>
        </div>
        <div className="h-16 md:hidden" aria-hidden />
      </body>
    </html>
  );
}
