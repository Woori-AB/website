import { cleanup, render, fireEvent, within } from "@testing-library/react";
import { vi } from "vitest";

const windowOpenSpy = vi.spyOn(window, "open").mockImplementation(() => null);

describe("FacebookButton", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("matches snapshot(s)", async () => {
    // Arrange
    const { default: FacebookButton } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/components/FacebookButton")
    >("@/components/FacebookButton");

    // Act
    const { container } = render(<FacebookButton />);

    // Assert
    expect(container).toMatchSnapshot();
  });

  it("invokes window.open when clicked", async () => {
    // Arrange
    const { default: FacebookButton } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/components/FacebookButton")
    >("@/components/FacebookButton");

    // Act
    const { container } = render(<FacebookButton />);
    const button = within(container).getByTestId("facebook-button");
    fireEvent.click(button);

    // Assert
    expect(windowOpenSpy).toHaveBeenCalledWith(
      "https://www.facebook.com/people/Woori/61577166415207",
      "_blank",
      "noopener,noreferrer"
    );
  });
});
