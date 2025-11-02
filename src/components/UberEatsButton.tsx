"use client";

import { useIntl } from "react-intl";
import UberEatsLogo from "./UberEatsLogo";

export default function UberEatsButton() {
  const intl = useIntl();

  return (
    <div className="relative bg-[#06c167]/90 hover:bg-[#32d184]/100 text-white rounded-4xl px-4 py-2 overflow-hidden flex items-center justify-center">
      <a
        className="flex gap-2"
        href="https://www.ubereats.com/se-en/store/woori/2t8azOX1WQW7Fd--w0qouw"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={intl.formatMessage({ id: "ubereats-link-description" })}
      >
        <UberEatsLogo size={0.6} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/0 z-10"></div>
      </a>
    </div>
  );
}
