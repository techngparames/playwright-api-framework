class BooksService {
    constructor(apiClient) {
        this.api = apiClient;
    }

    async getBooks() {
        return this.api.get('/books');
    }

    async createOrder(bookId, customerName) {
        return this.api.post('/orders', {
            bookId,
            customerName
        });
    }

    async getOrders() {
        return this.api.get('/orders');
    }

    async updateOrder(orderId, customerName) {
        return this.api.patch(`/orders/${orderId}`, {
            customerName
        });
    }

    async deleteOrder(orderId) {
        return this.api.delete(`/orders/${orderId}`);
    }
}

module.exports = BooksService;