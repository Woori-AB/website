"use client";

//import { Instagram } from "lucide-react";
import InstagramLogo from "@/components/InstagramLogo";
import { useIntl } from "react-intl";
import Button from "@/ui/Button";

export default function InstagramButton() {
  const intl = useIntl();

  return (
    <Button
      data-testid="instagram-button"
      aria-label={intl.formatMessage({
        id: "follow-on-instagram",
      })}
      onClick={() =>
        window.open(
          "https://www.instagram.com/wooristockholm",
          "_blank",
          "noopener,noreferrer",
        )
      }
    >
      <InstagramLogo />
      {intl.formatMessage({ id: "follow-on-instagram" })}
    </Button>
  );
}
