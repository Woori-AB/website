"use client";

import { useIntl } from "react-intl";
import UberEatsLogo from "@/components/UberEatsLogo";
import Button from "@/components/Button";

export default function UberEatsButton() {
  const intl = useIntl();

  return (
    <Button
      data-testid="ubereats-button"
      aria-label={intl.formatMessage({
        id: "ubereats-link-description",
      })}
      onClick={() =>
        window.open(
          "https://www.ubereats.com/se-en/store/woori/2t8azOX1WQW7Fd--w0qouw",
          "_blank",
          "noopener,noreferrer"
        )
      }
      className="bg-[#06c167]/90 hover:bg-[#32d184]"
    >
      <UberEatsLogo />
    </Button>
  );
}
