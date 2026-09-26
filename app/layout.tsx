import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { JsonLd } from "../components/JsonLd";
import { MobileTelBar } from "../components/MobileTelBar";
import { site } from "../lib/site";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.host),
  title: {
    default: site.home.metaTitle,
    template: "%s | مكتب الأفوكاتو",
  },
  description: site.home.metaDescription,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
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
        <main className="min-h-[70vh] pb-24 md:pb-0">{children}</main>
        <Footer />
        <MobileTelBar />
      </body>
    </html>
  );
}
