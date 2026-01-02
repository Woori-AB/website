import { cleanup, render } from "@testing-library/react";
import { vi } from "vitest";
import * as useDisplayLunchPricesQueryParam from "@/hooks/useDisplayLunchPricesQueryParam";

describe("Menu", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("matches snapshot(s) when useDisplayLunchPricesQueryParam returns falsy value", async () => {
    // Arrange
    const { default: Menu } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/components/Menu")
    >("@/components/Menu");

    const useDisplayLunchPricesQueryParamSpy = vi.spyOn(
      useDisplayLunchPricesQueryParam,
      "useDisplayLunchPricesQueryParam"
    );
    useDisplayLunchPricesQueryParamSpy.mockReturnValue(false);

    // Act
    const { container } = render(<Menu />);

    // Assert
    expect(container).toMatchSnapshot();
  });

  it("matches snapshot(s) when useDisplayLunchPricesQueryParam returns truthy value", async () => {
    // Arrange
    const { default: Menu } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/components/Menu")
    >("@/components/Menu");

    const useDisplayLunchPricesQueryParamSpy = vi.spyOn(
      useDisplayLunchPricesQueryParam,
      "useDisplayLunchPricesQueryParam"
    );
    useDisplayLunchPricesQueryParamSpy.mockReturnValue(true);

    // Act
    const { container } = render(<Menu />);

    // Assert
    expect(container).toMatchSnapshot();
  });
});
