import type { ReactNode } from "react";

export type Props = {
  id: string;
  children: ReactNode;
  className?: string;
};

export default function MenuCard({
  id,
  children,
  className: cn,
}: Props) {
  return (
    <div id={id} className={`container grid p-2 py-8 gap-2 self-start ${cn ?? ""}`}>
      {children}
    </div>
  );
}
