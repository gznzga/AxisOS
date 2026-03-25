import type { Metadata } from "next";
import { BookCallButton } from "@/components/book-call-button";
import { BracketCard } from "@/components/bracket-card";
import { FadeIn } from "@/components/fade-in";
import { PageHeader } from "@/components/page-header";
import { ServiceIcon } from "@/components/service-icon";
import { servicesPageDetails } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full systems: AI-powered marketing, customized AI systems, and consulting — powered by OBSIDIAN.",
};

export default function ServicesPage() {
  return (
    <div className="bg-black px-4 pb-24 pt-16 md:px-6 md:pb-32 md:pt-20">
      <PageHeader
        eyebrow="Services"
        title="What We Build"
        subtitle="Full systems. Not one-off campaigns. Sold as a complete stack or as individual components — built around what your business actually needs."
      />

      <div className="mx-auto mt-16 max-w-6xl">
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {servicesPageDetails.map((s, i) => (
            <FadeIn key={s.title} delayMs={i * 80}>
              <BracketCard accentLeft className="h-full">
                <ServiceIcon type={s.icon} />
                <h2 className="mt-6 font-heading text-xl font-bold uppercase tracking-wide text-white">
                  {s.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/55">
                  {s.description}
                </p>
                <ul className="mt-5 space-y-2 border-t border-white/10 pt-5 text-sm text-white/65">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-axis-turquoise" aria-hidden>
                        ▸
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </BracketCard>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12 border border-axis-turquoise/25 bg-[#050505] px-6 py-8 text-center md:px-10 md:py-10">
          <p className="text-sm leading-relaxed text-white/70 md:text-base">
            All three service pillars run on OBSIDIAN — AxisOS&apos;s proprietary AI layer.
            It&apos;s what makes our systems faster to build, smarter to operate, and harder to
            replicate.
          </p>
        </FadeIn>

        <FadeIn className="mt-16 flex justify-center">
          <BookCallButton label="Book a Call →" />
        </FadeIn>
      </div>
    </div>
  );
}
