import { cleanup, render } from "@testing-library/react";
import { describe, it, vi, expect, afterEach } from "vitest";

describe("FoodoraLogo", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("matches snapshot(s)", async () => {
    // Arrange
    const { default: FoodoraLogo } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/components/FoodoraLogo")
    >("@/components/FoodoraLogo");

    // Act
    const { container } = render(<FoodoraLogo />);

    // Assert
    expect(container).toMatchSnapshot();
  });
});
