// Import required functions from cart module for managing shopping cart operations
import { getCart, clearCart } from "../models/cart.js";
// Import order creation functionality from order module
import { createOrder } from "../models/order.js";
// Import discount code related functions from discount module
import { generateDiscountCode, validateDiscountCode } from "../models/discount.js";

// Checkout controller function that handles the checkout process
const checkout = (req, res) => {
    // Extract userId and discountCode from request body
    const { userId, discountCode } = req.body;
    // Get cart items for the user
    const items = getCart(userId);
    // Calculate total amount by summing up prices of all items
    let totalAmount = items.reduce((sum, item) => sum + item.price, 0);

    // Apply 10% discount if valid discount code is provided
    if (discountCode && validateDiscountCode(discountCode)) {
        totalAmount *= 0.9; // Apply 10% discount
    }

    // Create a new order with user details, items and final amount
    const orderId = createOrder(userId, items, totalAmount, discountCode);
    // Generate a new discount code for future use based on order ID
    const newDiscountCode = generateDiscountCode(orderId);

    // Clear the user's cart after successful order creation
    clearCart(userId);

    // Send success response with order details and new discount code
    res.status(200).json({ orderId, totalAmount, discountCode: newDiscountCode });
};

// Export the checkout function for use in other modules
export { checkout };
