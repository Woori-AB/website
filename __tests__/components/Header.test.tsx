import { cleanup, render } from "@testing-library/react";
import { describe, it, vi, expect, afterEach } from "vitest";

describe("Header", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("matches snapshot(s)", async () => {
    // Arrange
    const { default: Header } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/components/Header")
    >("@/components/Header");

    // Act
    const { container } = render(<Header />);

    // Assert
    expect(container).toMatchSnapshot();
  });
});
