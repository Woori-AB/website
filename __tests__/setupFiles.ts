import "@testing-library/jest-dom/vitest";
import React from "react";
import { vi } from "vitest";

// Mocked node modules
vi.mock("lucide-react");
vi.mock("react-intl");
vi.mock("next/image");
vi.mock("@/hooks/useStyle");

// Mocked project modules below...

vi.mock("@/components/FoodoraLogo", () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: any) =>
    React.createElement("mocked-FoodoraLogo", {
      ...props,
    }),
}));
