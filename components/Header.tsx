"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { services, site } from "../lib/site";

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function navClass(active: boolean) {
  return [
    "rounded-btn px-3 py-2 text-sm transition hover:bg-white/5 hover:text-gold",
    active ? "text-gold" : "text-white",
  ].join(" ");
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = (usePathname() || "/").replace(/\/$/, "") || "/";

  const isHome = pathname === "/";
  const isServices = pathname === "/services" || pathname.startsWith("/services/");
  const isAbout = pathname === "/about" || pathname.startsWith("/about/");
  const isContact = pathname === "/contact" || pathname.startsWith("/contact/");

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!svcOpen) return;
    const onDoc = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setSvcOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSvcOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [svcOpen]);

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-50 border-b border-gold/40 bg-navy"
      >
        <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link
            href="/"
            className="flex shrink-0 items-center"
            onClick={() => {
              setOpen(false);
              setSvcOpen(false);
            }}
          >
            <Image
              src="/brand/logo-primary-gold-black.png"
              alt="مكتب الأفوكاتو"
              width={168}
              height={48}
              className="h-10 w-auto"
              priority
            />
          </Link>

          <nav
            className="hidden items-center gap-1 md:flex md:gap-2"
            aria-label="التنقل الرئيسي"
          >
            <Link
              href="/"
              className={navClass(isHome)}
              onClick={() => setSvcOpen(false)}
            >
              الرئيسية
            </Link>

            <button
              type="button"
              className={`inline-flex items-center gap-1 ${navClass(isServices || svcOpen)}`}
              aria-expanded={svcOpen}
              aria-haspopup="true"
              aria-controls="services-mega"
              onClick={() => setSvcOpen((v) => !v)}
            >
              الخدمات
              <span aria-hidden className="text-[10px] opacity-70">
                {svcOpen ? "▴" : "▾"}
              </span>
            </button>

            <Link
              href="/about/"
              className={navClass(isAbout)}
              onClick={() => setSvcOpen(false)}
            >
              نبذة
            </Link>
            <Link
              href="/contact/"
              className={navClass(isContact)}
              onClick={() => setSvcOpen(false)}
            >
              تواصل
            </Link>
            <a
              href={site.phoneHref}
              className="btn-gold ms-2 px-4 py-2 text-sm"
              dir="ltr"
            >
              اتصل الآن
            </a>
            <a
              href={site.whatsappHref}
              className="btn-whatsapp ms-1 inline-flex items-center gap-1.5 px-3 py-2 text-sm"
              aria-label="واتساب"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span>واتساب</span>
            </a>
          </nav>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-btn border border-gold/50 text-gold md:hidden"
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <span className="text-2xl leading-none" aria-hidden>
                ×
              </span>
            ) : (
              <span className="flex flex-col gap-1.5" aria-hidden>
                <span className="block h-0.5 w-5 bg-gold" />
                <span className="block h-0.5 w-5 bg-gold" />
                <span className="block h-0.5 w-5 bg-gold" />
              </span>
            )}
          </button>
        </div>

        {svcOpen ? (
          <div
            id="services-mega"
            className="border-t border-gold/40 bg-navy-deep"
            role="region"
            aria-label="قائمة الخدمات"
          >
            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-2 px-4 py-4 sm:grid-cols-3 sm:px-6 md:grid-cols-4">
              <Link
                href="/services/"
                className="col-span-2 rounded-lg border border-gold/50 bg-navy px-3 py-3 text-sm font-semibold text-gold sm:col-span-3 md:col-span-1"
                onClick={() => setSvcOpen(false)}
              >
                كل الخدمات
              </Link>
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={s.href}
                  className="rounded-lg border border-white/15 bg-navy px-3 py-3 text-sm text-white hover:border-gold hover:text-gold"
                  onClick={() => setSvcOpen(false)}
                >
                  {s.title}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex flex-col bg-navy md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="القائمة"
        >
          <div className="flex h-[4.25rem] shrink-0 items-center justify-between border-b border-gold/40 bg-navy px-4">
            <Link href="/" onClick={() => setOpen(false)}>
              <Image
                src="/brand/logo-primary-gold-black.png"
                alt="مكتب الأفوكاتو"
                width={168}
                height={48}
                className="h-10 w-auto"
              />
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-btn border border-gold/50 text-gold"
              aria-label="إغلاق القائمة"
              onClick={() => setOpen(false)}
            >
              <span className="text-2xl leading-none" aria-hidden>
                ×
              </span>
            </button>
          </div>
          <nav
            className="flex flex-1 flex-col gap-1 overflow-y-auto bg-navy p-4 pb-8"
            aria-label="قائمة الجوال"
          >
            <Link
              href="/"
              className={`rounded-card px-4 py-3 text-lg hover:bg-white/5 ${isHome ? "text-gold" : "text-white"}`}
              onClick={() => setOpen(false)}
            >
              الرئيسية
            </Link>
            <p className="px-4 pb-1 pt-3 text-xs font-semibold text-gold">
              الخدمات
            </p>
            <Link
              href="/services/"
              className="rounded-card px-4 py-2.5 text-base text-gold hover:bg-white/5"
              onClick={() => setOpen(false)}
            >
              كل الخدمات
            </Link>
            {services.map((s) => (
              <Link
                key={s.slug}
                href={s.href}
                className={`rounded-card px-4 py-2.5 text-base hover:bg-white/5 ${pathname === s.href.replace(/\/$/, "") ? "text-gold" : "text-white/90"}`}
                onClick={() => setOpen(false)}
              >
                {s.title}
              </Link>
            ))}
            <Link
              href="/about/"
              className={`rounded-card px-4 py-3 text-lg hover:bg-white/5 ${isAbout ? "text-gold" : "text-white"}`}
              onClick={() => setOpen(false)}
            >
              نبذة
            </Link>
            <Link
              href="/contact/"
              className={`rounded-card px-4 py-3 text-lg hover:bg-white/5 ${isContact ? "text-gold" : "text-white"}`}
              onClick={() => setOpen(false)}
            >
              تواصل
            </Link>
            <a
              href={site.phoneHref}
              className="btn-gold mt-4 text-center"
              dir="ltr"
              onClick={() => setOpen(false)}
            >
              اتصل الآن · {site.phoneDisplay}
            </a>
            <a
              href={site.whatsappHref}
              className="btn-whatsapp mt-2 text-center"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              واتساب
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
