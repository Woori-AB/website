import { cleanup, render } from "@testing-library/react";
import { describe, it, vi, expect, afterEach } from "vitest";
import * as useStyle from "@/hooks/useStyle";

describe("Carousel", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("matches snapshot(s)", async () => {
    // Arrange
    const { default: Carousel } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/components/Carousel")
    >("@/components/Carousel");

    const useStyleSpy = vi.spyOn(useStyle, "useStyle");

    // Act
    const { container } = render(
      <Carousel
        images={["/foo.jpg", "/bar.jpg"]}
        opaqueDuration={5}
        crossfadeDuration={3}
      />
    );

    // Assert
    expect(container).toMatchSnapshot();
    expect(useStyleSpy).toMatchSnapshot();
  });
});
