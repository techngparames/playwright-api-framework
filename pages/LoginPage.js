class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/', {
            waitUntil: 'domcontentloaded',
            timeout: 30000
        });
    }

    async login(user, pass) {
        await this.page.getByRole('textbox', { name: /username/i }).fill(user);
        await this.page.getByRole('textbox', { name: /password/i }).fill(pass);
        await this.page.getByRole('button', { name: /login/i }).click();
    }
}

module.exports = { LoginPage };