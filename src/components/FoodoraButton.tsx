"use client";

import { useIntl } from "react-intl";
import FoodoraLogo from "./FoodoraLogo";

export default function FoodoraButton() {
  const intl = useIntl();

  return (
    <div className="relative bg-[#df1067]/90 hover:bg-[#ed478c]/100 text-white rounded-4xl px-4 py-2 overflow-hidden flex items-center justify-center">
      <a
        className="flex gap-2"
        href="https://www.foodora.se/en/restaurant/lzn4/woori"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={intl.formatMessage({ id: "foodora-link-description" })}
      >
        <FoodoraLogo size={0.6} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/0 z-10"></div>
      </a>
    </div>
  );
}
