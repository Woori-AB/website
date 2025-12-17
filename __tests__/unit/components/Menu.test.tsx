import { cleanup, render } from "@testing-library/react";
import { vi } from "vitest";

describe("Menu", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("matches snapshot(s)", async () => {
    // Arrange
    const { default: Menu } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/components/Menu")
    >("@/components/Menu");

    // Act
    const { container } = render(<Menu />);

    // Assert
    expect(container).toMatchSnapshot();
  });
});
