import { cleanup, render } from "@testing-library/react";
import { describe, it, vi, expect, afterEach } from "vitest";

describe("MenuItem", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("matches snapshot(s)", async () => {
    // Arrange
    const { default: MenuItem } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/components/MenuItem")
    >("@/components/MenuItem");

    // Act
    const { container } = render(<MenuItem
      title="mock-title"
      price="mock-price"
      ingredients="mock-ingredients"
      allergies="mock-allergies"
      abv="mock-abv"
      amount="mock-amount" />);

    // Assert
    expect(container).toMatchSnapshot();
  });
});
