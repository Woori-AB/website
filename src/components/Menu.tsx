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
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0, duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div
          id="korean-fried-chicken-menu"
          className="flex flex-col items-center text-center gap-2"
        >
          <h1>{intl.formatMessage({ id: "menu.korean-fried-chicken" })}</h1>
          <div className="flex flex-col items-center text-center">
            <h2>
              {intl.formatMessage({
                id: "menu.korean-fried-chicken.sweet-spicy.name",
              })}{" "}
              129/149 kr
            </h2>
            <span>
              {intl.formatMessage({
                id: "menu.korean-fried-chicken.sweet-spicy.ingredients",
              })}
            </span>
            <span className="italic">
              {intl.formatMessage({
                id: "menu.korean-fried-chicken.sweet-spicy.allergies",
              })}
            </span>
          </div>
          <div className="flex flex-col items-center text-center">
            <h2>
              {intl.formatMessage({
                id: "menu.korean-fried-chicken.honey-soy.name",
              })}{" "}
              129/149 kr
            </h2>
            <span>
              {intl.formatMessage({
                id: "menu.korean-fried-chicken.honey-soy.ingredients",
              })}
            </span>
            <span className="italic">
              {intl.formatMessage({
                id: "menu.korean-fried-chicken.honey-soy.allergies",
              })}
            </span>
          </div>
          <div className="flex flex-col items-center text-center">
            <h2>
              {intl.formatMessage({
                id: "menu.korean-fried-chicken.original.name",
              })}{" "}
              129/149 kr
            </h2>
            <span>
              {intl.formatMessage({
                id: "menu.korean-fried-chicken.original.ingredients",
              })}
            </span>
            <span className="italic">
              {intl.formatMessage({
                id: "menu.korean-fried-chicken.original.allergies",
              })}
            </span>
          </div>
          <div className="flex flex-col items-center text-center">
            <h2>
              {intl.formatMessage({
                id: "menu.korean-fried-chicken.kids-menu.name",
              })}{" "}
              99 kr
            </h2>
            <span>
              {intl.formatMessage({
                id: "menu.korean-fried-chicken.kids-menu.ingredients",
              })}
            </span>
            <span className="italic">
              {intl.formatMessage({
                id: "menu.korean-fried-chicken.kids-menu.allergies",
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
              (33cl) 25 kr
            </h2>
            <h2>
              {intl.formatMessage({
                id: "menu.drinks.coca-cola-zero.name",
              })}{" "}
              (33cl) 25 kr
            </h2>
            <h2>
              {intl.formatMessage({
                id: "menu.drinks.ramlosa-natural.name",
              })}{" "}
              (33cl) 25 kr
            </h2>
            <h2>
              {intl.formatMessage({
                id: "menu.drinks.ramlosa-citrus.name",
              })}{" "}
              (33cl) 25 kr
            </h2>
            <h2>
              {intl.formatMessage({
                id: "menu.drinks.fanta.name",
              })}{" "}
              (33cl) 25 kr
            </h2>
            <h2>
              {intl.formatMessage({
                id: "menu.drinks.red-bull-sugar-free.name",
              })}{" "}
              (25cl) 25 kr
            </h2>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
