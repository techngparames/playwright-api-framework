class AuthService {
    constructor(apiClient) {
        this.api = apiClient;
    }

    async generateToken() {
        const response = await this.api.post('/api-clients', {
            clientName: "playwright-user",
            clientEmail: `test${Date.now()}@example.com`
        });

        const body = await response.json();
        return body.accessToken;
    }
}

module.exports = AuthService;