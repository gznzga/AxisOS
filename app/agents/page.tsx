import type { Metadata } from "next";
import { BookCallButton } from "@/components/book-call-button";
import { BracketCard } from "@/components/bracket-card";
import { FadeIn } from "@/components/fade-in";
import { AgentOrb } from "@/components/agents/agent-orb";

export const metadata: Metadata = {
  title: "Agents",
  description: "Meet the AxisOS agents — built by OBSIDIAN.",
};

type Agent = {
  color: string;
  label: string;
  name: string;
  tagline: string;
  description: string;
  capabilities: string[];
};

const agents: Agent[] = [
  {
    color: "#00aaff",
    label: "AI AGENT 01 — AXISOS",
    name: "FRONTLINE",
    tagline: "Always on. Always watching. Built to respond.",
    description:
      "FRONTLINE is your AI inbound reception agent. The moment a lead comes in — from any channel — FRONTLINE responds instantly, qualifies them through a natural conversation, books them directly into your calendar, and logs everything to your CRM. It never sleeps. It never misses. It never forgets.",
    capabilities: [
      "Instant lead response — SMS, email, or voice",
      "AI-powered lead qualification",
      "Automatic calendar booking",
      "CRM logging and updates",
      "24/7 follow-up and reminders",
      "Hot lead escalation to your team",
    ],
  },
  {
    color: "#9400ff",
    label: "AI AGENT 02 — AXISOS",
    name: "PULSE",
    tagline: "Every signal. Every second. Nothing slips through.",
    description:
      "PULSE is your AI marketing and brand execution agent. It writes copy, creates content briefs, manages your social media calendar, builds email and SMS campaigns, and keeps your brand consistent across every channel — without you having to think about it. Your marketing, running on autopilot.",
    capabilities: [
      "AI copywriting and content creation",
      "Social media management and scheduling",
      "Email and SMS campaign execution",
      "Graphic design briefs",
      "Paid advertising support",
      "Brand consistency enforcement",
    ],
  },
];

export default function AgentsPage() {
  return (
    <div className="bg-black px-4 pb-24 pt-16 md:px-6 md:pb-32 md:pt-20">
      <FadeIn className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-axis-blue">
          {"// OUR AGENTS"}
        </p>
        <h1 className="mt-3 font-heading text-3xl font-bold uppercase tracking-tight text-white md:text-4xl lg:text-5xl">
          Meet the Agents.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-white/55 md:text-lg">
          Built by OBSIDIAN. Deployed for your business.
        </p>
      </FadeIn>

      <div className="mx-auto mt-16 grid max-w-6xl gap-6 lg:grid-cols-2">
        {agents.map((agent, i) => (
          <FadeIn key={agent.name} delayMs={i * 80}>
            <BracketCard className="h-full p-0">
              <div className="grid h-full gap-0 md:grid-cols-2">
                <div className="relative min-h-[320px] border-b border-white/10 bg-black/80 p-6 md:min-h-[520px] md:border-b-0 md:border-r md:p-8">
                  <h2
                    className="font-bebas text-5xl tracking-wide md:text-6xl"
                    style={{
                      color: agent.color,
                      textShadow: `0 0 26px ${agent.color}55`,
                    }}
                  >
                    {agent.name}
                  </h2>
                  <div className="mt-6 h-[260px] md:h-[380px]">
                    <AgentOrb color={agent.color} />
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <p
                    className="font-mono text-[10px] uppercase tracking-[0.35em]"
                    style={{ color: `${agent.color}` }}
                  >
                    {agent.label}
                  </p>
                  <p className="mt-3 font-heading text-2xl font-bold uppercase text-white">
                    {agent.name}
                  </p>
                  <p className="mt-2 text-white/60">{agent.tagline}</p>
                  <p className="mt-6 text-sm leading-relaxed text-white/55">
                    {agent.description}
                  </p>

                  <div className="mt-8 border-t border-white/10 pt-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-axis-blue">
                      Capabilities
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-white/65">
                      {agent.capabilities.map((c) => (
                        <li key={c} className="flex gap-2">
                          <span
                            aria-hidden
                            style={{ color: agent.color }}
                          >
                            ▸
                          </span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 border-t border-white/10 pt-6">
                    <BookCallButton label="Book a Call →" />
                  </div>
                </div>
              </div>
            </BracketCard>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

