"use client";

import { useIntl } from "react-intl";
import TikTokLogo from "./TikTokLogo";

export default function TikTokButton() {
  const intl = useIntl();

  return (
    <div className="bg-black/40 hover:bg-black/70 text-white rounded-4xl px-4 py-2 select-none">
      <a
        className="flex gap-2"
        href="https://www.tiktok.com/@wooristockholm"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TikTokLogo />{" "}
        <span style={{ marginLeft: 0 }}>
          {intl.formatMessage({ id: "follow-on-tiktok" })}
        </span>
      </a>
    </div>
  );
}
