import { cleanup, render } from "@testing-library/react";
import { vi } from "vitest";

describe("InstagramButton", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("matches snapshot(s)", async () => {
    // Arrange
    const { default: InstagramButton } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/components/InstagramButton")
    >("@/components/InstagramButton");

    // Act
    const { container } = render(<InstagramButton />);

    // Assert
    expect(container).toMatchSnapshot();
  });
});
