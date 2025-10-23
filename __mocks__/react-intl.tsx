import React from "react";

export const useIntl = () => ({
  formatMessage: ({ id }: { id: string }) => `mocked-i18n-'${id}'`,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mockComponent = (mockName: string) => (props: any) =>
  React.createElement(`mocked-${mockName}`, {
    ...props,
  });

export const IntlProvider = mockComponent("IntlProvider");
