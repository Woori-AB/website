import nextConfig from "../next.config";
import { describe, expect, it } from "vitest";

describe("next.config", () => {
  it("has expected configuration", () => {
    expect(nextConfig).toStrictEqual({
      experimental: {
        reactCompiler: true,
      },
    });
  });
});
