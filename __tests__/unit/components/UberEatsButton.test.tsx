import { cleanup, render } from "@testing-library/react";
import { vi } from "vitest";

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
});
