"use client";

import FacebookLogo from "@/components/FacebookLogo";
import { useIntl } from "react-intl";
import Button from "@/ui/Button";

export default function FacebookButton() {
  const intl = useIntl();

  return (
    <Button
      data-testid="facebook-button"
      aria-label={intl.formatMessage({
        id: "follow-on-facebook",
      })}
      onClick={() =>
        window.open(
          "https://www.facebook.com/people/Woori/61577166415207",
          "_blank",
          "noopener,noreferrer",
        )
      }
    >
      <FacebookLogo />
      {intl.formatMessage({ id: "follow-on-facebook" })}
    </Button>
  );
}
