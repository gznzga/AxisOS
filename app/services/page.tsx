import type { Metadata } from "next";
import Link from "next/link";
import { BracketCard } from "@/components/bracket-card";
import { FadeIn } from "@/components/fade-in";
import { PageHeader } from "@/components/page-header";
import { ServiceIcon } from "@/components/service-icon";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Two pillars: AI Agents and AI Consulting.",
};

export default function ServicesPage() {
  return (
    <div className="bg-black px-4 pb-24 pt-16 md:px-6 md:pb-32 md:pt-20">
      <PageHeader
        eyebrow="Services"
        title="Services"
        subtitle="Two pillars. One outcome: systems that run without you."
      />

      <div className="mx-auto mt-16 max-w-6xl">
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <FadeIn>
            <BracketCard accentLeft className="h-full">
              <ServiceIcon type="systems" />
              <h2 className="mt-6 font-heading text-xl font-bold uppercase tracking-wide text-white">
                AI Agents
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/55">
                Custom-built autonomous agents designed to automate the most critical functions of
                your business. Each agent is built for your specific operation — not a template, not
                a subscription. A permanent system that runs without you.
              </p>
              <div className="mt-8">
                <Link
                  href="/agents"
                  className="font-mono inline-flex items-center justify-center rounded-sm border border-axis-turquoise bg-black px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-axis-turquoise transition-all duration-300 hover:border-axis-turquoise hover:bg-axis-turquoise/5 hover:text-white hover:shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-axis-turquoise"
                >
                  Meet the Agents →
                </Link>
              </div>
            </BracketCard>
          </FadeIn>

          <FadeIn delayMs={80}>
            <BracketCard accentLeft className="h-full">
              <ServiceIcon type="consulting" />
              <h2 className="mt-6 font-heading text-xl font-bold uppercase tracking-wide text-white">
                AI Consulting
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/55">
                We audit how your business operates and deliver a clear strategy for where and how
                AI creates leverage. No deployment. No hand-holding. Just the clearest possible
                picture of what your AI-enabled business looks like — and exactly what to do about
                it.
              </p>
            </BracketCard>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
