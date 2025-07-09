"use client";

import { useIntl } from "react-intl";
import WoltLogo from "./WoltLogo";

export default function WoltButton() {
  const intl = useIntl();

  return (
    <div className="relative bg-[#00c2e8]/90 hover:bg-[#31d5f5]/100 text-white rounded-4xl px-4 py-2 overflow-hidden">
      <a
        className="flex gap-2"
        href="https://wolt.com/en/swe/stockholm/restaurant/woori"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WoltLogo />{" "}
        <span style={{ marginLeft: 2 }}>
          {intl.formatMessage({ id: "delivery-to-door" })}
        </span>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/0 z-10"></div>
      </a>
    </div>
  );
}
