import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

type MockProps = {
  "data-testid": string;
};

vi.mock("@/components/Day1", () => {
  return {
    default: ({ "data-testid": dataTestId }: MockProps) => (
      <div data-testid={dataTestId}>Bros</div>
    ),
  };
});

describe("Home", () => {
  it.skip("contains an element with data-testid: 'day-1'", () => {
    render(<Home />);
    expect(screen.getByTestId("Home")).toBeInTheDocument();
  });
});
