// Object to store shopping carts for multiple users
let cart = {};

// Function to add an item to a user's cart
const addToCart = (userId, item) => {
    // Check if the user already has a cart, if not create an empty array
    if (!cart[userId]) {
        cart[userId] = [];
    }
    // Add the new item to the user's cart array
    cart[userId].push(item);
}

// Function to get all items in a user's cart
const getCart = (userId) => {
    // Return the user's cart if it exists, otherwise return empty array
    return cart[userId] || [];
}

// Function to empty a user's cart
const clearCart = (userId) => {
    // Reset the user's cart to an empty array
    cart[userId] = [];
}

// Export the cart functions to be used in other modules
export { addToCart, getCart, clearCart };
