import { cleanup, render } from "@testing-library/react";
import { vi } from "vitest";

describe("Page", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("matches snapshot(s)", async () => {
    // Arrange
    const { default: Page } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/app/page")
    >("@/app/page");

    // Act
    const { container } = render(<Page />);

    // Assert
    expect(container).toMatchSnapshot();
  });
});
