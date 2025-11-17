"use client";

import Carousel from "@/components/Carousel";
import ContactDetails from "@/components/ContactDetails";
import Header from "@/components/Header";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Menu from "@/components/Menu";
import OpeningHours from "@/components/OpeningHours";
import { useIntl } from "react-intl";

export default function Home() {
  const intl = useIntl();

  return (
    <div data-testid="Home">
      <section
        id="header"
        className="relative flex justify-center min-h-84 lg:aspect-3/1 w-full"
        style={{
          maxHeight: "420px",
        }}
      >
        <Header />
        <div className="absolute top-0 right-0 m-2 z-100">
          <LanguageSwitcher />
        </div>
      </section>
      <section
        id="intro"
        className="flex flex-col justify-center p-8 items-center"
      >
        <div className="container max-w-xl">
          <div className="flex flex-col py-12 gap-8">
            <p className="text-2xl italic font-gloryLight">
              {intl.formatMessage({ id: "welcome" })}
            </p>
          </div>
        </div>
      </section>
      <section
        id="menu"
        className="relative flex justify-center min-h-84 lg:aspect-3/1 w-full"
        style={{
          maxHeight: "420px",
        }}
      >
        <div
          className="w-full overflow-hidden"
          style={{
            maxHeight: "420px",
          }}
        >
          <Carousel
            opaqueDuration={5}
            crossfadeDuration={3}
            images={[
              "/korean-fried-chicken-original.jpg",
              "/beef-bibimbap.jpg",
              "/korean-fried-chicken-sweet-spicy.jpg",
              "/bulgogi-sm.jpg",
              "/korean-fried-chicken-honey-soy.jpg",
              "/natural-wines.jpg",
              "/pesto-pasta-sm.jpg",
              "/truffle-pasta-sm.jpg",
              "/tuna-salad-sm.jpg",
            ]}
          />
        </div>
      </section>
      <section
        id="menu"
        className="flex flex-col items-center justify-center py-12 px-0"
      >
        <Menu />
      </section>
      <section
        id="location"
        className="flex justify-center py-12 dark:bg-black/50 bg-black/3  px-8"
      >
        <div className="container max-w-5xl grid md:grid-cols-2 xs:grid-cols-2 gap-4 items-stretch">
          <OpeningHours />
          <ContactDetails />
        </div>
      </section>
    </div>
  );
}
