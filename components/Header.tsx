"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { services, site } from "../lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gold/40 bg-navy/95 backdrop-blur-sm">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center" onClick={() => setOpen(false)}>
          <Image
            src="/brand/logo-primary-gold-black.png"
            alt="مكتب الأفوكاتو"
            width={180}
            height={48}
            className="h-11 w-auto sm:h-12"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="القائمة الرئيسية">
          <Link href="/" className="text-sm text-cream/90 transition hover:text-gold-bright">
            الرئيسية
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setSvcOpen(true)}
            onMouseLeave={() => setSvcOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 text-sm text-cream/90 transition hover:text-gold-bright"
              aria-expanded={svcOpen}
              aria-haspopup="true"
              onClick={() => setSvcOpen((v) => !v)}
            >
              الخدمات
              <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden className="opacity-70">
                <path fill="currentColor" d="M6 8.5 1.5 4h9z" />
              </svg>
            </button>
            {svcOpen && (
              <div className="absolute end-0 top-full z-50 min-w-[240px] rounded-card border border-gold/30 bg-navy py-2 shadow-xl">
                <Link
                  href="/services/"
                  className="block px-4 py-2 text-sm text-gold hover:bg-navy-deep"
                  onClick={() => setSvcOpen(false)}
                >
                  كل الخدمات
                </Link>
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={s.href}
                    className="block px-4 py-2 text-sm text-cream/90 hover:bg-navy-deep hover:text-gold-bright"
                    onClick={() => setSvcOpen(false)}
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/about/" className="text-sm text-cream/90 transition hover:text-gold-bright">
            نبذة
          </Link>
          <Link href="/contact/" className="text-sm text-cream/90 transition hover:text-gold-bright">
            تواصل
          </Link>
          <a href={site.phoneHref} className="btn-gold text-sm px-4" dir="ltr">
            اتصل الآن
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-btn border border-gold/40 text-white md:hidden"
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block h-0.5 w-5 bg-gold transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-gold transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-gold transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 top-[4.25rem] z-40 overflow-y-auto bg-navy md:hidden">
          <nav className="flex flex-col gap-1 p-6" aria-label="قائمة الجوال">
            <Link href="/" className="rounded-card px-4 py-3 text-lg text-white hover:bg-navy-deep" onClick={() => setOpen(false)}>
              الرئيسية
            </Link>
            <p className="px-4 pt-3 text-xs text-gold">الخدمات</p>
            <Link href="/services/" className="rounded-card px-4 py-2 text-base text-cream/90 hover:bg-navy-deep" onClick={() => setOpen(false)}>
              كل الخدمات
            </Link>
            {services.map((s) => (
              <Link
                key={s.slug}
                href={s.href}
                className="rounded-card px-4 py-2 text-base text-cream/80 hover:bg-navy-deep"
                onClick={() => setOpen(false)}
              >
                {s.title}
              </Link>
            ))}
            <Link href="/about/" className="rounded-card px-4 py-3 text-lg text-white hover:bg-navy-deep" onClick={() => setOpen(false)}>
              نبذة
            </Link>
            <Link href="/contact/" className="rounded-card px-4 py-3 text-lg text-white hover:bg-navy-deep" onClick={() => setOpen(false)}>
              تواصل
            </Link>
            <a href={site.phoneHref} className="btn-gold mt-4 text-center" dir="ltr" onClick={() => setOpen(false)}>
              اتصل الآن · <span className="tel-ltr">{site.phoneDisplay}</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
