import { test, expect } from "@playwright/test"

test.describe('Search test for DuckDuckGo', () => {
    test.beforeEach(async ({ page }) => {
        // Go to the DuckDuckGo homepage
        await page.goto('https://duckduckgo.com/');
    });
    test('Search for Playwright', async ({ page }) => {
        // Type "Playwright" into the search box
        await page.fill('input[id="searchbox_input"]', 'Playwright');
        // Press Enter to submit the search
        await page.keyboard.press('Enter');
        // Wait for the results page to load
        await page.waitForTimeout(5000); // Wait for 5 seconds to observe the result
        // Check that the search results contain the "Playwright" link
        const resultLink = page.getByRole('link', { name: 'https://playwright.dev', exact: true });
        // Print the text content of the result link and check if it is visible
        console.log(await resultLink.textContent());
        await expect(resultLink).toBeVisible();
        //Verify all results contain the word "Playwright"
        // Get all the results containing "playwright"
        const results = page.getByText('playwright');
        //count the number of results
        const resultsCount = await results.count();
        console.log(`Number of results containing "Playwright": ${resultsCount}`);
        //Get all the text contents of the results 
        const textResults = await results.allTextContents();
        // console.log(`Results containing "Playwright": ${textResults}`);
        // Check if almost one result contain the word "playwright"
        const containText = textResults.some(text => text.includes('playwright'));
        expect(containText).toBe(true);
    });
});
