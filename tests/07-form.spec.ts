import { test, expect } from "@playwright/test";

test.describe('Form test for DemoQA', () => {
    test.beforeEach(async ({ page }) => {
        // Go to the DemoQA homepage
        await page.goto('https://demoqa.com/text-box');
    });
    
    test('Fill in the form', async ({ page }) => {
        // Fill in the form fields
        await page.getByPlaceholder('Full Name').fill('Ferch Puig');
        await page.fill('#userEmail', 'test@test.com');
        await page.getByPlaceholder('Current Address').fill('Calle de la Paz 1');
        await page.locator('#permanentAddress').fill('Calle de la Paz 2');
        // Click the Submit button
        await page.getByRole('button', { name: 'Submit' }).click();
        // Wait for the form to be submitted
        await page.waitForTimeout(5000); // Wait for 5 seconds to observe the result
        // Check that the form was submitted successfully
        await expect(page.locator('#name')).toContainText('Ferch Puig');
    });
});