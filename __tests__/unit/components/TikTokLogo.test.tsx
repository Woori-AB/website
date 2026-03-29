import { cleanup, render } from "@testing-library/react";
import { vi } from "vitest";

describe("TikTokLogo", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("matches snapshot(s)", async () => {
    // Arrange
    const { default: TikTokLogo } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/components/TikTokLogo")
    >("@/components/TikTokLogo");

    // Act
    const { container } = render(<TikTokLogo />);

    // Assert
    expect(container).toMatchSnapshot();
  });
});
