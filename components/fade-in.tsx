"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
};

export function FadeIn({ children, className = "", delayMs = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        if (delayMs > 0) {
          timeoutId = setTimeout(() => setVisible(true), delayMs);
        } else {
          setVisible(true);
        }
        obs.unobserve(el);
      },
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" }
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [delayMs]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0 motion-reduce:opacity-100"
      } ${className}`}
    >
      {children}
    </div>
  );
}
