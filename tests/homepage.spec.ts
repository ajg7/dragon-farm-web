import { test, expect } from "@playwright/test";

test("homepage loads successfully", async ({ page }) => {
  // Navigate to the homepage
  await page.goto("/");

  // Check that the page title is correct
  await expect(page).toHaveTitle("Dragon Farm");

  // Check that the root div is present
  const rootDiv = page.locator("#root");
  await expect(rootDiv).toBeVisible();
});

test("page has dragon emoji favicon", async ({ page }) => {
  await page.goto("/");

  // Check that the favicon contains dragon emoji
  const favicon = page.locator('link[rel="icon"]');
  await expect(favicon).toHaveAttribute("href", /🐲/);
});

test("page structure is correct", async ({ page }) => {
  await page.goto("/");

  // Check that the HTML lang attribute is set to English
  const htmlElement = page.locator("html");
  await expect(htmlElement).toHaveAttribute("lang", "en");

  // Check that the charset is UTF-8
  const metaCharset = page.locator("meta[charset]");
  await expect(metaCharset).toHaveAttribute("charset", "UTF-8");

  // Check that viewport meta tag is present
  const metaViewport = page.locator('meta[name="viewport"]');
  await expect(metaViewport).toHaveAttribute("content", "width=device-width, initial-scale=1.0");
});

test("dragon farm content is displayed", async ({ page }) => {
  await page.goto("/");

  // Check that the main heading is visible
  const heading = page.locator("h1");
  await expect(heading).toContainText("Dragon Farm");

  // Check that the welcome message is visible
  const welcomeMessage = page.locator("p");
  await expect(welcomeMessage).toContainText("Welcome to your magical dragon breeding adventure!");

  // Check that dragon statistics section is visible
  const statsHeading = page.locator("h2").first();
  await expect(statsHeading).toContainText("Dragon Statistics");

  // Check that dragon count is displayed
  const dragonCount = page.getByTestId("dragon-count");
  await expect(dragonCount).toContainText("0");
});

test("action buttons are interactive", async ({ page }) => {
  await page.goto("/");

  // Check that breed button is visible and clickable
  const breedButton = page.getByTestId("breed-button");
  await expect(breedButton).toBeVisible();
  await expect(breedButton).toContainText("Breed New Dragon");

  // Check that feed button is visible and clickable
  const feedButton = page.getByTestId("feed-button");
  await expect(feedButton).toBeVisible();
  await expect(feedButton).toContainText("Feed All Dragons");

  // Test button hover states (checking that buttons are interactive)
  await breedButton.hover();
  await feedButton.hover();

  // Test that buttons can be clicked
  await breedButton.click();
  await feedButton.click();
});

test("responsive layout on mobile", async ({ page }) => {
  // Set mobile viewport
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto("/");

  // Check that content is still visible on mobile
  const heading = page.locator("h1");
  await expect(heading).toBeVisible();

  // Check that buttons are still accessible
  const breedButton = page.getByTestId("breed-button");
  const feedButton = page.getByTestId("feed-button");

  await expect(breedButton).toBeVisible();
  await expect(feedButton).toBeVisible();
});
