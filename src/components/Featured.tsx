"use client";

import { useIntl } from "react-intl";

export default function Featured() {
  const intl = useIntl();

  return (
    <div className="container mb-6 px-4 max-w-5xl">
      <article
        className="flex flex-col rounded-2xl text-white"
        style={{
          backgroundImage: "url('/woori-table.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="relative flex flex-col justify-center p-2 rounded-2xl py-6 px-8"
          style={{
            background: "linear-gradient(150deg, rgba(0,0,0,1), rgba(0,0,0,0))",
          }}
        >
          <span className="text-xl font-bold font-gloryLight">
            {intl.formatMessage({ id: "menu.weekly" })}
          </span>
          <span className="text-3xl font-bold font-gloryLight mb-3">
            {intl.formatMessage({ id: "menu.weekly.weekly-1.name" })}
          </span>
          <span className="text-xl font-gloryLight max-w-3xl mb-3">
            {intl.formatMessage({ id: "menu.weekly.weekly-1.ingredients" })}
          </span>
          <span className="text-xl font-gloryLight max-w-3xl mb-6">
            {intl.formatMessage({ id: "menu.weekly.weekly-1.allergens" })}
          </span>
          <div className="flex text-2xl font-bold">
            <div className="bg-black/40 px-6 py-2 rounded-2xl">
              <span>
                {intl.formatMessage({ id: "menu.weekly.weekly-1.price" })}
              </span>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
