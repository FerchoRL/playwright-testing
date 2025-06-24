import { test as base } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { InventoryPage } from '../pages/InventoryPage'

export const test = base.extend<{//test hereda del test base de playwright
    inventoryPage: InventoryPage;//Le decimos que agregamos nuevo fixture llamado inventoryPage
}>({
    inventoryPage: async ({ page }, use) => {//Implementacion del fixture inventory page
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');

        const inventoryPage = new InventoryPage(page);//Una vez logeados, creamos instancia de inventory page
        await use(inventoryPage);//Aquí es donde “entregamos” el fixture al test.
    }
})

export const expect = base.expect;//Exporta expect del mismo contexto de test extendido