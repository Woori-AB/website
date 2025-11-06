import { cleanup, render } from "@testing-library/react";
import { describe, it, vi, expect, afterEach } from "vitest";

describe("MenuCard", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("matches snapshot(s) with no extended className", async () => {
    // Arrange
    const { default: MenuCard } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/components/MenuCard")
    >("@/components/MenuCard");

    // Act
    const { container } = render(
      <MenuCard
        id="test-card"
      >
        <div>Foo</div>
      </MenuCard>
    );

    // Assert
    expect(container).toMatchSnapshot();
  });

  it("matches snapshot(s) with extended className", async () => {
    // Arrange
    const { default: MenuCard } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/components/MenuCard")
    >("@/components/MenuCard");

    // Act
    const { container } = render(
      <MenuCard
        id="test-card"
        className="mock-className"
      >
        <div>Foo</div>
      </MenuCard>
    );

    // Assert
    expect(container).toMatchSnapshot();
  });
});
