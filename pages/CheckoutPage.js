class CheckoutPage {
    constructor(page) {
        this.page = page;

        // Locators
        this.firstName = '#first-name';
        this.lastName = '#last-name';
        this.postalCode = '#postal-code';
        this.continueBtn = '#continue';
        this.finishBtn = '#finish';
        this.backHomeBtn = '#back-to-products';
        this.menuBtn = '#react-burger-menu-btn';
        this.logoutLink = '#logout_sidebar_link';
    }

    async enterUserDetails(first, last, zip) {
        await this.page.fill(this.firstName, first);
        await this.page.fill(this.lastName, last);
        await this.page.fill(this.postalCode, zip);
    }

    async continueCheckout() {
        await this.page.click(this.continueBtn);
    }

    async finishOrder() {
        await this.page.click(this.finishBtn);
    }

    async backToHome() {
        await this.page.click(this.backHomeBtn);
    }

    async logout() {
        await this.page.click(this.menuBtn);
        await this.page.waitForTimeout(1000);
        await this.page.click(this.logoutLink);
    }
}

module.exports = { CheckoutPage };