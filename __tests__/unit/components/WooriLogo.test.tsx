import { cleanup, render } from "@testing-library/react";
import { vi } from "vitest";

describe("WooriLogo", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("matches snapshot(s)", async () => {
    // Arrange
    const { default: WooriLogo } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/components/WooriLogo")
    >("@/components/WooriLogo");

    // Act
    const { container } = render(<WooriLogo />);

    // Assert
    expect(container).toMatchSnapshot();
  });
});
