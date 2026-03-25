import Link from "next/link";
import { BOOK_CALL_HREF } from "@/lib/site";

type Props = {
  className?: string;
  label?: string;
};

const isExternal = BOOK_CALL_HREF.startsWith("http");

export function BookCallButton({
  className = "",
  label = "Book a Call →",
}: Props) {
  return (
    <Link
      href={BOOK_CALL_HREF}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={`font-mono inline-flex items-center justify-center rounded-sm border border-axis-turquoise bg-black px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-axis-turquoise transition-all duration-300 hover:border-axis-turquoise hover:bg-axis-turquoise/5 hover:text-white hover:shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-axis-turquoise ${className}`}
    >
      {label}
    </Link>
  );
}
