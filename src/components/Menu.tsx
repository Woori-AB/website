"use client";

import type { ReactNode } from "react";
import { useIntl } from "react-intl";

function MenuItemName({ i18n }: { i18n: string }) {
  const intl = useIntl();
  return (
    <span className="flex w-full justify-center text-lg font-bold">
      {intl.formatMessage({ id: i18n })}
    </span>
  );
}

function MenuItemPrice({ i18n }: { i18n: string }) {
  const intl = useIntl();
  return (
    <span className="flex w-full justify-center">
      {intl.formatMessage({ id: i18n })}
    </span>
  );
}

function MenuItemIngredients({ i18n }: { i18n: string }) {
  const intl = useIntl();
  return (
    <span className="flex w-full justify-center text-justify [hyphens:auto] [text-align-last:center] px-4">
      {intl.formatMessage({ id: i18n })}
    </span>
  );
}

function MenuItemExtraInfo({ i18n }: { i18n: string }) {
  const intl = useIntl();
  return (
    <span className="flex w-full justify-center text-justify [hyphens:auto] [text-align-last:center] px-4">
      {intl.formatMessage({ id: i18n })}
    </span>
  );
}

function MenuItemAllergens({ i18n }: { i18n: string }) {
  const intl = useIntl();
  return (
    <span className="flex w-full justify-center italic text-[color-mix(in_srgb,currentColor_50%,transparent)]">
      {intl.formatMessage({ id: i18n })}
    </span>
  );
}

function MenuTitle({ i18n }: { i18n: string }) {
  const intl = useIntl();
  return (
    <h1 className="flex justify-center mb-2">
      {intl.formatMessage({ id: i18n })}
    </h1>
  );
}

function MenuItemCategory({ i18n }: { i18n: string }) {
  const intl = useIntl();
  return (
    <h2 className="flex justify-center mt-2 mb-2">
      {intl.formatMessage({ id: i18n })}
    </h2>
  );
}

function MenuItemSubcategory({ i18n }: { i18n: string }) {
  const intl = useIntl();
  return (
    <h3 className="flex justify-center font-bold">
      {intl.formatMessage({ id: i18n })}
    </h3>
  );
}

function MenuItem({ children }: { children: ReactNode }) {
  return <div className="flex flex-col w-full">{children}</div>;
}

function MenuRow({ children, cols }: { children: ReactNode; cols: number }) {
  return (
    <div
      className={`grid grid-cols-1 gap-x-6 px-4 justify-items-center md:grid-cols-${cols}`}
    >
      {children}
    </div>
  );
}

function MenuColumn({ children }: { children: ReactNode }) {
  return <div className="flex flex-col gap-2 w-full pt-2 pb-4">{children}</div>;
}

function MenuSheet({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap w-full py-2 bg-black/3 dark:bg-white/3">
      {children}
    </div>
  );
}

export type Props = {
  className?: string;
};

export default function Menu({ className: cn }: Props) {
  return (
    <div id="menu" className={`flex flex-col px-4 gap-4 text-center ${cn}`}>
      <MenuSheet>
        <MenuTitle i18n={"menu.weekly"} />
        <MenuRow cols={1}>
          <MenuColumn>
            <MenuItem>
              <MenuItemName i18n="menu.weekly.weekly-1.name" />
              <MenuItemPrice i18n="menu.weekly.weekly-1.price" />
              <MenuItemIngredients i18n="menu.weekly.weekly-1.ingredients" />
              <MenuItemAllergens i18n="menu.weekly.weekly-1.allergens" />
            </MenuItem>
          </MenuColumn>
        </MenuRow>
      </MenuSheet>
      <MenuSheet>
        <MenuTitle i18n={"menu.starters"} />
        <MenuRow cols={1}>
          <MenuColumn>
            <MenuItem>
              <MenuItemName i18n="menu.starters.starter-1.name" />
              <MenuItemPrice i18n="menu.starters.starter-1.price" />
              <MenuItemIngredients i18n="menu.starters.starter-1.ingredients" />
              <MenuItemAllergens i18n="menu.starters.starter-1.allergens" />
            </MenuItem>
          </MenuColumn>
        </MenuRow>
      </MenuSheet>
      <MenuSheet>
        <MenuTitle i18n={"menu.mains"} />
        <MenuRow cols={2}>
          <MenuColumn>
            <MenuItemCategory i18n="menu.mains.bibimbap" />
            <MenuItem>
              <MenuItemName i18n="menu.mains.bibimbap-1.name" />
              <MenuItemPrice i18n="menu.mains.bibimbap-1.price" />
              <MenuItemIngredients i18n="menu.mains.bibimbap-1.ingredients" />
              <MenuItemAllergens i18n="menu.mains.bibimbap-1.allergens" />
            </MenuItem>
            <MenuItem>
              <MenuItemName i18n="menu.mains.bibimbap-2.name" />
              <MenuItemPrice i18n="menu.mains.bibimbap-2.price" />
              <MenuItemIngredients i18n="menu.mains.bibimbap-2.ingredients" />
              <MenuItemAllergens i18n="menu.mains.bibimbap-2.allergens" />
            </MenuItem>
          </MenuColumn>
          <MenuColumn>
            <MenuItemCategory i18n="menu.mains.korean-fried-chicken" />
            <MenuItem>
              <MenuItemName i18n="menu.mains.korean-fried-chicken-1.name" />
              <MenuItemPrice i18n="menu.mains.korean-fried-chicken-1.price" />
              <MenuItemExtraInfo i18n="menu.mains.korean-fried-chicken-1.extra-info" />
              <MenuItemIngredients i18n="menu.mains.korean-fried-chicken-1.ingredients" />
              <MenuItemAllergens i18n="menu.mains.korean-fried-chicken-1.allergens" />
            </MenuItem>
            <MenuItem>
              <MenuItemName i18n="menu.mains.korean-fried-chicken-2.name" />
              <MenuItemPrice i18n="menu.mains.korean-fried-chicken-2.price" />
              <MenuItemIngredients i18n="menu.mains.korean-fried-chicken-2.ingredients" />
              <MenuItemAllergens i18n="menu.mains.korean-fried-chicken-2.allergens" />
            </MenuItem>
            <MenuItem>
              <MenuItemName i18n="menu.mains.korean-fried-chicken-3.name" />
              <MenuItemPrice i18n="menu.mains.korean-fried-chicken-3.price" />
              <MenuItemIngredients i18n="menu.mains.korean-fried-chicken-3.ingredients" />
              <MenuItemAllergens i18n="menu.mains.korean-fried-chicken-3.allergens" />
            </MenuItem>
          </MenuColumn>
        </MenuRow>
      </MenuSheet>
      <MenuSheet>
        <MenuTitle i18n={"menu.desserts"} />
        <MenuRow cols={2}>
          <MenuColumn>
            <MenuItem>
              <MenuItemName i18n="menu.desserts.dessert-1.name" />
              <MenuItemPrice i18n="menu.desserts.dessert-1.price" />
              <MenuItemIngredients i18n="menu.desserts.dessert-1.ingredients" />
              <MenuItemAllergens i18n="menu.desserts.dessert-1.allergens" />
            </MenuItem>
          </MenuColumn>
          <MenuColumn>
            <MenuItem>
              <MenuItemName i18n="menu.desserts.dessert-2.name" />
              <MenuItemPrice i18n="menu.desserts.dessert-2.price" />
              <MenuItemIngredients i18n="menu.desserts.dessert-2.ingredients" />
              <MenuItemAllergens i18n="menu.desserts.dessert-2.allergens" />
            </MenuItem>
          </MenuColumn>
        </MenuRow>
      </MenuSheet>
      <MenuSheet>
        <MenuTitle i18n={"menu.drinks"} />
        <MenuRow cols={2}>
          <MenuColumn>
            <MenuItem>
              <MenuItemCategory i18n={"menu.drinks.beer"} />
              <MenuItemName i18n="menu.drinks.beer.beer-3.name" />
              <MenuItemPrice i18n="menu.drinks.beer.beer-3.price" />
            </MenuItem>
            <MenuItem>
              <MenuItemName i18n="menu.drinks.beer.beer-4.name" />
              <MenuItemPrice i18n="menu.drinks.beer.beer-4.price" />
            </MenuItem>
          </MenuColumn>
          <MenuColumn>
            <MenuItem>
              <MenuItemCategory i18n={"menu.drinks.soju"} />
              <MenuItemName i18n="menu.drinks.soju.soju-1.name" />
              <MenuItemPrice i18n="menu.drinks.soju.soju-1.price" />
            </MenuItem>
            <MenuItem>
              <MenuItemName i18n="menu.drinks.soju.soju-2.name" />
              <MenuItemPrice i18n="menu.drinks.soju.soju-2.price" />
            </MenuItem>
            <MenuItem>
              <MenuItemName i18n="menu.drinks.soju.soju-3.name" />
              <MenuItemPrice i18n="menu.drinks.soju.soju-3.price" />
            </MenuItem>
          </MenuColumn>
          <MenuColumn>
            <MenuItem>
              <MenuItemCategory i18n={"menu.drinks.wine"} />
              <MenuItemSubcategory i18n={"menu.drinks.wine.red"} />
            </MenuItem>
            <MenuItem>
              <MenuItemName i18n="menu.drinks.wine.red-1.name" />
              <MenuItemPrice i18n="menu.drinks.wine.red-1.price" />
            </MenuItem>
            <MenuItem>
              <MenuItemName i18n="menu.drinks.wine.red-2.name" />
              <MenuItemPrice i18n="menu.drinks.wine.red-2.price" />
            </MenuItem>
            <MenuItem>
              <MenuItemSubcategory i18n={"menu.drinks.wine.white"} />
              <MenuItemName i18n="menu.drinks.wine.white-1.name" />
              <MenuItemPrice i18n="menu.drinks.wine.white-1.price" />
            </MenuItem>
            <MenuItem>
              <MenuItemName i18n="menu.drinks.wine.white-2.name" />
              <MenuItemPrice i18n="menu.drinks.wine.white-2.price" />
            </MenuItem>
            <MenuItem>
              <MenuItemSubcategory i18n={"menu.drinks.wine.orange"} />
              <MenuItemName i18n="menu.drinks.wine.orange-1.name" />
              <MenuItemPrice i18n="menu.drinks.wine.orange-1.price" />
            </MenuItem>
            <MenuItem>
              <MenuItemSubcategory i18n={"menu.drinks.wine.rose"} />
              <MenuItemName i18n="menu.drinks.wine.rose-1.name" />
              <MenuItemPrice i18n="menu.drinks.wine.rose-1.price" />
            </MenuItem>
          </MenuColumn>
          <MenuColumn>
            <MenuItem>
              <MenuItemCategory i18n={"menu.drinks.alcohol-free"} />
              <MenuItemName i18n="menu.drinks.alcohol-free-1.name" />
              <MenuItemName i18n="menu.drinks.alcohol-free-2.name" />
              <MenuItemName i18n="menu.drinks.alcohol-free-3.name" />
              <MenuItemName i18n="menu.drinks.alcohol-free-4.name" />
              <MenuItemName i18n="menu.drinks.alcohol-free-5.name" />
              <MenuItemPrice i18n="menu.drinks.alcohol-free-5.price" />
            </MenuItem>
            <MenuItem>
              <MenuItemName i18n="menu.drinks.alcohol-free-6.name" />
              <MenuItemPrice i18n="menu.drinks.alcohol-free-6.price" />
            </MenuItem>
            <MenuItem>
              <MenuItemName i18n="menu.drinks.alcohol-free-7.name" />
              <MenuItemName i18n="menu.drinks.alcohol-free-8.name" />
              <MenuItemPrice i18n="menu.drinks.alcohol-free-8.price" />
            </MenuItem>
          </MenuColumn>
        </MenuRow>
      </MenuSheet>
    </div>
  );
}
