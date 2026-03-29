import { cleanup, render } from "@testing-library/react";
import { vi } from "vitest";

describe("FacebookLogo", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("matches snapshot(s)", async () => {
    // Arrange
    const { default: FacebookLogo } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/components/FacebookLogo")
    >("@/components/FacebookLogo");

    // Act
    const { container } = render(<FacebookLogo />);

    // Assert
    expect(container).toMatchSnapshot();
  });
});
