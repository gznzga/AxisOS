import { FadeIn } from "@/components/fade-in";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function PageHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <FadeIn className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-axis-blue">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="mt-3 font-heading text-3xl font-bold uppercase tracking-tight text-white md:text-4xl lg:text-5xl">
        {title}
      </h1>
      {subtitle ? (
        <p className="mt-5 text-base leading-relaxed text-white/55 md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </FadeIn>
  );
}
