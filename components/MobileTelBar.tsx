"use client";

import { usePathname } from "next/navigation";
import { site } from "../lib/site";

/** Fixed dual CTA bar — hidden on /contact where the form needs the space. */
export function MobileTelBar() {
  const pathname = usePathname() || "";
  if (pathname === "/contact" || pathname.startsWith("/contact/")) {
    return null;
  }

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/30 bg-[#0B1C2C] p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden"
      role="navigation"
      aria-label="تواصل سريع"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-2">
        <a
          href={site.phoneHref}
          className="btn-gold w-full text-center text-sm"
          dir="ltr"
        >
          اتصال
        </a>
        <a
          href={site.whatsappHref}
          className="btn-ghost w-full text-center text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          واتساب
        </a>
      </div>
    </div>
  );
}
