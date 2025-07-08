"use client";

import { motion } from "framer-motion";
import Carousel from "@/components/Carousel";
import Menu from "@/components/Menu";
import OpeningHours from "@/components/OpeningHours";
import ContactDetails from "@/components/ContactDetails";
import Header from "@/components/Header";

export default function Home() {
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
              <p className="text-2xl italic font-gloryLight md:mr-32">
                Välkommen till Woori, en restaurang där italienska smaker möter
                koreansk tradition. Namnet &quot;Woori&quot; betyder
                &quot;vi&quot; på koreanska, och här är alla en del av vår
                gemenskap. Njut av våra koreanska rätter tillsammans med pizza
                och pasta.
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
        className="flex flex-col items-center justify-center py-12"
      >
        <Menu />
      </section>
      <section
        id="location"
        className="flex justify-center py-12 dark:bg-black/50 bg-black/3"
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
