"use client";

import { useIntl } from "react-intl";

export default function OpeningHours() {
  const intl = useIntl();

  return (
    <div id="open-hours" className="flex flex-col items-center text-center">
      <h1>{intl.formatMessage({ id: "opening-hours" })}</h1>
      <h2>{intl.formatMessage({ id: "opening-hours-subtitle" })}</h2>
      <span>
        {intl.formatMessage(
          { id: "opening-hours-close" },
          {
            day: intl.formatMessage({ id: "monday" }),
            close: intl.formatMessage({ id: "closed" }),
          }
        )}
      </span>
      <span>
        {intl.formatMessage(
          { id: "opening-hours-open" },
          {
            day: intl.formatMessage({ id: "tuesday" }),
            open: "11:00",
            close: "20:00",
          }
        )}
      </span>
      <span>
        {intl.formatMessage(
          { id: "opening-hours-open" },
          {
            day: intl.formatMessage({ id: "wednesday" }),
            open: "11:00",
            close: "20:00",
          }
        )}
      </span>
      <span>
        {intl.formatMessage(
          { id: "opening-hours-open" },
          {
            day: intl.formatMessage({ id: "thursday" }),
            open: "11:00",
            close: "20:00",
          }
        )}
      </span>
      <span>
        {intl.formatMessage(
          { id: "opening-hours-open" },
          {
            day: intl.formatMessage({ id: "friday" }),
            open: "11:00",
            close: "20:00",
          }
        )}
      </span>
      <span>
        {intl.formatMessage(
          { id: "opening-hours-open" },
          {
            day: intl.formatMessage({ id: "saturday" }),
            open: "11:00",
            close: "20:00",
          }
        )}
      </span>
      <span>
        {intl.formatMessage(
          { id: "opening-hours-close" },
          {
            day: intl.formatMessage({ id: "sunday" }),
            close: intl.formatMessage({ id: "closed" }),
          }
        )}
      </span>
    </div>
  );
}
