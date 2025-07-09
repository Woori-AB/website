"use client";

import { useRouter, usePathname } from "next/navigation";
import Flag from "./Flag";
import { Locales } from "@/locales/messages";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const changeLocale = (locale: Locales) => {
    const segments = pathname.split("/").filter(Boolean);
    segments[0] = locale; // Assuming locale is always the first segment of the path
    router.push("/" + segments.join("/"));
  };

  return (
    <div className="flex flex-row gap-2">
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
    </div>
  );
}
