import { test as base } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

export const test = base.extend<{
    loginPage: LoginPage;
}>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await use(loginPage);
    }
})

export const expect = base.expect;//Exporta expect del mismo contexto de test extendido