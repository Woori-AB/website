import ContactDetails from "@/components/ContactDetails";
import { cleanup, render } from "@testing-library/react";
import { describe, it, vi, expect, afterEach } from "vitest";

describe("ContactDetails", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("matches snapshot(s)", () => {
    // Act
    const { container } = render(<ContactDetails />);

    // Assert
    expect(container).toMatchSnapshot();
  });
});
