import Link from "next/link";
import Image from "next/image";
import { site } from "../lib/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-gold/30 bg-navy">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <Image
              src="/brand/logo-wall-shield.jpg"
              alt=""
              width={48}
              height={48}
              className="h-12 w-12 rounded-card object-cover"
            />
            <p className="text-lg font-bold text-gold">{site.name}</p>
          </div>
          <p className="text-sm leading-relaxed text-muted">{site.footerAbout}</p>
        </div>
        <div>
          <p className="mb-3 text-sm font-bold text-gold">روابط</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="text-cream/80 hover:text-gold-bright">الرئيسية</Link></li>
            <li><Link href="/services/" className="text-cream/80 hover:text-gold-bright">الخدمات</Link></li>
            <li><Link href="/about/" className="text-cream/80 hover:text-gold-bright">نبذة</Link></li>
            <li><Link href="/contact/" className="text-cream/80 hover:text-gold-bright">تواصل</Link></li>
            <li><Link href="/legal/" className="text-cream/80 hover:text-gold-bright">بيانات قانونية</Link></li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-bold text-gold">تواصل</p>
          <ul className="space-y-2 text-sm text-cream/80">
            <li>
              <a href={site.phoneHref} className="text-xl font-bold text-gold-bright hover:text-gold" dir="ltr">
                <span className="tel-ltr">{site.phoneDisplay}</span>
              </a>
            </li>
            <li className="leading-relaxed">{site.addressShort}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gold/20">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-muted sm:flex-row sm:justify-between sm:px-6">
          <span>{site.copyright}</span>
          <Link href="/legal/" className="hover:text-gold-bright">بيانات قانونية</Link>
        </div>
      </div>
    </footer>
  );
}
