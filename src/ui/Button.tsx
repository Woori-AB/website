"use client";

import { cn } from "@/util";
import { type ReactNode } from "react";

type Props = {
  ["aria-label"]: string;
  className?: string;
  onClick: () => void;
  children: ReactNode;
};

export default function Button({
  "aria-label": ariaLabel,
  className,
  onClick,
  children,
}: Props) {
  return (
    <button
      type="button"
      className={cn(
        "flex gap-2 relative rounded-4xl px-4 py-2 items-center cursor-pointer bg-black/40 hover:bg-black/70 text-white select-none",
        className
      )}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
      <div className="absolute inset-0 bg-linear-to-b from-white/10 to-white/0 z-10 pointer-events-none" />
    </button>
  );
}
