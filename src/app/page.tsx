"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div data-testid="Home">
      <section
        id="header"
        className="relative flex justify-center min-h-84 lg:aspect-[3/1] w-full"
        style={{
          maxHeight: "480px",
        }}
      >
        <div
          className="w-full overflow-hidden"
          style={{
            maxHeight: "480px",
          }}
        >
          <div
            className="bg-no-repeat bg-cover bg-center w-full h-full overflow-hidden"
            style={{
              backgroundImage:
                "url('https://woori-ab.github.io/website/header.png')",
            }}
          ></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/50 z-10"></div>
        <div className="absolute top-0 p-2 z-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span id="header-title" className="text-[5rem]">
              WOORI
            </span>
          </motion.div>
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
              <p className="text-2xl italic font-gloryLight md:mr-32">
                Välkommen till Woori - ett italienskt kök med hjärta och själ,
                grundat av två par i vänskap och kärlek. "Woori" betyder "vi" på
                koreanska, och här är alla en del av vår gemenskap.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p className="text-2xl italic font-gloryLight md:ml-32">
                Pizza och pasta står i fokus - varje måltid en varm stund, varje
                gäst en del av familjen. Kom för smaken, stanna för gemenskapen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <section
        id="menu"
        className="relative flex justify-center aspect-[3/1] bg-no-repeat bg-contain bg-center"
        style={{
          backgroundImage: "url('https://woori-ab.github.io/website/menu.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/50 z-10"></div>
      </section>
      <section id="menu" className="flex justify-center py-12">
        <div className="container max-w-screen-lg grid md:grid-cols-2 xs:grid-cols-2 gap-4 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center text-center rotate-1">
              <h1>Pizza</h1>
              <div className="flex flex-col items-center text-center">
                <h2>Margherita 149 kr</h2>
                <span>Tomatsås, Fior di latte, Burrata, Parmesan</span>
                <span className="italic">
                  (Allergi: Gluten, Laktos, Mjölkprotein)
                </span>
              </div>
              <div className="flex flex-col items-center text-center">
                <h2>Pepperoni 149 kr</h2>
                <span>Tomatsås, Fior di latte, Pepperoni, Parmesan</span>
                <span className="italic">
                  (Allergi: Gluten, Laktos, Mjölkprotein)
                </span>
              </div>
              <div className="flex flex-col items-center text-center">
                <h2>Prosciutto 169 kr</h2>
                <span>
                  Tomatsås, Fior di latte, Prosciutto crudo, Ruccola, Parmesan
                </span>
                <span className="italic">
                  (Allergi: Gluten, Laktos, Mjölkprotein)
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center text-center">
              <h1>Pasta</h1>
              <div className="flex flex-col items-center text-center">
                <h2>Tagliatelle al Tartufo e Funghi 189 kr</h2>
                <span>
                  Tagliatelle, Tryffelkräm, Shiitake, Skogschampinjoner
                </span>
                <span className="italic">(Allergi: Laktos, Mjölkprotein)</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <h2>Pesto alla Genovese 179 kr</h2>
                <span>
                  Spaghetti, Basilika, Cashewnötter, Vitlök, Parmesan, Tomater,
                  Burrata
                </span>
                <span className="italic">
                  (Allergi: Laktos, Mjölkprotein, nötter)
                </span>
              </div>
              <div className="flex flex-col items-center text-center">
                <h2>Ravioli 169 kr</h2>
                <span>Spenat, Ricotta, Parmesan, Friterad salvia</span>
                <span className="italic">(Allergi: Laktos, Mjölkprotein)</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center text-center">
              <h1>Sallad</h1>
              <div className="flex flex-col items-center text-center">
                <h2>Tuna Niçoise 175 kr</h2>
                <span>
                  Sallad, Tonfisk, Tomater, Kokt ägg, Oliver, Kaprismajonnäs
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center text-center -rotate-2">
              <h1>- Barnmeny -</h1>
              <div className="flex flex-col items-center text-center">
                <h2>Ravioli 80 kr</h2>
                <span>Spenat, Ricotta, Parmesan</span>
                <span className="italic">(Allergi: Laktos, Mjölkprotein)</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="flex flex-col items-center text-center">
              <h1>Dryck</h1>
              <div className="flex flex-col items-center text-center">
                <h2>Coca-Cola (33cl) 30 kr</h2>
                <h2>Coca-Cola Zero (33cl) 30 kr</h2>
                <h2>Ramlösa Natuell (33cl) 30 kr</h2>
                <h2>Ramlösa Citrus (33cl) 30 kr</h2>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section
        id="front"
        className="relative flex justify-center aspect-[3/1] bg-no-repeat bg-contain bg-center"
        style={{
          backgroundImage:
            "url('https://woori-ab.github.io/website/front.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/50 z-10"></div>
      </section>
      <section id="location" className="flex justify-center py-12">
        <div className="container max-w-screen-lg grid md:grid-cols-2 xs:grid-cols-2 gap-4 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center text-center">
              <h1>Öppettider</h1>
              <span>Måndag: Stängt</span>
              <span>Tisdag: 11:00 - 20:00</span>
              <span>Onsdag: 11:00 - 20:00</span>
              <span>Torsdag: 11:00 - 20:00</span>
              <span>Fredag: 11:00 - 20:00</span>
              <span>Lördag: 11:00 - 20:00</span>
              <span>Söndag: Stängt</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="flex flex-col items-center text-center">
                <h1>Besök oss</h1>
                <span>Stagneliusvägen 47, 112 57, Stockholm</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <h1>Kontakt</h1>
                <span>Telefon: 08-656 66 75</span>
                <span>
                  Mail:{" "}
                  <a
                    href="mailto:wooristockholm@gmail.com"
                    className="hover:underline"
                  >
                    wooristockholm@gmail.com
                  </a>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
