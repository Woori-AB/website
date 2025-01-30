import { describe, expect, it, vi, afterEach, beforeAll } from "vitest";
import { cleanup, render, screen, within } from "@testing-library/react";
import Tag, { TagType } from "@/components/Tag";

describe("Tag", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders", () => {
    render(<Tag tagType="General" />);
    expect(screen.getByTestId("Tag")).toHaveTextContent("General");
  });

  it.each<[TagType, TagType]>([
    ["General", "General"],
    ["Mental game", "Mental game"],
    ["No Limit Hold'em", "No Limit Hold'em"],
    ["Pot Limit Omaha", "Pot Limit Omaha"],
  ])(
    "renders with text content '%s' when tagType is '%s'",
    (tagType: TagType, textContent: string) => {
      render(<Tag tagType={tagType} />);
      expect(screen.getByTestId("Tag")).toHaveTextContent(textContent);
    }
  );
});
