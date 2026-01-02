import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/^Woori$/);
});

test("has welcome text", async ({ page }) => {
  await page.goto("/");
  const content = await page.content();
  await expect(page.getByTestId("Home")).toBeVisible();

  expect(content).toContain(
    'Välkommen till Woori, en restaurang med koreanska smaker. Namnet "Woori" betyder "vi" på koreanska, och här är alla en del av vår gemenskap. Njut av våra koreanska rätter!'
  );
});

test("has restaurant street address", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByTestId("Home")).toBeVisible();
  const content = await page.content();
  expect(content).toContain("Stagneliusvägen 47, 112 57, Stockholm");
});

test("has contact email", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByTestId("Home")).toBeVisible();
  const content = await page.content();
  expect(content).toContain("kontakt@wooristockholm.se");
});
