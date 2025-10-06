"use client";

import React from "react";

type CounterProps = {
  target: number;
  durationMs?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  ariaLabel?: string;
  start?: number;
};

export default function Counter({
  target,
  durationMs = 1200,
  prefix = "",
  suffix = "",
  className,
  ariaLabel,
  start = 1,
}: CounterProps) {
  const [value, setValue] = React.useState<number>(start);
  const startRef = React.useRef<number>(start);
  const rafRef = React.useRef<number | null>(null);
  const startTimeRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || durationMs <= 0 || target <= startRef.current) {
      setValue(target);
      return () => {};
    }

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (timestamp: number) => {
      if (startTimeRef.current === null) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(1, elapsed / durationMs);
      const eased = easeOutCubic(progress);
      const current = Math.floor(startRef.current + (target - startRef.current) * eased);
      setValue(current);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, durationMs]);

  const display = `${prefix}${value.toLocaleString()}${suffix}`;

  return (
    <span aria-label={ariaLabel ?? display} className={className}>
      {display}
    </span>
  );
}
