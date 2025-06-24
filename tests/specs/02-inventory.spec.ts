import { test, expect} from '../fixtures/inventory-fixture'

test.describe('Inventory page scenarios', () => {
    test('Verify each inventory item has title, description, price and add-to-cart button', async ({inventoryPage}) => {
        //Method inside inventory page to verify properties in each item
        await inventoryPage.verifyAllItems();
    });

    test('Add a single item to the cart and verify cart badge updates', async ({inventoryPage}) => {
        const itemsToAdd = ['Sauce Labs Backpack', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket'];
        for (const item of itemsToAdd){
            await inventoryPage.addToCartByProductName(item);
        }
        await inventoryPage.verifyCardBagdeCount(itemsToAdd.length);
    })
})