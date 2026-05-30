class CartPage {
    constructor(page) {
        this.page = page;
    }

    async openCart() {
        const cartIcon = this.page.locator('.shopping_cart_link');

        await cartIcon.waitFor({ state: 'visible', timeout: 30000 });

        await Promise.all([
            this.page.waitForURL('**/cart.html', { timeout: 30000 }),
            cartIcon.click()
        ]);
    }

    async validateCartItems(expected = 2) {
        const items = this.page.locator('.cart_item');

        await items.first().waitFor({ timeout: 30000 });

        const count = await items.count();

        if (count !== expected) {
            throw new Error(`Expected ${expected} items but got ${count}`);
        }
    }

    async checkout() {
        const btn = this.page.locator('#checkout');

        await btn.waitFor({ state: 'visible', timeout: 30000 });

        await Promise.all([
            this.page.waitForURL('**/checkout-step-one.html', { timeout: 30000 }),
            btn.click()
        ]);
    }
}

module.exports = { CartPage };