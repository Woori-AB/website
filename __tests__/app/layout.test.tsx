import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Layout, { metadata } from "@/app/layout";

const { localFontMock } = vi.hoisted(() => ({
  localFontMock: vi
    .fn()
    .mockReturnValueOnce({ variable: "--local-font-one" })
    .mockReturnValueOnce({ variable: "--local-font-two" }),
}));

vi.mock("next/font/local", () => ({
  default: localFontMock,
}));

describe("Layout", () => {
  const childrenMock = <div data-testid="main-children" />;
  let container: Document;

  beforeEach(() => {
    const { container: localContainer } = render(
      <Layout>{childrenMock}</Layout>,
      {
        container: document,
      }
    );
    container = localContainer;
  });

  describe("metadata", () => {
    it("exports 'metadata.title' with text 'Woori website'", () => {
      expect(metadata.title).toBe("Woori website");
    });
  });

  it("loads exactly two fonts", () => {
    expect(localFontMock).toHaveBeenCalledTimes(2);
  });

  it("first loads 'GeistVF.woff' font", () => {
    expect(localFontMock).toHaveBeenNthCalledWith(1, {
      src: "./fonts/GeistVF.woff",
      variable: "--font-geist-sans",
      weight: "100 900",
    });
  });

  it("secondarily loads 'GeistMonoVF.woff' font", () => {
    expect(localFontMock).toHaveBeenNthCalledWith(1, {
      src: "./fonts/GeistVF.woff",
      variable: "--font-geist-sans",
      weight: "100 900",
    });
  });

  it("renders <h1> title: 'Woori website'", () => {
    expect(screen.getByTestId("layout-h1")).toHaveTextContent("Woori website");
  });

  it("renders <body>-element with className: '--local-font-one --local-font-two antialiased'", () => {
    expect(container.querySelector("body")).toBeDefined();
    expect(container.querySelector("body")?.className).toBe(
      "--local-font-one --local-font-two antialiased bg-gray-300 dark:bg-gray-950"
    );
  });

  describe("<main>", () => {
    let main: HTMLElement;

    beforeEach(() => {
      main = screen.getByRole("main");
      expect(main).toBeInTheDocument();
    });

    it("has children elements", () => {
      expect(within(main).getByTestId("main-children")).toBeInTheDocument();
    });
  });
});
