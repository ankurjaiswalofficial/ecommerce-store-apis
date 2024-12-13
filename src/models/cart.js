let cart = {};

const addToCart = (userId, item) => {
    if (!cart[userId]) {
        cart[userId] = [];
    }
    cart[userId].push(item);
}
const getCart = (userId) => {
    return cart[userId] || [];
}
const clearCart = (userId) => {
    cart[userId] = [];
}

export { addToCart, getCart, clearCart };
