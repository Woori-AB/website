"use client";

import { motion } from "framer-motion";
import { useIntl } from "react-intl";

export default function Menu() {
  const intl = useIntl();

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
          <h1>{intl.formatMessage({ id: "menu.korean" })}</h1>
          <div className="flex flex-col items-center text-center">
            <h2>
              {intl.formatMessage({ id: "menu.korean.beef-bibimbap.name" })} 149
              kr
            </h2>
            <span>
              {intl.formatMessage({
                id: "menu.korean.beef-bibimbap.ingredients",
              })}
            </span>
            <span className="italic">
              {intl.formatMessage({
                id: "menu.korean.beef-bibimbap.allergies",
              })}
            </span>
          </div>
          <div className="flex flex-col items-center text-center">
            <h2>
              {intl.formatMessage({ id: "menu.korean.mushroom-bibimbap.name" })}{" "}
              139 kr
            </h2>
            <span>
              {intl.formatMessage({
                id: "menu.korean.mushroom-bibimbap.ingredients",
              })}
            </span>
            <span className="italic">
              {intl.formatMessage({
                id: "menu.korean.mushroom-bibimbap.allergies",
              })}
            </span>
          </div>
          <div className="flex flex-col items-center text-center">
            <h2>
              {intl.formatMessage({ id: "menu.korean.bulgogi.name" })} 159 kr
            </h2>
            <span>
              {intl.formatMessage({
                id: "menu.korean.bulgogi.ingredients",
              })}
            </span>
            <span className="italic">
              {intl.formatMessage({
                id: "menu.korean.bulgogi.allergies",
              })}
            </span>
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
          <h1>{intl.formatMessage({ id: "menu.pizza" })}</h1>
          <div className="flex flex-col items-center text-center">
            <h2>
              {intl.formatMessage({
                id: "menu.pizza.vesuvio.name",
              })}{" "}
              129 kr
            </h2>
            <span>
              {intl.formatMessage({
                id: "menu.pizza.vesuvio.ingredients",
              })}
            </span>
            <span className="italic">
              {intl.formatMessage({
                id: "menu.pizza.vesuvio.allergies",
              })}
            </span>
            <h2>
              {intl.formatMessage({
                id: "menu.pizza.margherita.name",
              })}{" "}
              149 kr
            </h2>
            <span>
              {intl.formatMessage({
                id: "menu.pizza.margherita.ingredients",
              })}
            </span>
            <span className="italic">
              {intl.formatMessage({
                id: "menu.pizza.margherita.allergies",
              })}
            </span>
          </div>
          <div className="flex flex-col items-center text-center">
            <h2>
              {intl.formatMessage({
                id: "menu.pizza.pepperoni.name",
              })}{" "}
              149 kr
            </h2>
            <span>
              {intl.formatMessage({
                id: "menu.pizza.pepperoni.ingredients",
              })}
            </span>
            <span className="italic">
              {intl.formatMessage({
                id: "menu.pizza.pepperoni.allergies",
              })}
            </span>
          </div>
          <div className="flex flex-col items-center text-center">
            <h2>
              {intl.formatMessage({
                id: "menu.pizza.prosciutto.name",
              })}{" "}
              169 kr
            </h2>
            <span>
              {intl.formatMessage({
                id: "menu.pizza.prosciutto.ingredients",
              })}
            </span>
            <span className="italic">
              {intl.formatMessage({
                id: "menu.pizza.prosciutto.allergies",
              })}
            </span>
          </div>
          <div className="flex flex-col items-center text-center">
            <h2>
              {intl.formatMessage({
                id: "menu.pizza.children.name",
              })}{" "}
              99 kr
            </h2>
            <span>
              {intl.formatMessage({
                id: "menu.pizza.children.ingredients",
              })}
            </span>
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
          <h1>{intl.formatMessage({ id: "menu.drinks" })}</h1>
          <div className="flex flex-col items-center text-center">
            <h2>
              {intl.formatMessage({
                id: "menu.drinks.coca-cola.name",
              })}{" "}
              (33cl) 30 kr
            </h2>
            <h2>
              {intl.formatMessage({
                id: "menu.drinks.coca-cola-zero.name",
              })}{" "}
              (33cl) 30 kr
            </h2>
            <h2>
              {intl.formatMessage({
                id: "menu.drinks.ramlosa-natural.name",
              })}{" "}
              (33cl) 30 kr
            </h2>
            <h2>
              {intl.formatMessage({
                id: "menu.drinks.ramlosa-citrus.name",
              })}{" "}
              (33cl) 30 kr
            </h2>
            <h2>
              {intl.formatMessage({
                id: "menu.drinks.fanta.name",
              })}{" "}
              (33cl) 30 kr
            </h2>
            <h2>
              {intl.formatMessage({
                id: "menu.drinks.red-bull-sugar-free.name",
              })}{" "}
              (25cl) 30 kr
            </h2>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
