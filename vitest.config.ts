import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./__tests__/unit/setupFiles.ts"],
    include: [
      "__tests__/unit/**/*.{test,spec}.{ts,tsx,js,jsx}",
      "__tests__/integration/**/*.{test,spec}.{ts,tsx,js,jsx}",
    ],
    exclude: ["__tests__/e2e/**", "**/node_modules/**", "**/dist/**"],
    coverage: {
      thresholds: {
        lines: 100,
        functions: 100,
        statements: 100,
        branches: 100,
      },
      exclude: [
        "**/__mocks__/**",
        "**/node_modules/**",
        "**/dist/**",
        "**/__tests__/**",
      ],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
