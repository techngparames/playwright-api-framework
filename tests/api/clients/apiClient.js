const { request } = require('@playwright/test');

class APIClient {
    constructor() {
        this.token = null;
        this.baseURL = 'https://simple-books-api.glitch.me';
        this.context = null;
    }

    async init() {
        this.context = await request.newContext({
            baseURL: this.baseURL,
            extraHTTPHeaders: {
                'Content-Type': 'application/json'
            }
        });
    }

    setToken(token) {
        this.token = token;
    }

    // ✅ CORRECT AUTH FORMAT FOR SIMPLE BOOKS API
    _getAuthHeaders() {
        if (!this.token) return {};

        return {
            Authorization: `Bearer ${this.token}`
        };
    }

    async get(endpoint) {
        return this.context.get(endpoint, {
            headers: this._getAuthHeaders()
        });
    }

    async post(endpoint, data) {
        return this.context.post(endpoint, {
            data,
            headers: this._getAuthHeaders()
        });
    }

    async patch(endpoint, data) {
        return this.context.patch(endpoint, {
            data,
            headers: this._getAuthHeaders()
        });
    }

    async delete(endpoint) {
        return this.context.delete(endpoint, {
            headers: this._getAuthHeaders()
        });
    }
}

module.exports = APIClient;