import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe, it, vi, expect, afterEach } from "vitest";

describe("Flag", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("matches snapshot(s)", async () => {
    // Arrange
    const { default: Flag } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/components/Flag")
    >("@/components/Flag");

    // Act
    const { container } = render(
      <Flag src="/flags/sv.svg" alt="Svenska" onClick={() => null} />
    );

    // Assert
    expect(container).toMatchSnapshot();
  });

  it("invokes the onClick callback when clicked", async () => {
    // Arrange
    const { default: Flag } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/components/Flag")
    >("@/components/Flag");

    const onClick = vi.fn();

    // Act
    render(<Flag src="/flags/sv.svg" alt="Svenska" onClick={onClick} />);
    const flag = screen.getByAltText("Svenska");
    fireEvent.click(flag);

    // Assert
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
