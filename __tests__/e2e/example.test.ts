import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(
    /^Woori - Koreanska rätter i Fredhäll, Kristineberg, Stockholm$/,
  );
});

test("has welcome text", async ({ page }) => {
  await page.goto("/");
  const content = await page.content();
  expect(content).toContain(
    'Välkommen till Woori, en restaurang med koreanska smaker. Namnet "Woori" betyder "vi" på koreanska, och här är alla en del av vår gemenskap. Njut av våra koreanska rätter!',
  );
});

test("has restaurant street address", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#contact-details")).toContainText(
    "Stagneliusvägen 47, 112 57, Stockholm",
  );
});

test("has contact email", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#contact-details")).toContainText(
    "kontakt@wooristockholm.se",
  );
});

test("has call-to-action to reserve a table", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#reserve-a-table")).toContainText(
    "Vill du boka bord?",
  );
  await expect(page.locator("#reserve-a-table")).toContainText(
    "Kontakta oss via e-post:",
  );
  await expect(page.locator("#reserve-a-table")).toContainText(
    "kontakt@wooristockholm.se",
  );
});

test("has monday opening hours", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#open-hours")).toContainText("Måndag: Stängt");
});

test("has tuesday opening hours", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#open-hours")).toContainText(
    "Tisdag: 12-15 & 16-20",
  );
});

test("has wednesday opening hours", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#open-hours")).toContainText(
    "Onsdag: 11-15 & 16-20",
  );
});

test("has thursday opening hours", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#open-hours")).toContainText(
    "Torsdag: 11-15 & 16-20",
  );
});

test("has friday opening hours", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#open-hours")).toContainText(
    "Fredag: 11-15 & 16-20",
  );
});

test("has saturday opening hours", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#open-hours")).toContainText("Lördag: 11-20");
});

test("has sunday opening hours", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#open-hours")).toContainText("Söndag: Stängt");
});
