import type { Metadata } from "next";
import { BookCallButton } from "@/components/book-call-button";
import { BracketCard } from "@/components/bracket-card";
import { FadeIn } from "@/components/fade-in";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Two phases, one system — AI marketing, AI systems, consulting, and enterprise engagements.",
};

type TierDual = {
  layout: "dual";
  name: string;
  blurb: string | null;
  setup: string;
  monthly: string;
  features: string[];
  cta: string;
  popular: boolean;
};

type TierMonthlyOnly = {
  layout: "monthlyOnly";
  name: string;
  blurb: string | null;
  monthly: string;
  features: string[];
  cta: string;
  popular: boolean;
};

type TierEnterprise = {
  layout: "enterprise";
  name: string;
  blurb: string;
  priceLabel: string;
  features: string[];
  cta: string;
  popular: boolean;
};

type Tier = TierDual | TierMonthlyOnly | TierEnterprise;

const tiers: Tier[] = [
  {
    layout: "dual",
    name: "AI-Powered Marketing",
    blurb: null,
    setup: "$2,500–$3,500",
    monthly: "$1,000–$1,500/mo",
    features: [
      "Paid media campaign management",
      "Search visibility infrastructure",
      "Inbound sales system",
      "AI-powered lead pipeline",
      "Monthly performance report",
    ],
    cta: "Book a Call →",
    popular: false,
  },
  {
    layout: "dual",
    name: "AI Systems",
    blurb: null,
    setup: "$3,500–$5,000",
    monthly: "$1,500–$2,000/mo",
    features: [
      "Custom CRM buildout",
      "Reporting dashboards",
      "Workflow automations",
      "AI agents",
      "Data management & pipelines",
    ],
    cta: "Book a Call →",
    popular: false,
  },
  {
    layout: "monthlyOnly",
    name: "AI Consulting",
    blurb: null,
    monthly: "$1,000–$1,500/mo",
    features: [
      "Tool Adoption & Onboarding",
      "Quarterly Strategy Reports",
      "Optimized Usage Reports",
      "Ongoing Optimization Recommendations",
    ],
    cta: "Book a Call →",
    popular: false,
  },
  {
    layout: "enterprise",
    name: "Enterprise",
    blurb: "For organizations building systems at scale.",
    priceLabel: "Custom",
    features: [
      "Everything across all three pillars",
      "Full OBSIDIAN Integration",
      "Dedicated AI Infrastructure",
      "Priority Support",
      "Monthly Executive Briefing",
      "Custom Scope & Deliverables",
    ],
    cta: "Let's Talk →",
    popular: true,
  },
];

const faqs = [
  {
    q: "How long does it take to get started?",
    a: "Most clients are live within 5–7 business days of signing.",
  },
  {
    q: "Do I need to understand AI or tech to work with you?",
    a: "No. That's our job. You focus on your business — we handle the systems.",
  },
  {
    q: "What makes AxisOS different from a regular agency?",
    a: "We build systems that run without us. Most agencies create dependency. We create infrastructure that compounds over time.",
  },
  {
    q: "Can I buy just one service instead of the full stack?",
    a: "Yes. Every service is available individually or as part of the full system — perfectly tailored to what your business actually needs.",
  },
];

function PriceBlock({ tier }: { tier: Tier }) {
  if (tier.layout === "enterprise") {
    return (
      <div className="mt-6 border-t border-white/10 pt-6">
        <p className="font-heading text-3xl font-bold text-axis-turquoise md:text-4xl">
          {tier.priceLabel}
        </p>
      </div>
    );
  }

  if (tier.layout === "monthlyOnly") {
    return (
      <div className="mt-6 border-t border-white/10 pt-6">
        <p className="font-mono text-[10px] uppercase tracking-widest text-axis-blue">
          Setup
        </p>
        <p className="mt-1 font-heading text-lg text-white/60">No setup fee</p>
        <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-axis-blue">
          Monthly
        </p>
        <p className="mt-1 font-heading text-lg text-white">{tier.monthly}</p>
      </div>
    );
  }

  return (
    <div className="mt-6 border-t border-white/10 pt-6">
      <p className="font-mono text-[10px] uppercase tracking-widest text-axis-blue">
        Setup
      </p>
      <p className="mt-1 font-heading text-3xl font-bold text-axis-turquoise">
        {tier.setup}
      </p>
      <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-axis-blue">
        Monthly
      </p>
      <p className="mt-1 font-heading text-lg text-white">{tier.monthly}</p>
    </div>
  );
}

export default function PricingPage() {
  return (
    <div className="bg-black px-4 pb-24 pt-16 md:px-6 md:pb-32 md:pt-20">
      <PageHeader
        eyebrow="Pricing"
        title="Two phases. One system."
        subtitle="We build it right the first time, then manage it for a fraction of the cost."
      />

      <div className="mx-auto mt-16 grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">
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
                {tier.blurb ? (
                  <p className="mt-2 text-sm text-white/45">{tier.blurb}</p>
                ) : null}
                <PriceBlock tier={tier} />
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
