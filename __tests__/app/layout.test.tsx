import { cleanup, render } from "@testing-library/react";
import { describe, it, vi, expect, afterEach } from "vitest";

describe("Layout", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("matches snapshot(s)", async () => {
    // Arrange
    const { default: Layout } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/app/layout")
    >("@/app/layout");

    // Act
    const { baseElement } = render(<Layout>Foo</Layout>);

    // Assert
    expect(baseElement).toMatchSnapshot();
  });
});
