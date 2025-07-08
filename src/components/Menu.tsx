"use client";

import { motion } from "framer-motion";

export default function Menu() {
  return (
    <div className="container max-w-screen-lg grid md:grid-cols-2 xs:grid-cols-2 gap-4 items-stretch">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div
          id="korean-menu"
          className="flex flex-col items-center text-center gap-2"
        >
          <h1>Koreanskt</h1>
          <div className="flex flex-col items-center text-center">
            <h2>Biff bibimbap 149 kr</h2>
            <span>
              Ris, Entrecôte, Böngroddar, Stekta champinjoner, Stekt gul lök,
              Stekta morötter, Gurka, Sunny side up ägg, Gochujangsås,
              Sesamolja, Sesamfrö
            </span>
            <span className="italic">(Allergi: Soja, Gluten, Sesam)</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <h2>Svamp bibimbap 139 kr</h2>
            <span>
              Ris, Böngroddar, Stekta champinjoner, Stekt gul lök, Stekta
              morötter, Gurka, Sunny side up ägg, Gochujangsås, Sesamolja,
              Sesamfrö
            </span>
            <span className="italic">(Allergi: Soja, Gluten, Sesam)</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <h2>Bulgogi 159 kr</h2>
            <span>
              Ris, Entrecôte, Champinjoner, Stekt gul lök, Vårlök, Gräslök,
              Sesamolja, Sesamfrö
            </span>
            <span className="italic">(Allergi: Soja, Gluten, Sesam)</span>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0, duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div
          id="pizza-menu"
          className="flex flex-col items-center text-center gap-2"
        >
          <h1>Pizza</h1>
          <div className="flex flex-col items-center text-center">
            <h2>Vesuvio 129 kr</h2>
            <span>Tomatsås, Fior di latte, Skinka, Parmesan</span>
            <span className="italic">
              (Allergi: Gluten, Laktos, Mjölkprotein)
            </span>
            <h2>Margherita 149 kr</h2>
            <span>Tomatsås, Fior di latte, Burrata, Parmesan, Basilika</span>
            <span className="italic">
              (Allergi: Gluten, Laktos, Mjölkprotein)
            </span>
          </div>
          <div className="flex flex-col items-center text-center">
            <h2>Pepperoni 149 kr</h2>
            <span>Tomatsås, Fior di latte, Pepperoni, Parmesan, Basilika</span>
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
          <div className="flex flex-col items-center text-center">
            <h2>Barnpizza 99 kr</h2>
            <span>Valfri variant från menyn</span>
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
        <div
          id="drink-menu"
          className="flex flex-col items-center text-center gap-2"
        >
          <h1>Dryck</h1>
          <div className="flex flex-col items-center text-center">
            <h2>Coca-Cola (33cl) 30 kr</h2>
            <h2>Coca-Cola Zero (33cl) 30 kr</h2>
            <h2>Ramlösa Naturell (33cl) 30 kr</h2>
            <h2>Ramlösa Citrus (33cl) 30 kr</h2>
            <h2>Fanta (33cl) 30 kr</h2>
            <h2>Red Bull Sockerfri (25cl) 30 kr</h2>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
