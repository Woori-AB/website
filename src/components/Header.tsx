"use client";

import { useIntl } from "react-intl";
import WooriLogo from "@/components/WooriLogo";
import WoltButton from "@/components/WoltButton";
import InstagramButton from "@/components/InstagramButton";
import FacebookButton from "@/components/FacebookButton";
import FoodoraButton from "@/components/FoodoraButton";
import UberEatsButton from "@/components/UberEatsButton";
import TikTokButton from "@/components/TikTokButton";

export default function Header() {
  const intl = useIntl();
  return (
    <>
      <div
        className="w-full overflow-hidden"
        style={{ maxHeight: "420px", position: "relative" }}
      >
        <img
          src="/main-picture-winter-1-small.jpg"
          alt="Main picture"
          className="w-full h-full object-cover"
          style={{ objectPosition: "50% 56%" }}
          loading="eager"
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-b from-black/40 to-black/0 z-10"></div>
      <div className="absolute top-0 p-2 z-20">
        <div className="relative flex flex-col items-center gap-2">
          <WooriLogo />
          <div
            role="group"
            aria-label={intl.formatMessage({ id: "order-food" })}
            className="flex gap-2"
          >
            <FoodoraButton />
            <UberEatsButton />
            <WoltButton />
          </div>
          <nav
            aria-label={intl.formatMessage({ id: "social-media" })}
            className="flex flex-col gap-2"
          >
            <InstagramButton />
            <FacebookButton />
            <TikTokButton />
          </nav>
        </div>
      </div>
    </>
  );
}
