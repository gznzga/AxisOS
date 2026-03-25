import type { Metadata } from "next";
import { BookCallButton } from "@/components/book-call-button";
import { ContactForm } from "@/components/contact-form";
import { FadeIn } from "@/components/fade-in";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach AxisOS — book a call or send a message.",
};

export default function ContactPage() {
  return (
    <div className="bg-black px-4 pb-24 pt-16 md:px-6 md:pb-32 md:pt-20">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-axis-blue">
          Contact
        </p>
        <h1 className="mt-3 font-heading text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
          Let&apos;s build something.
        </h1>
      </FadeIn>

      <div className="mx-auto mt-14 flex max-w-xl flex-col items-center gap-10">
        <FadeIn>
          <ContactForm />
        </FadeIn>

        <FadeIn className="w-full text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/35">
            Prefer to talk first?
          </p>
          <div className="mt-4 flex justify-center">
            <BookCallButton label="Book a Call →" />
          </div>
          <p className="font-mono mt-10 text-[10px] uppercase tracking-[0.3em] text-white/35">
            Or reach directly
          </p>
          <div className="mt-4 flex flex-col items-center gap-3 font-heading text-sm text-white/70">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="transition-colors hover:text-axis-turquoise"
            >
              {CONTACT_EMAIL}
            </a>
            <a
              href={CONTACT_PHONE_HREF}
              className="transition-colors hover:text-axis-turquoise"
            >
              {CONTACT_PHONE}
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
