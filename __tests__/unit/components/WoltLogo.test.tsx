import { cleanup, render } from "@testing-library/react";
import { vi } from "vitest";

describe("WoltLogo", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("matches snapshot(s)", async () => {
    // Arrange
    const { default: WoltLogo } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/components/WoltLogo")
    >("@/components/WoltLogo");

    // Act
    const { container } = render(<WoltLogo />);

    // Assert
    expect(container).toMatchSnapshot();
  });
});
