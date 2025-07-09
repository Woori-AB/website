"use client";

import Home from "@/components/Home";
import Providers from "./providers";

export default function Page() {
  return (
    <Providers locale="sv">
      <Home />
    </Providers>
  );
}
