"use client";

import { cn } from "@/util";
import { type ReactNode } from "react";

type Props = {
  ["aria-label"]: string;
  className?: string;
  onClick: () => void;
  children: ReactNode;
  active?: boolean;
};

export default function Button({
  "aria-label": ariaLabel,
  className,
  onClick,
  children,
  active,
}: Props) {
  return (
    <button
      type="button"
      className={cn(
        "flex gap-2 relative rounded-4xl px-4 py-2 items-center cursor-pointer select-none transition",
        active
          ? "text-white bg-yellow-500 font-bold"
          : "bg-black/40 hover:bg-black/70 text-white",
        className
      )}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
