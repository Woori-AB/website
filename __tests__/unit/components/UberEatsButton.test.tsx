import { cleanup, render, fireEvent, within } from "@testing-library/react";
import { vi } from "vitest";

const windowOpenSpy = vi.spyOn(window, "open").mockImplementation(() => null);

describe("UberEatsButton", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("matches snapshot(s)", async () => {
    // Arrange
    const { default: UberEatsButton } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/components/UberEatsButton")
    >("@/components/UberEatsButton");

    // Act
    const { container } = render(<UberEatsButton />);

    // Assert
    expect(container).toMatchSnapshot();
  });

  it("invokes window.open when clicked", async () => {
    // Arrange
    const { default: UberEatsButton } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/components/UberEatsButton")
    >("@/components/UberEatsButton");

    // Act
    const { container } = render(<UberEatsButton />);
    const button = within(container).getByTestId("ubereats-button");
    fireEvent.click(button);

    // Assert
    expect(windowOpenSpy).toHaveBeenCalledWith(
      "https://www.ubereats.com/se-en/store/woori/2t8azOX1WQW7Fd--w0qouw",
      "_blank",
      "noopener,noreferrer"
    );
  });
});
