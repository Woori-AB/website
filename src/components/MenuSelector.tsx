"use client";

import { useDisplayLunchPricesQueryParam } from "@/hooks/useDisplayLunchPricesQueryParam";
import Button from "@/ui/Button";
import { useRouter, useSearchParams } from "next/navigation";
import { useIntl } from "react-intl";

export default function MenuSelector() {
  const intl = useIntl();
  const router = useRouter();
  const searchParams = useSearchParams();
  const displayLunchPrices = useDisplayLunchPricesQueryParam();

  const displayMenu = (menu: "lunch" | "dinner") => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("displayLunchPrices", menu === "lunch" ? "true" : "false");
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-center gap-2">
        <Button
          data-testid="lunch-prices-button"
          aria-label={intl.formatMessage({ id: "lunch-prices" })}
          onClick={() => displayMenu("lunch")}
          active={displayLunchPrices}
        >
          {intl.formatMessage({ id: "lunch-prices" })}
        </Button>
        <Button
          data-testid="dinner-prices-button"
          aria-label={intl.formatMessage({ id: "dinner-prices" })}
          onClick={() => displayMenu("dinner")}
          active={!displayLunchPrices}
        >
          {intl.formatMessage({ id: "dinner-prices" })}
        </Button>
      </div>
    </div>
  );
}
