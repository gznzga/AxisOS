"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BookCallButton } from "@/components/book-call-button";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/90 backdrop-blur-md">
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-nav-line opacity-90"
        aria-hidden
      />
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <Link
          href="/"
          className="font-mono text-sm font-medium tracking-[0.35em] text-axis-turquoise"
        >
          AXIS<span className="text-white">OS</span>
        </Link>

        <nav
          className="hidden items-center gap-8 font-heading text-sm font-semibold uppercase tracking-widest text-white/80 md:flex"
          aria-label="Primary"
        >
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`transition-colors hover:text-axis-turquoise ${
                  active ? "text-axis-turquoise" : ""
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <BookCallButton />
        </div>

        <button
          type="button"
          className="font-mono text-xs uppercase tracking-widest text-axis-turquoise md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-white/10 bg-black px-4 pb-6 pt-2 md:hidden"
        >
          <nav className="flex flex-col gap-4 font-heading text-sm font-semibold uppercase tracking-widest">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={
                  pathname === href ? "text-axis-turquoise" : "text-white/80"
                }
              >
                {label}
              </Link>
            ))}
            <BookCallButton className="mt-2 w-full" />
          </nav>
        </div>
      ) : null}
    </header>
  );
}
