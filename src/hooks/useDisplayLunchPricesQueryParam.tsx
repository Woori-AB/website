import { useSearchParams } from "next/navigation";

export const useDisplayLunchPricesQueryParam = () => {
  const searchParams = useSearchParams();
  const displayLunchPrices = searchParams.get("displayLunchPrices") === "true";
  return displayLunchPrices;
};
