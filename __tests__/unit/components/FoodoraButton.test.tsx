import { cleanup, render, fireEvent, within } from "@testing-library/react";
import { vi } from "vitest";

const windowOpenSpy = vi.spyOn(window, "open").mockImplementation(() => null);

describe("FoodoraButton", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("matches snapshot(s)", async () => {
    // Arrange
    const { default: FoodoraButton } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/components/FoodoraButton")
    >("@/components/FoodoraButton");

    // Act
    const { container } = render(<FoodoraButton />);

    // Assert
    expect(container).toMatchSnapshot();
  });

  it("invokes window.open when clicked", async () => {
    // Arrange
    const { default: FoodoraButton } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/components/FoodoraButton")
    >("@/components/FoodoraButton");

    // Act
    const { container } = render(<FoodoraButton />);
    const button = within(container).getByTestId("foodora-button");
    fireEvent.click(button);

    // Assert
    expect(windowOpenSpy).toHaveBeenCalledWith(
      "https://www.foodora.se/en/restaurant/lzn4/woori",
      "_blank",
      "noopener,noreferrer"
    );
  });
});
