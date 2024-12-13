// Array to store all orders
let orders = [];
// Counter to track the total number of orders
let orderCount = 0;

// Function to create a new order
// Parameters:
// - userId: ID of the user placing the order
// - items: Array of items in the order
// - totalAmount: Total cost of the order
// - discountCode: Optional discount code (defaults to null)
const createOrder = (userId, items, totalAmount, discountCode = null) => {
    // Increment the order counter
    orderCount++;
    // Add new order object to orders array with all order details
    orders.push({ userId, items, totalAmount, discountCode, orderId: orderCount });
    // Return the order ID (current count)
    return orderCount;
}

// Function to get all orders
// Returns the complete orders array
const getOrders = () => {
    return orders;
}

// Function to get total number of orders
// Returns the current order count
const getOrderCount = () => {
    return orderCount;
}

// Export functions to make them available to other modules
export { createOrder, getOrders, getOrderCount };
