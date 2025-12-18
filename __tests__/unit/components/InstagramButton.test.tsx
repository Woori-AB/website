import { cleanup, render, fireEvent, within } from "@testing-library/react";
import { vi } from "vitest";

const windowOpenSpy = vi.spyOn(window, "open").mockImplementation(() => null);

describe("InstagramButton", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("matches snapshot(s)", async () => {
    // Arrange
    const { default: InstagramButton } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/components/InstagramButton")
    >("@/components/InstagramButton");

    // Act
    const { container } = render(<InstagramButton />);

    // Assert
    expect(container).toMatchSnapshot();
  });

  it("invokes window.open when clicked", async () => {
    // Arrange
    const { default: InstagramButton } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/components/InstagramButton")
    >("@/components/InstagramButton");

    // Act
    const { container } = render(<InstagramButton />);
    const button = within(container).getByTestId("instagram-button");
    fireEvent.click(button);

    // Assert
    expect(windowOpenSpy).toHaveBeenCalledWith(
      "https://www.instagram.com/wooristockholm",
      "_blank",
      "noopener,noreferrer"
    );
  });
});
