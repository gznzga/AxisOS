import type { Metadata } from "next";
import { BookCallButton } from "@/components/book-call-button";
import { BracketCard } from "@/components/bracket-card";
import { FadeIn } from "@/components/fade-in";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "About",
  description:
    "AxisOS embeds, builds, and deploys AI-powered growth systems for businesses that refuse to fall behind.",
};

const pillars = [
  {
    title: "Strategy + Execution",
    body: "Most agencies execute without thinking. Most consultants think without building. AxisOS does both — we diagnose the problem and build the system that solves it.",
  },
  {
    title: "Speed Without Sacrifice",
    body: "We move at the pace of AI. What takes traditional agencies months, we deliver in days. Without cutting corners.",
  },
  {
    title: "Systems That Outlast Us",
    body: "Everything we build is designed to run independently. We don't create dependency. We build infrastructure.",
  },
];

const team = [
  {
    name: "Mateo Gonzaga",
    role: "Co-Founder, Head of Business Development",
    email: "mgonzagacu@gmail.com",
  },
  {
    name: "Aubrie Watson",
    role: "Co-Founder, Growth Systems Manager",
    email: "awatsoncu@gmail.com",
  },
  {
    name: "Ben Marinez",
    role: "Co-Founder, Paid Ads Specialist",
    email: "bmarinezcu@gmail.com",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-black px-4 pb-24 pt-16 md:px-6 md:pb-32 md:pt-20">
      <PageHeader
        eyebrow="About"
        title="We don't consult from the sidelines. We embed, we build, and we deploy."
      />

      <FadeIn className="mx-auto mt-16 max-w-3xl">
        <p className="text-center text-base leading-relaxed text-white/60 md:text-lg">
          AxisOS was built by a student founder at LMU who got tired of watching businesses leave
          money on the table because they didn&apos;t have the right systems. We built AxisOS
          itself using the exact tools we deploy for clients — and went from zero to a fully
          operational agency in two weeks. That&apos;s not a pitch. That&apos;s proof.
        </p>
      </FadeIn>

      <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-3">
        {pillars.map((p, i) => (
          <FadeIn key={p.title} delayMs={i * 70}>
            <BracketCard className="h-full">
              <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-white">
                {p.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/55">{p.body}</p>
            </BracketCard>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mx-auto mt-20 max-w-6xl">
        <p className="font-mono text-center text-[10px] uppercase tracking-[0.3em] text-axis-blue">
          Team
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <BracketCard key={member.email} className="h-full">
              <h2 className="font-heading text-xl font-bold uppercase tracking-wide text-white">
                {member.name}
              </h2>
              <p className="mt-2 font-mono text-xs uppercase tracking-widest text-axis-turquoise">
                {member.role}
              </p>
              <a
                href={`mailto:${member.email}`}
                className="mt-4 inline-block text-sm text-white/60 transition-colors hover:text-axis-turquoise"
              >
                {member.email}
              </a>
            </BracketCard>
          ))}
        </div>
        <p className="mt-10 text-center text-base text-white/55 md:text-lg">
          Building the AI backbone for businesses that refuse to fall behind.
        </p>
        <div className="mt-10 flex justify-center">
          <BookCallButton label="Book a Call →" />
        </div>
      </FadeIn>
    </div>
  );
}
