import Link from "next/link";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF } from "@/lib/site";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#030303]">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          <div>
            <p className="font-mono text-sm tracking-[0.35em] text-axis-turquoise">
              AXIS<span className="text-white">OS</span>
            </p>
            <p className="mt-4 max-w-xs font-heading text-lg font-semibold text-white">
              Systems that compound. Growth that scales.
            </p>
            <p className="mt-3 text-sm text-white/50">
              AI-powered growth agency. Dark-room execution. Live metrics.
            </p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-axis-blue">
              Navigate
            </p>
            <ul className="mt-4 space-y-2 font-heading text-sm font-medium uppercase tracking-wider text-white/70">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="transition-colors hover:text-axis-turquoise"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-axis-blue">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="transition-colors hover:text-axis-turquoise"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_PHONE_HREF}
                  className="transition-colors hover:text-axis-turquoise"
                >
                  {CONTACT_PHONE}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-8 font-mono text-[10px] uppercase tracking-widest text-white/35 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} AxisOS. All rights reserved.</span>
          <span className="text-axis-turquoise/60">Signal &gt; noise</span>
        </div>
      </div>
    </footer>
  );
}
