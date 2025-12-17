import { cleanup, render } from "@testing-library/react";
import { vi } from "vitest";

describe("FoodoraButton", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("matches snapshot(s)", async () => {
    // Arrange
    const { default: FoodoraButton } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/components/FoodoraButton")
    >("@/components/FoodoraButton");

    // Act
    const { container } = render(<FoodoraButton />);

    // Assert
    expect(container).toMatchSnapshot();
  });
});
