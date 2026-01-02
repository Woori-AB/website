"use client";

import { Suspense } from "react";
import Home from "@/components/Home";
import Providers from "@/app/providers";

export default function Page() {
  return (
    <Providers locale="sv">
      <Suspense fallback={null}>
        <Home />
      </Suspense>
    </Providers>
  );
}
