import FoodoraButton from "@/components/FoodoraButton";
import { cleanup, render } from "@testing-library/react";
import { describe, it, vi, expect, afterEach } from "vitest";

describe("FoodoraButton", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("matches snapshot(s)", () => {
    // Act
    const { container } = render(<FoodoraButton />);

    // Assert
    expect(container).toMatchSnapshot();
  });
});
