"use client";

import { useIntl } from "react-intl";

export default function OpeningHours() {
  const intl = useIntl();

  return (
    <div id="open-hours" className="flex flex-col items-center text-center">
      <h1>{intl.formatMessage({ id: "opening-hours" })}</h1>
      <span>
        {intl.formatMessage({ id: "monday" })}:{" "}
        {intl.formatMessage({ id: "closed" })}
      </span>
      <span>{intl.formatMessage({ id: "tuesday" })}: 11:00 - 20:00</span>
      <span>{intl.formatMessage({ id: "wednesday" })}: 11:00 - 20:00</span>
      <span>{intl.formatMessage({ id: "thursday" })}: 11:00 - 20:00</span>
      <span>{intl.formatMessage({ id: "friday" })}: 11:00 - 20:00</span>
      <span>{intl.formatMessage({ id: "saturday" })}: 11:00 - 20:00</span>
      <span>
        {intl.formatMessage({ id: "sunday" })}:{" "}
        {intl.formatMessage({ id: "closed" })}
      </span>
    </div>
  );
}
