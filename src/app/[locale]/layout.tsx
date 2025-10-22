import React from "react";
import Providers from "../providers";
import type { Locales } from "@/locales/messages";

export type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function Layout({ children, params }: Props) {
  const { locale } = await params;
  return (
    <div>
      <Providers locale={locale as Locales}>{children}</Providers>
    </div>
  );
}
