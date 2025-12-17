import { cleanup, render } from "@testing-library/react";
import { vi } from "vitest";

describe("MenuTitle", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("matches snapshot(s)", async () => {
    // Arrange
    const { default: MenuTitle } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/components/MenuTitle")
    >("@/components/MenuTitle");

    // Act
    const { container } = render(
      <MenuTitle title="mock-title" className="mock-className" />
    );

    // Assert
    expect(container).toMatchSnapshot();
  });
});
