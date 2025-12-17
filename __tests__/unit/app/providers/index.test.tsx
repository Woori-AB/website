import { cleanup, render } from "@testing-library/react";
import { vi } from "vitest";

vi.mock("@/locales/messages", () => ({
  default: {
    sv: {},
  },
}));

describe("Providers", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("matches snapshot(s)", async () => {
    // Arrange
    const { default: Providers } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/app/providers/index")
    >("@/app/providers/index");

    // Act
    const { container } = render(
      <Providers locale={"sv"}>
        <div>Foo</div>
      </Providers>
    );

    // Assert
    expect(container).toMatchSnapshot();
  });
});
