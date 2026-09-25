"use client";

import { usePathname } from "next/navigation";
import { site } from "../lib/site";

/** Fixed call bar — hidden on /contact where the form/textarea needs the space. */
export function MobileTelBar() {
  const pathname = usePathname() || "";
  if (pathname === "/contact" || pathname.startsWith("/contact/")) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/30 bg-[#0B1C2C] p-3 md:hidden">
        <a
          href={site.phoneHref}
          className="btn-gold w-full text-center text-sm"
          dir="ltr"
        >
          اتصل الآن · <span className="tel-ltr">{site.phoneDisplay}</span>
        </a>
      </div>
      <div className="h-20 md:hidden" aria-hidden />
    </>
  );
}
