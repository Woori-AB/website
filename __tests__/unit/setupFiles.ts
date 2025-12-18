import "@testing-library/jest-dom/vitest";
import React from "react";
import { vi } from "vitest";

// Mocked node modules
vi.mock("lucide-react");
vi.mock("react-intl");
vi.mock("next/image");
vi.mock("next/font/google");
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

// Mocked app
vi.mock("@/app/[locale]/layout", () => createMockComponent("Layout"));
vi.mock("@/app/[locale]/page", () => createMockComponent("Page"));
vi.mock("@/app/providers/index", () => createMockComponent("Providers"));
vi.mock("@/app/page", () => createMockComponent("Page"));

// Mocked components
vi.mock("@/ui/Button", () => createMockComponent("Button"));
vi.mock("@/ui/Carousel", () => createMockComponent("Carousel"));
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
vi.mock("@/components/Header", () => createMockComponent("Header"));
vi.mock("@/components/Home", () => createMockComponent("Home"));
vi.mock("@/components/InstagramButton", () =>
  createMockComponent("InstagramButton")
);
vi.mock("@/components/LanguageSwitcher", () =>
  createMockComponent("LanguageSwitcher")
);
vi.mock("@/components/OpeningHours", () => createMockComponent("OpeningHours"));

vi.mock("@/components/Menu", () => createMockComponent("Menu"));

vi.mock("@/components/TikTokButton", () => createMockComponent("TikTokButton"));
vi.mock("@/components/TikTokLogo", () => createMockComponent("TikTokLogo"));

vi.mock("@/components/UberEatsButton", () =>
  createMockComponent("UberEatsButton")
);
vi.mock("@/components/UberEatsLogo", () => createMockComponent("UberEatsLogo"));
vi.mock("@/components/WoltButton", () => createMockComponent("WoltButton"));
vi.mock("@/components/WoltLogo", () => createMockComponent("WoltLogo"));
vi.mock("@/components/WooriLogo", () => createMockComponent("WooriLogo"));
