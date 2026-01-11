import sv from "@/locales/sv.json";
import en from "@/locales/en.json";
import ko from "@/locales/ko.json";

describe("locales", () => {
  test("ensure all locales have the same number of entries", () => {
    // Arrange
    const locales = [sv, en, ko];
    const keys = Object.keys(locales[0]).sort();

    // Assert
    expect(keys.length).toBeGreaterThan(0);
    locales.forEach((locale) => {
      expect(Object.keys(locale).sort()).toEqual(keys);
    });
  });

  test("ensure that keys ending with '.price' are equal across all locales", () => {
    // Arrange
    const locales: Record<string, unknown>[] = [sv, en, ko];

    const keys = Object.keys(locales[0])
      .sort()
      .filter((key) => key.endsWith(".price"));

    // Assert
    expect(keys.length).toBeGreaterThan(0);
    keys.forEach((key) => {
      locales.forEach((locale) => {
        expect(locale[key]).toEqual(locales[0][key]);
      });
    });
  });

  test("ensure that keys that have an empty string value are equal across all locales", () => {
    // Arrange
    const locales: Record<string, unknown>[] = [sv, en, ko];
    const keys = Object.keys(locales[0]).sort();

    // Assert
    expect(keys.length).toBeGreaterThan(0);
    keys.forEach((key) => {
      const isKeyEmptyInAnyLocale = locales.some(
        (locale) => locale[key] === ""
      );
      if (isKeyEmptyInAnyLocale) {
        for (const locale of locales) {
          expect(locale[key]).toBe("");
        }
      }
    });
  });
});
