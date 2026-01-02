import { Suspense } from "react";
import Home from "@/components/Home";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Home />
    </Suspense>
  );
}

export async function generateStaticParams() {
  return [{ locale: "sv" }, { locale: "en" }, { locale: "ko" }];
}
