"use client";

import { useState, FormEvent } from "react";
import { BracketCard } from "@/components/bracket-card";
import { CONTACT_EMAIL } from "@/lib/site";

const initial = { name: "", email: "", company: "", message: "" };

export function ContactForm() {
  const [form, setForm] = useState(initial);
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `AxisOS inquiry — ${form.company || "No company"}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\nWhat are you looking to build?\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
    setForm(initial);
  }

  return (
    <BracketCard className="max-w-xl">
      <form onSubmit={onSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-axis-blue"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className="mt-2 w-full border border-white/15 bg-black px-4 py-3 text-sm text-white outline-none transition-colors focus:border-axis-turquoise focus:ring-1 focus:ring-axis-turquoise/40"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-axis-blue"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className="mt-2 w-full border border-white/15 bg-black px-4 py-3 text-sm text-white outline-none transition-colors focus:border-axis-turquoise focus:ring-1 focus:ring-axis-turquoise/40"
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-axis-blue"
          >
            Company
          </label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            value={form.company}
            onChange={(e) =>
              setForm((f) => ({ ...f, company: e.target.value }))
            }
            className="mt-2 w-full border border-white/15 bg-black px-4 py-3 text-sm text-white outline-none transition-colors focus:border-axis-turquoise focus:ring-1 focus:ring-axis-turquoise/40"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-axis-blue"
          >
            What are you looking to build?
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={(e) =>
              setForm((f) => ({ ...f, message: e.target.value }))
            }
            className="mt-2 w-full resize-y border border-white/15 bg-black px-4 py-3 text-sm text-white outline-none transition-colors focus:border-axis-turquoise focus:ring-1 focus:ring-axis-turquoise/40"
          />
        </div>
        <button
          type="submit"
          className="font-mono w-full rounded-sm border border-axis-turquoise bg-black py-3 text-xs font-medium uppercase tracking-[0.2em] text-axis-turquoise transition-all hover:bg-axis-turquoise/5 hover:text-white hover:shadow-glow"
        >
          Send message
        </button>
        {sent ? (
          <p className="font-mono text-center text-[10px] uppercase tracking-widest text-axis-turquoise/80">
            Opening your mail client…
          </p>
        ) : null}
      </form>
    </BracketCard>
  );
}
