"use client";

import Carousel from "@/components/Carousel";
import ContactDetails from "@/components/ContactDetails";
import Header from "@/components/Header";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Menu from "@/components/Menu";
import OpeningHours from "@/components/OpeningHours";
import { motion } from "framer-motion";
import { useIntl } from "react-intl";

export default function Home() {
  const intl = useIntl();

  return (
    <div data-testid="Home">
      <section
        id="header"
        className="relative flex justify-center min-h-84 lg:aspect-[3/1] w-full"
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
        <div className="container max-w-screen-md">
          <div className="flex flex-col py-12 gap-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/*intl.formatMessage({ id: "notice" }) !== "notice" && (
                <p className="text-2xl p-2 text-center font-gloryLight md:mb-6 bg-yellow-500 font-bold text-white">
                  {intl.formatMessage({ id: "notice" })}
                </p>
              )*/}
              <p className="text-2xl italic font-gloryLight">
                {intl.formatMessage({ id: "welcome" })}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <section
        id="menu"
        className="relative flex justify-center min-h-84 lg:aspect-[3/1] w-full"
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
            interval={5000}
            images={[
              "/korean-fried-chicken-original.jpg",
              "/beef-bibimbap.jpg",
              "/korean-fried-chicken-sweet-spicy.jpg",
              "/bulgogi-sm.jpg",
              "/pesto-pasta-sm.jpg",
              "/truffle-pasta-sm.jpg",
              "/tuna-salad-sm.jpg",
              "/pizza-sm.jpg",
            ]}
          />
        </div>
      </section>
      <section
        id="menu"
        className="flex flex-col items-center justify-center py-12 px-8"
      >
        <Menu />
      </section>
      <section
        id="location"
        className="flex justify-center py-12 dark:bg-black/50 bg-black/3  px-8"
      >
        <div className="container max-w-screen-lg grid md:grid-cols-2 xs:grid-cols-2 gap-4 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <OpeningHours />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <ContactDetails />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
