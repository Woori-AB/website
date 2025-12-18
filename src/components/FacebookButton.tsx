"use client";

import { Facebook } from "lucide-react";
import { useIntl } from "react-intl";
import Button from "@/components/Button";

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
          "noopener,noreferrer"
        )
      }
    >
      <Facebook className="-ml-[2px] " />
      {intl.formatMessage({ id: "follow-on-facebook" })}
    </Button>
  );
}
