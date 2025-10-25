import { cleanup, render } from "@testing-library/react";
import { describe, it, vi, expect, afterEach } from "vitest";

describe("FacebookButton", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("matches snapshot(s)", async () => {
    // Arrange
    const { default: FacebookButton } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/components/FacebookButton")
    >("@/components/FacebookButton");

    // Act
    const { container } = render(<FacebookButton />);

    // Assert
    expect(container).toMatchSnapshot();
  });
});
