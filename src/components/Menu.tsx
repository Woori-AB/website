"use client";

import { useIntl } from "react-intl";

export default function Menu() {
  const intl = useIntl();

  return (
    <div className="container max-w-5xl grid md:grid-cols-2 xs:grid-cols-2 gap-8 items-stretch">
      <div
        id="korean-menu"
        className="flex flex-col items-center text-center gap-8"
      >
        <h1>{intl.formatMessage({ id: "menu.bibimbap" })}</h1>
        <div className="flex flex-col items-center text-center">
          <h2>
            {intl.formatMessage({ id: "menu.bibimbap.beef-bibimbap.name" })}{" "}
            149kr
          </h2>
          <span>
            {intl.formatMessage({
              id: "menu.bibimbap.beef-bibimbap.ingredients",
            })}
          </span>
          <span className="italic">
            {intl.formatMessage({
              id: "menu.bibimbap.beef-bibimbap.allergies",
            })}
          </span>
        </div>
        <div className="flex flex-col items-center text-center">
          <h2>
            {intl.formatMessage({
              id: "menu.bibimbap.mushroom-bibimbap.name",
            })}{" "}
            139kr
          </h2>
          <span>
            {intl.formatMessage({
              id: "menu.bibimbap.mushroom-bibimbap.ingredients",
            })}
          </span>
          <span className="italic">
            {intl.formatMessage({
              id: "menu.bibimbap.mushroom-bibimbap.allergies",
            })}
          </span>
        </div>
      </div>
      <div
        id="korean-fried-chicken-menu"
        className="flex flex-col items-center text-center gap-8"
      >
        <h1>{intl.formatMessage({ id: "menu.korean-fried-chicken" })}</h1>
        <div className="flex flex-col items-center text-center">
          <h2>
            {intl.formatMessage({
              id: "menu.korean-fried-chicken.sweet-spicy.name",
            })}{" "}
            129kr<span className="text-sm">(150g)</span> 149kr
            <span className="text-sm">(200g)</span>
          </h2>
          <h2>
            {intl.formatMessage({
              id: "menu.korean-fried-chicken.sweet-spicy.extra-info",
            })}
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
            129kr<span className="text-sm">(150g)</span> 149kr
            <span className="text-sm">(200g)</span>
          </h2>
          <h2>
            {intl.formatMessage({
              id: "menu.korean-fried-chicken.honey-soy.extra-info",
            })}
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
            129kr<span className="text-sm">(150g)</span> 149kr
            <span className="text-sm">(200g)</span>
          </h2>
          <h2>
            {intl.formatMessage({
              id: "menu.korean-fried-chicken.original.extra-info",
            })}
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
            99kr
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
      <div
        id="drink-menu"
        className="flex flex-col items-center text-center gap-2 md:col-span-2"
      >
        <h1>{intl.formatMessage({ id: "menu.drinks" })}</h1>
        <div className="flex flex-col items-center text-center">
          <h2>
            {intl.formatMessage({
              id: "menu.drinks.coca-cola.name",
            })}{" "}
            (33cl) 25kr
          </h2>
          <h2>
            {intl.formatMessage({
              id: "menu.drinks.coca-cola-zero.name",
            })}{" "}
            (33cl) 25kr
          </h2>
          <h2>
            {intl.formatMessage({
              id: "menu.drinks.ramlosa-natural.name",
            })}{" "}
            (33cl) 25kr
          </h2>
          <h2>
            {intl.formatMessage({
              id: "menu.drinks.ramlosa-citrus.name",
            })}{" "}
            (33cl) 25kr
          </h2>
          <h2>
            {intl.formatMessage({
              id: "menu.drinks.fanta.name",
            })}{" "}
            (33cl) 25kr
          </h2>
        </div>
      </div>
    </div>
  );
}
