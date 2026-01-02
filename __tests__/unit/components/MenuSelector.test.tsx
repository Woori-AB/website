import { cleanup, screen, render, fireEvent } from "@testing-library/react";
import { vi } from "vitest";

const useRouterMock = {
  push: vi.fn(),
  replace: vi.fn(),
};

vi.mock("next/navigation", async () => {
  const actual = await vi.importActual("next/navigation");
  return {
    ...actual,
    useRouter: vi.fn(() => useRouterMock),
    useSearchParams: vi.fn(() => ({
      toString: () => "",
    })),
    usePathname: vi.fn(() => "/"),
  };
});

describe("MenuSelector", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("matches snapshot(s)", async () => {
    // Arrange
    const { default: MenuSelector } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/components/MenuSelector")
    >("@/components/MenuSelector");

    // Act
    const { container } = render(<MenuSelector />);

    // Assert
    expect(container).toMatchSnapshot();
  });

  it("pushes query parameter 'displayLunchMenuPrices' with value 'true' when the lunch prices button is clicked", async () => {
    // Arrange
    const { default: MenuSelector } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/components/MenuSelector")
    >("@/components/MenuSelector");

    // Act
    render(<MenuSelector />);

    const lunchPricesButton = screen.getByTestId("lunch-prices-button");
    fireEvent.click(lunchPricesButton);

    // Assert
    expect(useRouterMock.push).toHaveBeenCalledWith(
      "?displayLunchPrices=true",
      { scroll: false }
    );
  });

  it("pushes query parameter 'displayLunchMenuPrices' with value 'false' when the dinner prices button is clicked", async () => {
    // Arrange
    const { default: MenuSelector } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/components/MenuSelector")
    >("@/components/MenuSelector");

    // Act
    render(<MenuSelector />);

    const dinnerPricesButton = screen.getByTestId("dinner-prices-button");
    fireEvent.click(dinnerPricesButton);

    // Assert
    expect(useRouterMock.push).toHaveBeenCalledWith(
      "?displayLunchPrices=false",
      { scroll: false }
    );
  });
});
