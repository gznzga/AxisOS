import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  accentLeft?: boolean;
};

/** HUD-style corner brackets — aligns with 21st/shadcn “tech card” patterns */
export function BracketCard({
  children,
  className = "",
  accentLeft = false,
}: Props) {
  return (
    <div
      className={`group relative overflow-hidden rounded-sm border border-white/10 bg-black/80 p-6 transition-shadow duration-300 hover:border-axis-turquoise/40 hover:shadow-glow-sm md:p-8 ${
        accentLeft ? "border-l-2 border-l-axis-turquoise" : ""
      } ${className}`}
    >
      <span
        className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l border-t border-axis-turquoise/50"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute right-3 top-3 h-4 w-4 border-r border-t border-axis-turquoise/30"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 border-b border-l border-axis-blue/35"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b border-r border-axis-blue/25"
        aria-hidden
      />
      {children}
    </div>
  );
}
