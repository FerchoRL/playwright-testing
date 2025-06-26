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
    });

    test('Remove items from cart and verify badge count updates', async ({inventoryPage}) => {
        const itemsToAdd = ['Sauce Labs Backpack', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket'];
        const itemsToRemove = ['Sauce Labs Backpack']

        //Add items to cart
        for (const item of itemsToAdd){
            await inventoryPage.addToCartByProductName(item);
        }

        //Remove items from cart
        for(const item of itemsToRemove){
            await inventoryPage.removeFromCartByProductName(item);
        }

        //Verify how many items keep in the cart
        const expectedCount = itemsToAdd.length -itemsToRemove.length;

        await inventoryPage.verifyCardBagdeCount(expectedCount)
        

    })

    /**
     * Test tecnico para practicar selectores dinamicos
     * Elimina todos los productos cuyo nombre contenga determinada palabra
     */

    test('Remove items from cart that contains an expected word', async ({inventoryPage}) => {
        const itemsToAdd = ['Sauce Labs Backpack', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket'];

        const itemToRemove = 'Labs';

        //Add items to cart
        for (const item of itemsToAdd){
            await inventoryPage.addToCartByProductName(item);
        }

        //Remove matching items
        await inventoryPage.removeItemsByNameMatch(itemsToAdd,itemToRemove);

    })
})