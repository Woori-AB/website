"use client";

import { IntlProvider } from "react-intl";
import messages, { type Locales } from "@/locales/messages";

export type Props = {
  locale: Locales;
  children: React.ReactNode;
};

export default function Providers({ locale, children }: Props) {
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {children}
    </IntlProvider>
  );
}
