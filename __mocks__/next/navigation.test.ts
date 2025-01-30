import { describe, expect, it } from "vitest";
import { useParams } from "./navigation";

describe("navigation", () => {
  it("exports a mocked 'useParams' function", () => {
    expect(useParams).toBeDefined();
  });
});
