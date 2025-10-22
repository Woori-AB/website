import FacebookButton from "@/components/FacebookButton";
import { cleanup, render } from "@testing-library/react";
import { describe, it, vi, expect, afterEach } from "vitest";

describe("FacebookButton", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("matches snapshot(s)", () => {
    // Act
    const { container } = render(<FacebookButton />);

    // Assert
    expect(container).toMatchSnapshot();
  });
});
