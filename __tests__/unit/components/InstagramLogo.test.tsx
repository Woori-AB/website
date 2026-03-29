import { cleanup, render } from "@testing-library/react";
import { vi } from "vitest";

describe("InstagramLogo", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("matches snapshot(s)", async () => {
    // Arrange
    const { default: InstagramLogo } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/components/InstagramLogo")
    >("@/components/InstagramLogo");

    // Act
    const { container } = render(<InstagramLogo />);

    // Assert
    expect(container).toMatchSnapshot();
  });
});
