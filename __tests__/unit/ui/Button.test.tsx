import { cleanup, render } from "@testing-library/react";
import { vi } from "vitest";
import * as useStyle from "@/hooks/useStyle";

describe("Button", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("matches snapshot(s)", async () => {
    // Arrange
    const { default: Button } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/ui/Button")
    >("@/ui/Button");

    const useStyleSpy = vi.spyOn(useStyle, "useStyle");

    // Act
    const { container } = render(
      <Button aria-label="mock-aria-label" onClick={vi.fn()}>
        Mock text
      </Button>
    );

    // Assert
    expect(container).toMatchSnapshot();
    expect(useStyleSpy).toMatchSnapshot();
  });
});
