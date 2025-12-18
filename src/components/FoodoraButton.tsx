"use client";

import { useIntl } from "react-intl";
import FoodoraLogo from "@/components/FoodoraLogo";
import Button from "@/components/Button";

export default function FoodoraButton() {
  const intl = useIntl();

  return (
    <Button
      data-testid="foodora-button"
      aria-label={intl.formatMessage({
        id: "wolt-link-description",
      })}
      onClick={() =>
        window.open(
          "https://www.foodora.se/en/restaurant/lzn4/woori",
          "_blank",
          "noopener,noreferrer"
        )
      }
      className="bg-[#df1067]/90 hover:bg-[#ed478c]"
    >
      <FoodoraLogo />
    </Button>
  );
}
