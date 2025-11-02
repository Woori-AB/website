"use client";

import { Instagram } from "lucide-react";
import { useIntl } from "react-intl";

export default function InstagramButton() {
  const intl = useIntl();

  return (
    <div className="bg-black/40 hover:bg-black/70 text-white rounded-4xl px-4 py-2 select-none">
      <a
        className="flex gap-2"
        href="https://www.instagram.com/wooristockholm"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram /> {intl.formatMessage({ id: "follow-on-instagram" })}
      </a>
    </div>
  );
}
