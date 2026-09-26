import type { MouseEventHandler, ReactNode } from "react";
import { site } from "../lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

type Props = {
  className?: string;
  children?: ReactNode;
  href?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  "aria-label"?: string;
};

/** Shared WhatsApp CTA: official glyph + label. Flex + gap is RTL-safe. */
export function WhatsAppLink({
  className = "btn-whatsapp",
  children,
  href = site.whatsappHref,
  onClick,
  "aria-label": ariaLabel,
}: Props) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <WhatsAppIcon />
      <span>{children ?? site.labels.talkWhatsapp}</span>
    </a>
  );
}
