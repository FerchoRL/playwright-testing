import { test, expect } from '@playwright/test'
import { request } from 'http';

test.describe('Expect uses in different scenarios', () => {
    test('Expect over the page', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await expect(page).toHaveURL(/.*saucedemo/);
    });
    test('Expect over the locator', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        const loginButton = page.locator('#login-button');
        await expect(loginButton).toBeVisible();
    });
    test('Expect with comun values', async ({ page }) => {
        const a = 1;
        const b = 'Playwright';
        expect(a).toBeGreaterThan(0);
        expect(b).toContain('Play');
    });
    test('Expect with async values', async ({ request }) => {
        const response = await request.get('https://www.saucedemo.com/');
        expect(response.status()).toBe(200);
    });
});