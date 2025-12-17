import { cleanup, render } from "@testing-library/react";
import { vi } from "vitest";

describe("TikTokButton", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("matches snapshot(s)", async () => {
    // Arrange
    const { default: TikTokButton } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/components/TikTokButton")
    >("@/components/TikTokButton");

    // Act
    const { container } = render(<TikTokButton />);

    // Assert
    expect(container).toMatchSnapshot();
  });
});
