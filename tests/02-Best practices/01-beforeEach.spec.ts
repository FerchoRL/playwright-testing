import { test, expect } from "@playwright/test";

test.describe('Login page - beforeEach', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
    });

    test('Login with valid credentials', async ({ page }) => {
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    });
    test('Login with invalid credentials', async ({ page }) => {
        await page.fill('#user-name', 'invalid_user');
        await page.fill('#password', 'invalid_password');
        await page.click('#login-button');
        await expect(page.locator('.error-message-container')).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });
});