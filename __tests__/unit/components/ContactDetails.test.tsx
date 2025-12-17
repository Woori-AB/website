import { cleanup, render } from "@testing-library/react";
import { vi } from "vitest";

describe("ContactDetails", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("matches snapshot(s)", async () => {
    // Arrange
    const { default: ContactDetails } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/components/ContactDetails")
    >("@/components/ContactDetails");

    // Act
    const { container } = render(<ContactDetails />);

    // Assert
    expect(container).toMatchSnapshot();
  });
});
