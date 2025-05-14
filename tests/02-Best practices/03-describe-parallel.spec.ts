import { test, expect } from "@playwright/test";

test.describe.parallel('Parallel test case example', () => {
    test('Test case 1', async ({ page }) => {
        // Go to the DuckDuckGo homepage
        await page.goto('https://duckduckgo.com/')
        // Type "Playwright" into the search box
        await page.fill('input[id="searchbox_input"]', 'Playwright');
        // Press Enter to submit the search
        await page.keyboard.press('Enter');
        // Wait for the results page to load
        await page.waitForTimeout(5000); // Wait for 5 seconds to observe the result
    });

    test('Test case 2', async ({ page }) => {
        // Go to the DuckDuckGo homepage
        await page.goto('https://duckduckgo.com/')
        // Type "Selenium" into the search box
        await page.fill('input[id="searchbox_input"]', 'Selenium');
        // Press Enter to submit the search
        await page.keyboard.press('Enter');
        // Wait for the results page to load
        await page.waitForTimeout(5000); // Wait for 5 seconds to observe the result
    });
});