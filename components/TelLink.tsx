import { site } from "../lib/site";

type Props = {
  className?: string;
  children?: React.ReactNode;
  showNumber?: boolean;
};

export function TelLink({ className = "btn-gold", children, showNumber }: Props) {
  return (
    <a href={site.phoneHref} className={className} dir="ltr">
      {children ?? (showNumber ? (
        <span className="tel-ltr">{site.phoneDisplay}</span>
      ) : (
        "اتصل الآن"
      ))}
    </a>
  );
}
