import { cleanup, render } from "@testing-library/react";
import { vi } from "vitest";

describe("Featured", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("matches snapshot(s)", async () => {
    // Arrange
    const { default: Featured } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/components/Featured")
    >("@/components/Featured");

    // Act
    const { container } = render(<Featured />);

    // Assert
    expect(container).toMatchSnapshot();
  });
});
