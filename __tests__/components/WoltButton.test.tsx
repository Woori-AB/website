import { cleanup, render } from "@testing-library/react";
import { describe, it, vi, expect, afterEach } from "vitest";

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
});
