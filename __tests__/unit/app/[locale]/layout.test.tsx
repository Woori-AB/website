import { cleanup, render } from "@testing-library/react";
import { vi } from "vitest";

describe("Layout", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("matches snapshot(s)", async () => {
    // Arrange
    const { default: Layout } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/app/[locale]/layout")
    >("@/app/[locale]/layout");

    // Act
    const layoutComponent = await Layout({
      children: <div>Foo</div>,
      params: Promise.resolve({ locale: "sv" }),
    });
    const { container } = render(layoutComponent);

    // Assert
    expect(container).toMatchSnapshot();
  });

  it("exports generateStaticParams which lists of available locales", async () => {
    // Arrange
    const { generateStaticParams } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/app/[locale]/layout")
    >("@/app/[locale]/layout");

    // Act
    const staticParams = await generateStaticParams();

    // Assert
    expect(staticParams).toMatchSnapshot();
  });
});
