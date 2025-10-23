import { cleanup, render } from "@testing-library/react";
import { describe, it, vi, expect, afterEach } from "vitest";

describe("Home", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("matches snapshot(s)", async () => {
    // Arrange
    const { default: Home } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/components/Home")
    >("@/components/Home");

    // Act
    const { container } = render(<Home />);

    // Assert
    expect(container).toMatchSnapshot();
  });
});
