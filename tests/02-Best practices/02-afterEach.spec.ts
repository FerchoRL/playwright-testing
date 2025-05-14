import { test, expect } from "@playwright/test";

test.describe('AfterEach test case example', () => {
    test.afterEach(async ({ page }) => {
        // Go to the DuckDuckGo homepage at the end of each test
        await page.goto('https://duckduckgo.com/');
        //wait for the page to load
        await page.waitForTimeout(5000); // Wait for 5 seconds to observe the result
    });
    test('Fill out the form', async ({ page }) => {
        // Go to the DuckDuckGo homepage
        await page.goto('https://duckduckgo.com/')
        // Type "Playwright" into the search box
        await page.fill('input[id="searchbox_input"]', 'Playwright');
        // Press Enter to submit the search
        await page.keyboard.press('Enter');
        // Wait for the results page to load
        await page.waitForTimeout(5000); // Wait for 5 seconds to observe the result
    });
});