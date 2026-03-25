import Link from "next/link";
import { BookCallButton } from "@/components/book-call-button";
import { BracketCard } from "@/components/bracket-card";
import { FadeIn } from "@/components/fade-in";
import { SectionDivider } from "@/components/section-divider";
import { ServiceIcon } from "@/components/service-icon";
import { coreServices } from "@/lib/services";

const steps = [
  {
    n: "01",
    title: "Diagnose",
    body: "We audit your current operation and identify exactly where AI creates leverage. No generic playbooks — every engagement starts with your specific business.",
  },
  {
    n: "02",
    title: "Build",
    body: "Custom systems designed for your goals — ads, landing pages, lead pipelines, automations, dashboards. Built fast, built right.",
  },
  {
    n: "03",
    title: "Deploy",
    body: "Everything goes live. Most clients are operational within days, not months. We handle the technical execution end to end.",
  },
  {
    n: "04",
    title: "Scale",
    body: "When results come in, we scale what's working. No budget re-approval, no internal politics. Just performance.",
  },
];

const stats = [
  { value: "$120K+", label: "Client Revenue Generated" },
  { value: "46.46x", label: "Peak Campaign ROAS" },
  { value: "150,000+", label: "Leads Nurtured" },
];

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-[100svh] flex-col justify-center bg-black px-4 pb-20 pt-28 md:px-6">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(0,229,204,0.08),transparent_55%)]"
          aria-hidden
        />
        <FadeIn className="relative mx-auto max-w-4xl text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-axis-blue">
            AxisOS // Growth systems
          </p>
          <h1 className="mt-6 font-heading text-3xl font-bold uppercase leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            The companies that win tomorrow are building their systems today.
          </h1>
          <p className="mt-6 text-lg font-medium text-axis-turquoise md:text-xl">
            That&apos;s where AxisOS comes in.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <BookCallButton label="Book a Call →" />
            <Link
              href="/services"
              className="font-mono text-xs uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-axis-turquoise"
            >
              View capabilities →
            </Link>
          </div>
        </FadeIn>
      </section>

      <SectionDivider />

      <section className="bg-[#030303] px-4 py-20 md:px-6 md:py-28">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-white md:text-3xl">
            Your competitors aren&apos;t waiting.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/55 md:text-lg">
            Most businesses know AI is changing everything. But knowing and doing are two very
            different things. Right now, your competitors are automating their marketing, their
            operations, their lead generation — running leaner, moving faster, closing deals you
            don&apos;t even know you&apos;re losing. The window to get ahead is open. But it
            won&apos;t stay open forever.
          </p>
        </FadeIn>
      </section>

      <SectionDivider />

      <section className="bg-black px-4 py-20 md:px-6 md:py-28">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-axis-blue">
            What we do
          </p>
          <h2 className="mt-3 font-heading text-2xl font-bold uppercase tracking-tight text-white md:text-3xl">
            Three engines. One mandate: compound growth
          </h2>
        </FadeIn>
        <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-3">
          {coreServices.map((s, i) => (
            <FadeIn key={s.title} delayMs={i * 80}>
              <BracketCard className="h-full">
                <ServiceIcon type={s.icon} />
                <h3 className="mt-6 font-heading text-lg font-bold uppercase tracking-wide text-white">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {s.description}
                </p>
              </BracketCard>
            </FadeIn>
          ))}
        </div>
      </section>

      <SectionDivider />

      <section className="bg-[#050505] px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-3 md:gap-6">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delayMs={i * 60}>
              <div className="text-center md:text-left">
                <p className="font-heading text-3xl font-bold text-axis-turquoise md:text-4xl">
                  {s.value}
                </p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-white/50">
                  {s.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <SectionDivider />

      <section className="bg-black px-4 py-20 md:px-6 md:py-28">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-axis-blue">
            How it works
          </p>
          <h2 className="mt-3 font-heading text-2xl font-bold uppercase tracking-tight text-white md:text-3xl">
            From diagnosis to scale—no theater
          </h2>
        </FadeIn>
        <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2">
          {steps.map((step, i) => (
            <FadeIn key={step.n} delayMs={i * 70}>
              <div className="flex gap-5 border border-white/10 bg-[#080808] p-6 transition-shadow duration-300 hover:border-axis-turquoise/35 hover:shadow-glow-sm md:p-8">
                <span className="font-mono text-2xl font-bold text-axis-turquoise/90">
                  {step.n}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    {step.body}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <SectionDivider />

      <section className="bg-[#020202] px-4 py-20 md:px-6 md:py-28">
        <FadeIn className="mx-auto max-w-3xl">
          <div className="relative rounded-sm p-px shadow-[0_0_40px_rgba(0,229,204,0.15),0_0_80px_rgba(0,136,255,0.08)]">
            <div className="rounded-sm bg-gradient-to-br from-axis-turquoise/25 via-axis-blue/15 to-axis-turquoise/20 p-px">
              <div className="rounded-sm bg-[#030303] px-6 py-12 md:px-12 md:py-14">
                <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-axis-turquoise">
                  POWERED BY OBSIDIAN
                </p>
                <h2 className="mt-4 font-heading text-2xl font-bold uppercase tracking-tight text-white md:text-3xl">
                  This isn&apos;t software. This is infrastructure.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/55">
                  OBSIDIAN is AxisOS&apos;s proprietary AI system — the operational engine behind
                  everything we build and run. It&apos;s not a product. It&apos;s not sold separately.
                  It&apos;s the reason we move faster, operate smarter, and deliver results that
                  traditional agencies can&apos;t match. Every client engagement runs on OBSIDIAN.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <SectionDivider />

      <section className="bg-black px-4 py-24 md:px-6 md:py-32">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-white md:text-4xl">
            Ready to build your system?
          </h2>
          <p className="mt-4 text-white/50">
            The future belongs to the companies bold enough to build for it. We make sure you&apos;re
            one of them.
          </p>
          <div className="mt-10 flex justify-center">
            <BookCallButton label="Book a Call →" />
          </div>
        </FadeIn>
      </section>
    </>
  );
}
