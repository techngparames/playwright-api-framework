class ProductPage {
    constructor(page) {
        this.page = page;
    }

    async applyHighToLowFilter() {
        await this.page.getByRole('combobox').selectOption('hilo');
    }

  async addProductsToCart(count = 2) {
    const buttons = this.page.getByRole('button', { name: /add to cart/i });

    for (let i = 0; i < count; i++) {
        await buttons.nth(i).click();
        await this.page.waitForTimeout(300); // small stability delay
    }
}
}

module.exports = { ProductPage };