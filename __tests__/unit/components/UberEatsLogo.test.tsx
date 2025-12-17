import { cleanup, render } from "@testing-library/react";
import { vi } from "vitest";

describe("UberEatsLogo", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("matches snapshot(s)", async () => {
    // Arrange
    const { default: UberEatsLogo } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/components/UberEatsLogo")
    >("@/components/UberEatsLogo");

    // Act
    const { container } = render(<UberEatsLogo />);

    // Assert
    expect(container).toMatchSnapshot();
  });
});
