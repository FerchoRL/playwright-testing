import { test, expect } from '@playwright/test';

test.describe('Selectors examples', () => {
    test.beforeEach(async ({ page }) => {
        // Go to the login page
        await page.goto('https://www.saucedemo.com/');
    });

    test('CSS selector example', async ({ page }) => {
        const loginButton = page.locator('#login-button');
        await expect(loginButton).toBeVisible();
    });

    test('XPath selector example', async ({ page }) => {
        const loginButton = page.locator('//input[@id="login-button"]');
        await expect(loginButton).toBeVisible();
    });

    test('Text selector example', async ({ page }) => {
        const loginButton = page.locator('text=Login');
        await expect(loginButton).toBeVisible();
        //Second example
        await expect(page.getByText('Login')).toBeVisible();
    });
    test('Role selector example', async ({ page }) => {
        const loginButton = page.locator('role=button[name="Login"]');
        await expect(loginButton).toBeVisible();
    });
    test('Placeholder selector example', async ({ page }) => {
        const usernameInput = page.locator('input[placeholder="Username"]');
        await expect(usernameInput).toBeVisible();
    });
    test('testid selector example', async ({ page }) => {
        const loginButton = page.locator('[data-test="login-button"]');
        await expect(loginButton).toBeVisible();
    });
});

test.describe('label examples using the-internet.herokuapp.com', () => {

    test.beforeEach(async ({ page }) => {
        // Go to the login page
        await page.goto('https://the-internet.herokuapp.com/');
    });

    test('Label example', async ({ page }) => {
        // Click on the Form Authentication link
        await page.click('text=Form Authentication');

        // Check that the username label is visible
        await expect(page.getByLabel('Username')).toBeVisible();
    });
});