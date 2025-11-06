import type { ReactNode } from "react";

export type Props = {
  id: string;
  children: ReactNode;
  grid?: { cols?: number; rows?: number };
  span?: { col?: number; row?: number };
  className?: string;
};

export default function MenuCard({
  id,
  grid,
  span,
  children,
  className: cn,
}: Props) {
  return (
    <div className={`container grid p-2 py-8 gap-2 self-start ${cn ?? ""}`}>
      {children}
    </div>
  );
}
