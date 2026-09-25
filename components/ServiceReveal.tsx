"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";

/**
 * Spec v1.5 scroll-reveal for service-detail zones.
 * Content stays visible by default (no opacity-0 in CSS).
 * JS only hides off-screen nodes, re-binds on route change + MutationObserver,
 * and always reveals leftovers so client nav cannot leave a blank page.
 */
export function ServiceReveal({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    let io: IntersectionObserver | null = null;
    let failsafe = 0;

    const reveal = (el: HTMLElement) => {
      el.classList.add("is-revealed");
      el.classList.remove("js-reveal");
      el.style.removeProperty("opacity");
      el.style.removeProperty("transform");
    };

    const inViewport = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.94 && rect.bottom > 0;
    };

    const collect = () =>
      Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));

    const bind = () => {
      if (io) {
        io.disconnect();
        io = null;
      }
      if (failsafe) {
        window.clearTimeout(failsafe);
        failsafe = 0;
      }

      const nodes = collect();
      if (reduceMq.matches) {
        nodes.forEach(reveal);
        return;
      }

      io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            reveal(entry.target as HTMLElement);
            io?.unobserve(entry.target);
          }
        },
        { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
      );

      nodes.forEach((el) => {
        const delay = Number(el.dataset.revealDelay || 0);
        el.style.setProperty("--reveal-delay", `${delay}ms`);
        if (inViewport(el)) {
          reveal(el);
        } else {
          el.classList.add("js-reveal");
          io?.observe(el);
        }
      });

      failsafe = window.setTimeout(() => {
        collect().forEach(reveal);
      }, 900);
    };

    bind();

    const mo = new MutationObserver(() => {
      const fresh = collect().filter(
        (el) => !el.classList.contains("is-revealed") && !el.classList.contains("js-reveal"),
      );
      if (!fresh.length) return;
      if (reduceMq.matches) {
        fresh.forEach(reveal);
        return;
      }
      fresh.forEach((el) => {
        const delay = Number(el.dataset.revealDelay || 0);
        el.style.setProperty("--reveal-delay", `${delay}ms`);
        if (inViewport(el)) {
          reveal(el);
        } else {
          el.classList.add("js-reveal");
          io?.observe(el);
        }
      });
    });
    mo.observe(root, { childList: true, subtree: true });

    const onReduce = () => bind();
    if (typeof reduceMq.addEventListener === "function") {
      reduceMq.addEventListener("change", onReduce);
    } else {
      reduceMq.addListener(onReduce);
    }

    return () => {
      if (failsafe) window.clearTimeout(failsafe);
      io?.disconnect();
      mo.disconnect();
      if (typeof reduceMq.removeEventListener === "function") {
        reduceMq.removeEventListener("change", onReduce);
      } else {
        reduceMq.removeListener(onReduce);
      }
      collect().forEach(reveal);
    };
  }, [pathname]);

  return <div ref={rootRef}>{children}</div>;
}
