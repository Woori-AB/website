"use client";

import { useIntl } from "react-intl";
import TikTokLogo from "@/components/TikTokLogo";
import Button from "@/components/Button";

export default function TikTokButton() {
  const intl = useIntl();

  return (
    <Button
      data-testid="tiktok-button"
      aria-label={intl.formatMessage({
        id: "follow-on-tiktok",
      })}
      onClick={() =>
        window.open(
          "https://www.tiktok.com/@wooristockholm",
          "_blank",
          "noopener,noreferrer"
        )
      }
    >
      <TikTokLogo />
      {intl.formatMessage({ id: "follow-on-tiktok" })}
    </Button>
  );
}
