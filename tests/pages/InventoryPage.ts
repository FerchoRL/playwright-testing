import { Page, Locator, expect } from '@playwright/test'

export class InventoryPage {
    readonly page: Page;
    readonly items: Locator;
    readonly cartBadge: Locator;

    constructor(page: Page){
        this.page = page;
        this.items = page.locator('.inventory_item') //Todos los productos
        this.cartBadge = page.locator('.shopping_cart_badge');
    }

    //Devuelve el contenedor completo del producto por su nombre
    getItemByName(productName: string): Locator {
        return this.items.filter({hasText:productName});
    }

    getItemByIndex(index: number): Locator {
        return this.items.nth(index);
    }

    //Devuelve todos los elementos clave del producto agrupados en un objeto (por nombre)
    getItemElementsByName(productName: string){
        const item = this.getItemByName(productName);

        return {
            title: item.locator('.inventory_item_name'),
            description: item.locator('.inventory_item_desc'),
            price: item.locator('.inventory_item_price'),
            addToCartButton: item.locator('button:has-text("Add to cart")')
        };
    }

    //Devuelve todos los elementos clave del producto agrupados en un objeto (Por index)
    getItemElementsByIndex(index: number){
        const item = this.getItemByIndex(index);
        return{
            title: item.locator('.inventory_item_name'),
            description: item.locator('.inventory_item_desc'),
            price: item.locator('.inventory_item_price'),
            addToCartButton: item.locator('.button:has-text("Add to cart")')
        };
    }

    //Accion reutilizable: hacer clic en el boton de agregar al carrito por nombre

    async addToCartByProductName(productName: string) {
        const { addToCartButton } = this.getItemElementsByName(productName);
        await addToCartButton.click();
    }

    //Eliminar producto por nombre del carrito
    async removeFromCartByProductName(productName: string){
        const item = this.getItemByName(productName);
        const removeItemButton = item.locator('button:has-text("Remove")');
        await removeItemButton.click();

    }

    //Elimina los items que hagan match con la palabra de busqueda
    async removeItemsByNameMatch(items: string[], keyword: string){
        for (const itemName of items){
            if (itemName.toLowerCase().includes(keyword.toLowerCase())){
                await this.removeFromCartByProductName(itemName);
            }
        }
    }

    //Retorno el numero total de items
    async countItems(): Promise<number>{
        return await this.items.count();
    }

    //Metodo para validar que todos los productos tengan titulo, descripcion, precio y add to cart

    async verifyAllItems(){
        const count = await this.countItems();
        for (let index = 0; index < count; index++) {
            const { title, description, price, addToCartButton} = this.getItemElementsByIndex(index);

            await expect(title,`❌ falto el titulo del producto #${index + 1}`).not.toBeEmpty();
            await expect(description,`❌ falto descripcion del producto #${index + 1}`).not.toBeEmpty();
        }
    }

    async verifyCardBagdeCount(expectedCount:number){
        await expect(this.cartBadge, `❌ Cart badge should show "${expectedCount}"`).toHaveText(expectedCount.toString());
    }

    
}