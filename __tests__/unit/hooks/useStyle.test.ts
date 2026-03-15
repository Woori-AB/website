import { cleanup, render } from "@testing-library/react";
import { vi } from "vitest";
import * as react from "react";

vi.mock("react", () => ({ useEffect: vi.fn() }));

describe("useStyle", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("tests", async () => {
    // Arrange
    const { useStyle } = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@/hooks/useStyle")
    >("@/hooks/useStyle");

    const useEffectSpy = vi.spyOn(react, "useEffect");
    useEffectSpy.mockImplementationOnce((cb) => {
      const destructor = cb();
      if (destructor) destructor();
    });

    useStyle("mock-css");
  });
});
