import postcss from "../postcss.config.mjs";
import { describe, expect, it } from "vitest";

describe("postcss.config", () => {
  it("has expected configuration", () => {
    expect(postcss).toStrictEqual({
      plugins: {
        "@tailwindcss/postcss": {},
      },
    });
  });
});
