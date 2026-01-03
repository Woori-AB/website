"use client";

import { useIntl } from "react-intl";
import { useRouter, usePathname } from "next/navigation";
import Flag from "@/components/Flag";
import type { Locales } from "@/locales/messages";

export default function LanguageSwitcher() {
  const intl = useIntl();
  const router = useRouter();
  const pathname = usePathname();

  const changeLocale = (locale: Locales) => {
    const segments = pathname.split("/").filter(Boolean);
    segments[0] = locale; // Assuming locale is always the first segment of the path
    router.push("/" + segments.join("/"));
  };

  return (
    <nav
      className="flex flex-row gap-2"
      aria-label={intl.formatMessage({ id: "language-selector" })}
    >
      <Flag
        src="/flags/sv.svg"
        alt="Svenska"
        onClick={() => changeLocale("sv")}
      />
      <Flag
        src="/flags/en.svg"
        alt="English"
        onClick={() => changeLocale("en")}
      />
      <Flag
        src="/flags/ko.svg"
        alt="한국어"
        onClick={() => changeLocale("ko")}
      />
    </nav>
  );
}
