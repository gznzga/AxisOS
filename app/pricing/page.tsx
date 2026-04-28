import type { Metadata } from "next";
import { BookCallButton } from "@/components/book-call-button";
import { BracketCard } from "@/components/bracket-card";
import { FadeIn } from "@/components/fade-in";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple pricing for AI Agents and AI Consulting.",
};

type Tier = {
  name: string;
  price: string;
  subtext: string;
  features: string[];
  cta: string;
  popular?: boolean;
};

const tiers: Tier[] = [
  {
    name: "AI Agents",
    price: "$25,000 build + $1,500 / mo",
    subtext: "One-time build. Ongoing retainer to operate, maintain, and improve your agent.",
    features: [
      "Custom agent built for your business",
      "Full integration with your existing stack",
      "14-day deployment timeline",
      "Dedicated build support",
    ],
    cta: "Let's Talk →",
    popular: true,
  },
  {
    name: "AI Consulting",
    price: "$2,000 / mo",
    subtext: "Quarterly reporting included. No setup fee.",
    features: [
      "Full AI audit of your business operations",
      "Strategic AI implementation roadmap",
      "Tool adoption recommendations",
      "Quarterly performance reporting",
      "Ongoing optimization guidance",
    ],
    cta: "Book a Call →",
  },
];

const faqs = [
  {
    q: "How long does it take to get started?",
    a: "Consulting engagements can start immediately. Most agents are live within 14 days of signing.",
  },
  {
    q: "Do I need to understand AI or tech to work with you?",
    a: "No. That's our job. You focus on your business — we handle the systems.",
  },
  {
    q: "What makes AxisOS different from a regular agency?",
    a: "We build infrastructure. Agents that run without you, and consulting that tells you exactly where leverage is — without noise.",
  },
  {
    q: "Can I buy just one service instead of the full stack?",
    a: "Yes. You can engage for AI Consulting only, or commission a single custom agent.",
  },
  {
    q: "What is a custom agent?",
    a: "Every FRONTLINE or PULSE agent is built specifically for your business — your CRM, your channels, your qualification criteria. Nothing is templated. Everything is yours.",
  },
  {
    q: "How long does it take to deploy an agent?",
    a: "Most agents are live within 14 days of signing.",
  },
];

export default function PricingPage() {
  return (
    <div className="bg-black px-4 pb-24 pt-16 md:px-6 md:pb-32 md:pt-20">
      <PageHeader
        eyebrow="Pricing"
        title="Simple pricing. No surprises."
        subtitle="One agent. One price. Built for your business."
      />

      <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
        {tiers.map((tier, i) => (
          <FadeIn key={tier.name} delayMs={i * 80}>
            <div
              className={`relative h-full rounded-sm ${
                tier.popular
                  ? "p-px shadow-[0_0_36px_rgba(0,229,204,0.35)]"
                  : ""
              }`}
            >
              {tier.popular ? (
                <div className="absolute inset-0 rounded-sm bg-gradient-to-b from-axis-turquoise/50 via-axis-blue/30 to-axis-turquoise/40 opacity-80 blur-sm" />
              ) : null}
              <BracketCard
                className={`relative z-10 flex h-full flex-col ${
                  tier.popular ? "border-axis-turquoise/50 bg-[#050505]" : ""
                }`}
              >
                {tier.popular ? (
                  <span className="font-mono mb-4 inline-block w-fit rounded-sm border border-axis-turquoise/40 bg-axis-turquoise/10 px-2 py-1 text-[9px] uppercase tracking-[0.2em] text-axis-turquoise">
                    Most popular
                  </span>
                ) : null}
                <h2 className="font-heading text-xl font-bold uppercase tracking-wide text-white">
                  {tier.name}
                </h2>
                <p className="mt-3 font-heading text-3xl font-bold text-axis-turquoise md:text-4xl">
                  {tier.price}
                </p>
                <p className="mt-3 text-sm text-white/45">{tier.subtext}</p>
                <ul className="mt-6 flex-1 space-y-3 text-sm text-white/60">
                  {tier.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-axis-turquoise" aria-hidden>
                        ▸
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <BookCallButton className="w-full" label={tier.cta} />
                </div>
              </BracketCard>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mx-auto mt-24 max-w-3xl">
        <p className="font-mono text-center text-[10px] uppercase tracking-[0.35em] text-axis-blue">
          FAQ
        </p>
        <h2 className="mt-3 text-center font-heading text-2xl font-bold uppercase text-white">
          Straight answers
        </h2>
        <div className="mt-10 space-y-4">
          {faqs.map((item) => (
            <BracketCard key={item.q}>
              <h3 className="font-heading text-base font-bold uppercase tracking-wide text-white">
                {item.q}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">{item.a}</p>
            </BracketCard>
          ))}
        </div>
      </FadeIn>
    </div>
  );
}
