"use client";

import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Instagram } from "lucide-react";

const foodImages = [
  "/pizza.png",
  "/pesto-pasta.png",
  "/truffle-pasta.png",
  "/tuna-salad.png",
];

const fadeVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % foodImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div data-testid="Home">
      <Head>
        {foodImages.map((foodImage) => (
          <link key={foodImage} rel="preload" href={foodImage} as="image" />
        ))}
        <link rel="preload" href="/path/to/image.ext" as="image" />
      </Head>
      <section
        id="header"
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
          <div
            className="bg-no-repeat bg-cover bg-center w-full h-full overflow-hidden"
            style={{
              backgroundImage: "url('/restaurant.jpg')",
            }}
          ></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/0 z-10"></div>
        <div className="absolute top-0 p-2 z-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="flex relative">
              <div className="relative">
                <span id="header-title-primary">WOORI</span>
              </div>
              <div className="relative top-6">
                <span id="header-title-secondary">우리</span>
              </div>
            </div>
            <div className="bg-black/40 hover:bg-black/70 text-white rounded-4xl px-4 py-2">
              <a
                className="flex gap-2"
                href="https://www.instagram.com/wooristockholm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram /> Follow us on Instagram
              </a>
            </div>
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
                grundat av två par i vänskap och kärlek. &quot;Woori&quot;
                betyder &quot;vi&quot; på koreanska, och här är alla en del av
                vår gemenskap.
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
          <AnimatePresence>
            <motion.img
              key={foodImages[index]}
              src={foodImages[index]}
              alt={`Slide ${index}`}
              className="absolute top-0 left-0 w-full h-full object-cover"
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 1 }}
            />
          </AnimatePresence>
        </div>
      </section>
      <section id="info" className="flex justify-center py-12 bg-black/3">
        <div className="container max-w-screen-lg">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center text-center">
              <h2>Varmt välkomna att äta hos oss eller för avhämtning</h2>
              <h2>För tillfället erbjuder vi ej utkörning, men Wolt är planerat</h2>
            </div>
          </motion.div>
        </div>
      </section>
      <section id="menu" className="flex justify-center py-12">
        <div className="container max-w-screen-lg grid md:grid-cols-2 xs:grid-cols-2 gap-4 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center text-center">
              <h1>Pizza</h1>
              <div className="flex flex-col items-center text-center">
                <h2>Vesuvio 129 kr</h2>
                <span>Tomatsås, Fior di latte, Skinka, Parmesan</span>
                <span className="italic">
                  (Allergi: Gluten, Laktos, Mjölkprotein)
                </span>
                <h2>Margherita 149 kr</h2>
                <span>
                  Tomatsås, Fior di latte, Burrata, Parmesan, Basilika
                </span>
                <span className="italic">
                  (Allergi: Gluten, Laktos, Mjölkprotein)
                </span>
              </div>
              <div className="flex flex-col items-center text-center">
                <h2>Pepperoni 149 kr</h2>
                <span>
                  Tomatsås, Fior di latte, Pepperoni, Parmesan, Basilika
                </span>
                <span className="italic">
                  (Allergi: Gluten, Laktos, Mjölkprotein)
                </span>
              </div>
              <div className="flex flex-col items-center text-center">
                <h2>Prosciutto 169 kr</h2>
                <span>
                  Tomatsås, Fior di latte, Prosciutto crudo, Pesto, Parmesan,
                  Ruccola, Pinjenötter
                </span>
                <span className="italic">
                  (Allergi: Gluten, Laktos, Mjölkprotein, Nötter)
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
                <h2>Pesto alla Genovese 139 kr</h2>
                <span>
                  Spaghetti, Basilika, Cashewnötter, Vitlök, Parmesan, Tomater,
                  Burrata
                </span>
                <span className="italic">
                  (Allergi: Laktos, Mjölkprotein, Nötter)
                </span>
              </div>
              <div className="flex flex-col items-center text-center">
                <h2>Ravioli 139 kr</h2>
                <span>Spenat, Ricotta, Parmesan</span>
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
                <h2>Tuna Niçoise 129 kr</h2>
                <span>Sallad, Tonfisk, Tomater, Oliver, Kaprismajonnäs</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center text-center">
              <h1>Barnmeny</h1>
              <div className="flex flex-col items-center text-center">
                <h2>Barnpizza 99 kr</h2>
                <span>Valfri variant från huvudmenyn</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <h2>Ravioli 60 kr</h2>
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
                <h2>Fanta (33cl) 30 kr</h2>
                <h2>Red Bull Sockerfri (25cl) 30 kr</h2>
              </div>
            </div>
          </motion.div>
        </div>
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
            <div className="flex flex-col items-center text-center">
              <h1>Öppettider</h1>
              <span>Måndag: Stängt</span>
              <span>Tisdag: 11:00 - 20:00</span>
              <span>Onsdag: 11:00 - 20:00</span>
              <span>Torsdag: 11:00 - 20:00</span>
              <span>Fredag: 11:00 - 20:00</span>
              <span>Lördag: 11:00 - 20:00</span>
              <span>Söndag: 11:00 - 17:00</span>
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
                    href="mailto:kontakt@wooristockholm.se"
                    className="hover:underline"
                  >
                    kontakt@wooristockholm.se
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
