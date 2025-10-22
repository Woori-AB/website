import Flag from "@/components/Flag";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe, it, vi, expect, afterEach } from "vitest";

describe("Flag", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("matches snapshot(s)", () => {
    // Act
    const { container } = render(
      <Flag src="/flags/sv.svg" alt="Svenska" onClick={() => null} />
    );

    // Assert
    expect(container).toMatchSnapshot();
  });

  it("invokes the onClick callback when clicked", () => {
    // Arrange
    const onClick = vi.fn();

    // Act
    render(<Flag src="/flags/sv.svg" alt="Svenska" onClick={onClick} />);
    const flag = screen.getByAltText("Svenska");
    fireEvent.click(flag);

    // Assert
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
