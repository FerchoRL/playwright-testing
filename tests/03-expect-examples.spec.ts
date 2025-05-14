import { test, expect } from '@playwright/test';

test.describe('Demostrating Playwright expect', () => {

    test('expect to have URL', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');
        await expect(page).toHaveURL(/.*inventory/);
    });
    test('expect to be visible', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        const loginButton = page.locator('#login-button');
        await expect(loginButton).toBeVisible();
    });

    test('expect to have text', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        const loginButton = page.locator('#login-button');
        await expect(loginButton).toHaveText('Login');
    });

    test('expect to have value', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.fill('#user-name', 'standard_user');
        const usernameInput = page.locator('#user-name');
        await expect(usernameInput).toHaveValue('standard_user');
    });

    test('expect to have attribute', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        const loginButton = page.locator('#login-button');
        await expect(loginButton).toHaveAttribute('type', 'submit');
    });

    test('expect to have class', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        const loginButton = page.locator('#login-button');
        await expect(loginButton).toHaveClass(/btn_action/);
    });

    test('expect to have CSS property', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        const loginButton = page.locator('#login-button');
        await expect(loginButton).toHaveCSS('background-color', 'rgb(61, 220, 145)');
    });

    test('expect to have count', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        const loginButton = page.locator('.login_logo');
        await expect(loginButton).toHaveCount(1);
    });

    test('to have screenshot', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        const loginButton = page.locator('#login-button');
        await expect(loginButton).toHaveScreenshot({ maxDiffPixelRatio: 0.01 });
        await page.screenshot({ path: 'screenshot.png' });
        await expect(page).toHaveScreenshot({ maxDiffPixelRatio: 0.01 });
    });
});
