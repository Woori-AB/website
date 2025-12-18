"use client";

import { useIntl } from "react-intl";
import WoltLogo from "@/components/WoltLogo";
import Button from "@/ui/Button";

export default function WoltButton() {
  const intl = useIntl();

  return (
    <Button
      data-testid="wolt-button"
      aria-label={intl.formatMessage({
        id: "wolt-link-description",
      })}
      onClick={() =>
        window.open(
          "https://wolt.com/en/swe/stockholm/restaurant/woori",
          "_blank",
          "noopener,noreferrer"
        )
      }
      className="bg-[#00c2e8]/90 hover:bg-[#31d5f5]"
    >
      <WoltLogo />
    </Button>
  );
}
