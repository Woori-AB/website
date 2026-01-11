"use client";

import Carousel from "@/ui/Carousel";
import ContactDetails from "@/components/ContactDetails";
import Header from "@/components/Header";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Menu from "@/components/Menu";
import OpeningHours from "@/components/OpeningHours";
import { useIntl } from "react-intl";
import Featured from "@/components/Featured";

export default function Home() {
  const intl = useIntl();

  return (
    <>
      <div className="fixed top-0 right-0 m-2 z-100">
        <LanguageSwitcher />
      </div>
      <header
        id="header"
        className="relative flex justify-center min-h-84 lg:aspect-3/1 w-full"
        style={{
          maxHeight: "420px",
        }}
      >
        <Header />
      </header>
      <main>
        <section
          id="section-intro"
          className="flex flex-col justify-center p-8 items-center"
        >
          <div className="container max-w-xl">
            {/*<p className="text-2xl p-2 text-center font-gloryLight border border-l-12 border-r-12 bg-yellow-400/6 border-yellow-400 font-bold">
              {intl.formatMessage({ id: "notice" })}
            </p>*/}
            <div className="flex flex-col py-12 gap-8">
              <p className="text-2xl italic font-gloryLight">
                {intl.formatMessage({ id: "welcome" })}
              </p>
            </div>
          </div>
        </section>
        <section
          id="section-featured"
          className="relative flex justify-center min-h-84 lg:aspect-3/1 w-full"
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
        </section>
        <section
          id="section-menu"
          className="flex flex-col items-center justify-center py-12 px-0"
        >
          <Featured />
          <Menu />
        </section>
      </main>
      <footer
        id="footer"
        className="flex justify-center py-12 dark:bg-black/50 bg-black/3 px-8"
      >
        <div className="container max-w-5xl grid md:grid-cols-2 xs:grid-cols-2 gap-4 items-stretch">
          <OpeningHours />
          <ContactDetails />
        </div>
      </footer>
    </>
  );
}
