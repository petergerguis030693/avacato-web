"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { services, site } from "../lib/site";
import { WhatsAppLink } from "./WhatsAppLink";

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
  const pathname = usePathname() || "";

  const isHome = pathname === "/";
  const isServices =
    pathname === "/services/" || pathname.startsWith("/services/");
  const isAbout = pathname === "/about/" || pathname.startsWith("/about/");
  const isContact =
    pathname === "/contact/" || pathname.startsWith("/contact/");

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
            <WhatsAppLink
              className="btn-whatsapp ms-1 inline-flex items-center gap-1.5 px-3 py-2 text-sm"
              aria-label="واتساب"
            >
              واتساب
            </WhatsAppLink>
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
                className={`rounded-card px-4 py-2.5 text-base hover:bg-white/5 ${pathname === s.href ? "text-gold" : "text-white/90"}`}
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
            <WhatsAppLink
              className="btn-whatsapp mt-2 text-center"
              onClick={() => setOpen(false)}
            >
              واتساب
            </WhatsAppLink>
          </nav>
        </div>
      )}
    </>
  );
}
