import { cleanup, render, fireEvent, within } from "@testing-library/react";
import { vi } from "vitest";

const windowOpenSpy = vi.spyOn(window, "open").mockImplementation(() => null);

describe("WoltButton", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("matches snapshot(s)", async () => {
    // Arrange
    const { default: WoltButton } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/components/WoltButton")
    >("@/components/WoltButton");

    // Act
    const { container } = render(<WoltButton />);

    // Assert
    expect(container).toMatchSnapshot();
  });

  it("invokes window.open when clicked", async () => {
    // Arrange
    const { default: WoltButton } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/components/WoltButton")
    >("@/components/WoltButton");

    // Act
    const { container } = render(<WoltButton />);
    const button = within(container).getByTestId("wolt-button");
    fireEvent.click(button);

    // Assert
    expect(windowOpenSpy).toHaveBeenCalledWith(
      "https://wolt.com/en/swe/stockholm/restaurant/woori",
      "_blank",
      "noopener,noreferrer"
    );
  });
});
