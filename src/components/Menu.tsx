"use client";

import { useIntl } from "react-intl";
import MenuCard from "@/components/MenuCard";
import MenuTitle from "@/components/MenuTitle";
import MenuItem from "@/components/MenuItem";

export default function Menu() {
  const intl = useIntl();

  return (
    <div className="container">
      <MenuCard id="full-menu">
        <MenuCard
          id="weekly-menu"
          className="rounded-sm border-black/20 bg-black/3 dark:bg-white/3"
        >
          <MenuTitle title={intl.formatMessage({ id: "menu.weekly" })} />
          <MenuItem
            title={intl.formatMessage({ id: "menu.weekly.weekly-1.name" })}
            ingredients={intl.formatMessage({
              id: "menu.weekly.weekly-1.ingredients",
            })}
            allergies={intl.formatMessage({
              id: "menu.weekly.weekly-1.allergies",
            })}
            price={intl.formatMessage({
              id: "menu.weekly.weekly-1.price",
            })}
          />
        </MenuCard>
        <MenuCard
          id="starters-menu"
          className="rounded-sm border-black/20 bg-black/3 dark:bg-white/3"
        >
          <MenuTitle title={intl.formatMessage({ id: "menu.starters" })} />
          <MenuItem
            title={intl.formatMessage({ id: "menu.starters.starter-1.name" })}
            ingredients={intl.formatMessage({
              id: "menu.starters.starter-1.ingredients",
            })}
            allergies={intl.formatMessage({
              id: "menu.starters.starter-1.allergies",
            })}
            price={intl.formatMessage({
              id: "menu.starters.starter-1.price",
            })}
          />
          <MenuItem
            title={intl.formatMessage({ id: "menu.starters.starter-2.name" })}
            ingredients={intl.formatMessage({
              id: "menu.starters.starter-2.ingredients",
            })}
            allergies={intl.formatMessage({
              id: "menu.starters.starter-2.allergies",
            })}
            price={intl.formatMessage({
              id: "menu.starters.starter-2.price",
            })}
          />
          <MenuItem
            title={intl.formatMessage({ id: "menu.starters.starter-3.name" })}
            ingredients={intl.formatMessage({
              id: "menu.starters.starter-3.ingredients",
            })}
            allergies={intl.formatMessage({
              id: "menu.starters.starter-3.allergies",
            })}
            price={intl.formatMessage({
              id: "menu.starters.starter-3.price",
            })}
          />
        </MenuCard>
        <MenuCard
          id="mains-menu"
          className="rounded-sm border-black/20 bg-black/3 dark:bg-white/3 grid-cols-1 md:grid-cols-2"
        >
          <MenuTitle
            title={intl.formatMessage({ id: "menu.mains" })}
            className="col-span-1 md:col-span-2"
          />
          <MenuCard id="bibimbap-menu">
            <MenuTitle title={intl.formatMessage({ id: "menu.bibimbap" })} />
            <MenuItem
              title={intl.formatMessage({
                id: "menu.bibimbap.beef-bibimbap.name",
              })}
              ingredients={intl.formatMessage({
                id: "menu.bibimbap.beef-bibimbap.ingredients",
              })}
              allergies={intl.formatMessage({
                id: "menu.bibimbap.beef-bibimbap.allergies",
              })}
              price={intl.formatMessage({
                id: "menu.bibimbap.beef-bibimbap.price",
              })}
            />
            <MenuItem
              title={intl.formatMessage({
                id: "menu.bibimbap.mushroom-bibimbap.name",
              })}
              ingredients={intl.formatMessage({
                id: "menu.bibimbap.mushroom-bibimbap.ingredients",
              })}
              allergies={intl.formatMessage({
                id: "menu.bibimbap.mushroom-bibimbap.allergies",
              })}
              price={intl.formatMessage({
                id: "menu.bibimbap.mushroom-bibimbap.price",
              })}
            />
          </MenuCard>
          <MenuCard id="kfc-menu">
            <MenuTitle
              title={intl.formatMessage({ id: "menu.korean-fried-chicken" })}
            />
            <MenuItem
              title={intl.formatMessage({
                id: "menu.korean-fried-chicken.woori-chicken-plate.name",
              })}
              ingredients={intl.formatMessage({
                id: "menu.korean-fried-chicken.woori-chicken-plate.ingredients",
              })}
              allergies={intl.formatMessage({
                id: "menu.korean-fried-chicken.woori-chicken-plate.allergies",
              })}
              price={intl.formatMessage({
                id: "menu.korean-fried-chicken.woori-chicken-plate.price",
              })}
            />
            <MenuItem
              title={intl.formatMessage({
                id: "menu.korean-fried-chicken.sweet-spicy.name",
              })}
              ingredients={intl.formatMessage({
                id: "menu.korean-fried-chicken.sweet-spicy.ingredients",
              })}
              allergies={intl.formatMessage({
                id: "menu.korean-fried-chicken.sweet-spicy.allergies",
              })}
              price={intl.formatMessage({
                id: "menu.korean-fried-chicken.sweet-spicy.price",
              })}
            />
            <MenuItem
              title={intl.formatMessage({
                id: "menu.korean-fried-chicken.honey-soy.name",
              })}
              ingredients={intl.formatMessage({
                id: "menu.korean-fried-chicken.honey-soy.ingredients",
              })}
              allergies={intl.formatMessage({
                id: "menu.korean-fried-chicken.honey-soy.allergies",
              })}
              price={intl.formatMessage({
                id: "menu.korean-fried-chicken.honey-soy.price",
              })}
            />
            <MenuItem
              title={intl.formatMessage({
                id: "menu.korean-fried-chicken.kids-menu.name",
              })}
              ingredients={intl.formatMessage({
                id: "menu.korean-fried-chicken.kids-menu.ingredients",
              })}
              allergies={intl.formatMessage({
                id: "menu.korean-fried-chicken.kids-menu.allergies",
              })}
              price={intl.formatMessage({
                id: "menu.korean-fried-chicken.kids-menu.price",
              })}
            />
          </MenuCard>
        </MenuCard>
        {/*<MenuCard
          id="desserts-menu"
          className="rounded-sm border-black/20 bg-black/3 dark:bg-white/3"
        >
          <MenuTitle title={intl.formatMessage({ id: "menu.desserts" })} />
          <MenuItem
            title={intl.formatMessage({ id: "menu.desserts.dessert-1.name" })}
            ingredients={intl.formatMessage({
              id: "menu.desserts.dessert-1.ingredients",
            })}
            allergies={intl.formatMessage({
              id: "menu.desserts.dessert-1.allergies",
            })}
            price={intl.formatMessage({
              id: "menu.desserts.dessert-1.price",
            })}
          />
          <MenuItem
            title={intl.formatMessage({ id: "menu.desserts.dessert-2.name" })}
            ingredients={intl.formatMessage({
              id: "menu.desserts.dessert-2.ingredients",
            })}
            allergies={intl.formatMessage({
              id: "menu.desserts.dessert-2.allergies",
            })}
            price={intl.formatMessage({
              id: "menu.desserts.dessert-2.price",
            })}
          />
          <MenuItem
            title={intl.formatMessage({ id: "menu.desserts.dessert-3.name" })}
            ingredients={intl.formatMessage({
              id: "menu.desserts.dessert-3.ingredients",
            })}
            allergies={intl.formatMessage({
              id: "menu.desserts.dessert-3.allergies",
            })}
            price={intl.formatMessage({
              id: "menu.desserts.dessert-3.price",
            })}
          />
        </MenuCard>*/}
        <MenuCard
          id="drinks-menu"
          className="rounded-sm border-black/20 bg-black/3 dark:bg-white/3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
        >
          <MenuTitle
            title={intl.formatMessage({ id: "menu.drinks" })}
            className="col-span-1 md:col-span-2 xl:col-span-3"
          />
          {/*<MenuCard id="beer-menu">
            <MenuTitle title={intl.formatMessage({ id: "menu.drinks.beer" })} />
            <MenuItem
              title={intl.formatMessage({
                id: "menu.drinks.beer.beer-1.name",
              })}
              abv={intl.formatMessage({ id: "menu.drinks.beer.beer-1.abv" })}
              amount={intl.formatMessage({
                id: "menu.drinks.beer.beer-1.amount",
              })}
              price={intl.formatMessage({
                id: "menu.drinks.beer.beer-1.price",
              })}
            />
            <MenuItem
              title={intl.formatMessage({
                id: "menu.drinks.beer.beer-2.name",
              })}
              abv={intl.formatMessage({ id: "menu.drinks.beer.beer-2.abv" })}
              amount={intl.formatMessage({
                id: "menu.drinks.beer.beer-2.amount",
              })}
              price={intl.formatMessage({
                id: "menu.drinks.beer.beer-2.price",
              })}
            />
            <MenuItem
              title={intl.formatMessage({
                id: "menu.drinks.beer.beer-3.name",
              })}
              abv={intl.formatMessage({ id: "menu.drinks.beer.beer-3.abv" })}
              amount={intl.formatMessage({
                id: "menu.drinks.beer.beer-3.amount",
              })}
              price={intl.formatMessage({
                id: "menu.drinks.beer.beer-3.price",
              })}
            />
            <MenuItem
              title={intl.formatMessage({
                id: "menu.drinks.beer.beer-4.name",
              })}
              abv={intl.formatMessage({ id: "menu.drinks.beer.beer-4.abv" })}
              amount={intl.formatMessage({
                id: "menu.drinks.beer.beer-4.amount",
              })}
              price={intl.formatMessage({
                id: "menu.drinks.beer.beer-4.price",
              })}
            />
          </MenuCard>
          <MenuCard id="soju-menu">
            <MenuTitle title={intl.formatMessage({ id: "menu.drinks.soju" })} />
            <MenuItem
              title={intl.formatMessage({
                id: "menu.drinks.soju.soju-1.name",
              })}
              abv={intl.formatMessage({ id: "menu.drinks.soju.soju-1.abv" })}
              amount={intl.formatMessage({
                id: "menu.drinks.soju.soju-1.amount",
              })}
              price={intl.formatMessage({
                id: "menu.drinks.soju.soju-1.price",
              })}
            />
            <MenuItem
              title={intl.formatMessage({
                id: "menu.drinks.soju.soju-2.name",
              })}
              abv={intl.formatMessage({ id: "menu.drinks.soju.soju-2.abv" })}
              amount={intl.formatMessage({
                id: "menu.drinks.soju.soju-2.amount",
              })}
              price={intl.formatMessage({
                id: "menu.drinks.soju.soju-2.price",
              })}
            />
            <MenuItem
              title={intl.formatMessage({
                id: "menu.drinks.soju.soju-3.name",
              })}
              abv={intl.formatMessage({ id: "menu.drinks.soju.soju-3.abv" })}
              amount={intl.formatMessage({
                id: "menu.drinks.soju.soju-3.amount",
              })}
              price={intl.formatMessage({
                id: "menu.drinks.soju.soju-3.price",
              })}
            />
          </MenuCard>*/}
          <MenuCard
            id="alcohol-free-menu"
            className="col-span-1 md:col-span-2 xl:col-span-3"
          >
            {/*<MenuTitle
              title={intl.formatMessage({ id: "menu.drinks.alcohol-free" })}
            />*/}
            <MenuItem
              title={intl.formatMessage({
                id: "menu.drinks.alcohol-free.coca-cola.name",
              })}
              amount={intl.formatMessage({
                id: "menu.drinks.alcohol-free.coca-cola.amount",
              })}
              price={intl.formatMessage({
                id: "menu.drinks.alcohol-free.coca-cola.price",
              })}
            />
            <MenuItem
              title={intl.formatMessage({
                id: "menu.drinks.alcohol-free.coca-cola-zero.name",
              })}
              amount={intl.formatMessage({
                id: "menu.drinks.alcohol-free.coca-cola-zero.amount",
              })}
              price={intl.formatMessage({
                id: "menu.drinks.alcohol-free.coca-cola-zero.price",
              })}
            />
            <MenuItem
              title={intl.formatMessage({
                id: "menu.drinks.alcohol-free.ramlosa-natural.name",
              })}
              amount={intl.formatMessage({
                id: "menu.drinks.alcohol-free.ramlosa-natural.amount",
              })}
              price={intl.formatMessage({
                id: "menu.drinks.alcohol-free.ramlosa-natural.price",
              })}
            />
            <MenuItem
              title={intl.formatMessage({
                id: "menu.drinks.alcohol-free.ramlosa-citrus.name",
              })}
              amount={intl.formatMessage({
                id: "menu.drinks.alcohol-free.ramlosa-citrus.amount",
              })}
              price={intl.formatMessage({
                id: "menu.drinks.alcohol-free.ramlosa-citrus.price",
              })}
            />
            <MenuItem
              title={intl.formatMessage({
                id: "menu.drinks.alcohol-free.fanta.name",
              })}
              amount={intl.formatMessage({
                id: "menu.drinks.alcohol-free.fanta.amount",
              })}
              price={intl.formatMessage({
                id: "menu.drinks.alcohol-free.fanta.price",
              })}
            />
            {/*<MenuItem
              title={intl.formatMessage({
                id: "menu.drinks.alcohol-free.kirin-ichiban-alcohol-free.name",
              })}
              amount={intl.formatMessage({
                id: "menu.drinks.alcohol-free.kirin-ichiban-alcohol-free.amount",
              })}
              price={intl.formatMessage({
                id: "menu.drinks.alcohol-free.kirin-ichiban-alcohol-free.price",
              })}
            />*/}
          </MenuCard>
        </MenuCard>
      </MenuCard>
    </div>
  );
}
