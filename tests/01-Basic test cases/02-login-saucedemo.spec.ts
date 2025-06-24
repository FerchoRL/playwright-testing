import { test, expect } from '@playwright/test';

test.describe('Login tests for SauceDemo and familiarization with Playwright', () => {
    test('login test', async ({ page }) => {
        // Go to the login page
        await page.goto('https://www.saucedemo.com/');
        // Fill in the username and password fields
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
        // Click the login button
        await page.click('#login-button');
        // Check that the URL is correct after login
        await expect(page).toHaveURL(/.*inventory/);
        await page.waitForTimeout(5000); // Wait for 5 seconds to observe the result

    });

    test('login test with invalid credentials', async ({ page }) => {
        // Go to the login page
        await page.goto('https://www.saucedemo.com/');
        // Fill in the username and password fields with invalid credentials
        await page.fill('#user-name', 'invalid_user');
        await page.fill('#password', 'invalid_password');
        // Click the login button
        await page.click('#login-button');
        // Check that the error message is displayed
        const errorMessage = await page.locator('.error-message-container.error').textContent();
        expect(errorMessage).toContain('Username and password do not match any user in this service');
        await page.waitForTimeout(5000); // Wait for 5 seconds to observe the result
    });
});