import { cleanup, render } from "@testing-library/react";
import { vi } from "vitest";

describe("OpeningHours", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("matches snapshot(s)", async () => {
    // Arrange
    const { default: OpeningHours } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/components/OpeningHours")
    >("@/components/OpeningHours");

    // Act
    const { container } = render(<OpeningHours />);

    // Assert
    expect(container).toMatchSnapshot();
  });
});
