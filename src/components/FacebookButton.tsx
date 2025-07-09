"use client";

import { Facebook } from "lucide-react";
import { useIntl } from "react-intl";

export default function FacebookButton() {
  const intl = useIntl();

  return (
    <div className="bg-black/40 hover:bg-black/70 text-white rounded-4xl px-4 py-2">
      <a
        className="flex gap-2"
        href="https://www.facebook.com/people/Woori/61577166415207"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook style={{ marginLeft: -2 }} />{" "}
        <span style={{ marginLeft: 2 }}>
          {intl.formatMessage({ id: "follow-on-facebook" })}
        </span>
      </a>
    </div>
  );
}
