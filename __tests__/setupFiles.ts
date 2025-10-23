import "@testing-library/jest-dom/vitest";
import React from "react";
import { vi } from "vitest";

// Mocked node modules
vi.mock("lucide-react");
vi.mock("react-intl");
vi.mock("next/image");
vi.mock("@/hooks/useStyle");

// Mocked project modules below...

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mockComponent = (mockName: string) => (props: any) =>
  React.createElement(`mocked-${mockName}`, {
    ...props,
  });

const createMockComponent = (mockName: string) => ({
  default: mockComponent(mockName),
});

vi.mock("@/components/Carousel", () => createMockComponent("Carousel"));
vi.mock("@/components/ContactDetails", () =>
  createMockComponent("ContactDetails")
);
vi.mock("@/components/FacebookButton", () =>
  createMockComponent("FacebookButton")
);
vi.mock("@/components/Flag", () => createMockComponent("Flag"));
vi.mock("@/components/FoodoraButton", () =>
  createMockComponent("FoodoraButton")
);
vi.mock("@/components/FoodoraLogo", () => createMockComponent("FoodoraLogo"));
vi.mock("@/components/InstagramButton", () =>
  createMockComponent("InstagramButton")
);
vi.mock("@/components/LanguageSwitcher", () =>
  createMockComponent("LanguageSwitcher")
);
vi.mock("@/components/OpeningHours", () => createMockComponent("OpeningHours"));
vi.mock("@/components/Menu", () => createMockComponent("Menu"));
vi.mock("@/components/UberEatsButton", () =>
  createMockComponent("UberEatsButton")
);
vi.mock("@/components/UberEatsLogo", () => createMockComponent("UberEatsLogo"));
vi.mock("@/components/WoltButton", () => createMockComponent("WoltButton"));
vi.mock("@/components/WoltLogo", () => createMockComponent("WoltLogo"));
vi.mock("@/components/WooriLogo", () => createMockComponent("WooriLogo"));
