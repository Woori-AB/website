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
      // get: vi.fn(),
    })),
    usePathname: vi.fn(() => "/foo/bar/baz"),
  };
});

describe("LanguageSwitcher", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("matches snapshot(s)", async () => {
    // Arrange
    const { default: LanguageSwitcher } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/components/LanguageSwitcher")
    >("@/components/LanguageSwitcher");

    // Act
    const { container } = render(<LanguageSwitcher />);

    // Assert
    expect(container).toMatchSnapshot();
  });

  it("invokes router.push() puts '/sv' at the beginning of the path when the Swedish flag is clicked", async () => {
    // Arrange
    const { default: LanguageSwitcher } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/components/LanguageSwitcher")
    >("@/components/LanguageSwitcher");

    // Act
    render(<LanguageSwitcher />);
    const flag = screen.getByAltText("Svenska");
    fireEvent.click(flag);

    // Assert
    expect(useRouterMock.push).toHaveBeenCalledWith("/sv/bar/baz");
  });

  it("invokes router.push() puts '/en' at the beginning of the path when the Swedish flag is clicked", async () => {
    // Arrange
    const { default: LanguageSwitcher } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/components/LanguageSwitcher")
    >("@/components/LanguageSwitcher");

    // Act
    render(<LanguageSwitcher />);
    const flag = screen.getByAltText("English");
    fireEvent.click(flag);

    // Assert
    expect(useRouterMock.push).toHaveBeenCalledWith("/en/bar/baz");
  });

  it("invokes router.push() puts '/ko' at the beginning of the path when the Swedish flag is clicked", async () => {
    // Arrange
    const { default: LanguageSwitcher } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/components/LanguageSwitcher")
    >("@/components/LanguageSwitcher");

    // Act
    render(<LanguageSwitcher />);
    const flag = screen.getByAltText("한국어");
    fireEvent.click(flag);

    // Assert
    expect(useRouterMock.push).toHaveBeenCalledWith("/ko/bar/baz");
  });
});
