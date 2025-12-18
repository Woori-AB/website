import { cleanup, render, fireEvent, within } from "@testing-library/react";
import { vi } from "vitest";

const windowOpenSpy = vi.spyOn(window, "open").mockImplementation(() => null);

describe("TikTokButton", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("matches snapshot(s)", async () => {
    // Arrange
    const { default: TikTokButton } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/components/TikTokButton")
    >("@/components/TikTokButton");

    // Act
    const { container } = render(<TikTokButton />);

    // Assert
    expect(container).toMatchSnapshot();
  });

  it("invokes window.open when clicked", async () => {
    // Arrange
    const { default: TikTokButton } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/components/TikTokButton")
    >("@/components/TikTokButton");

    // Act
    const { container } = render(<TikTokButton />);
    const button = within(container).getByTestId("tiktok-button");
    fireEvent.click(button);

    // Assert
    expect(windowOpenSpy).toHaveBeenCalledWith(
      "https://www.tiktok.com/@wooristockholm",
      "_blank",
      "noopener,noreferrer"
    );
  });
});
