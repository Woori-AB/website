import React from "react";
import Providers from "@/app/providers";
import type { Locales } from "@/locales/messages";
import messages from "@/locales/messages";

export type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return Object.keys(messages).map(key => ({ locale: key }))
}

export default async function Layout({ children, params }: Props) {
  const { locale } = await params;
  return (
    <div>
      <Providers locale={locale as Locales}>{children}</Providers>
    </div>
  );
}
