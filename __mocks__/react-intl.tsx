export const useIntl = () => ({
  formatMessage: ({ id }: { id: string }) => `mocked-i18n-'${id}'`,
});
