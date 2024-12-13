// Import the getOrders function from the order model
import { getOrders } from '../models/order.js';
// Import the getDiscountCodes function from the discount model
import { getDiscountCodes } from '../models/discount.js';

// Controller function to get order statistics
const getStats = (req, res) => {
    // Get all orders from the database
    const orders = getOrders();
    // Calculate total number of items across all orders by summing items array lengths
    const totalItems = orders.reduce((sum, order) => sum + order.items.length, 0);
    // Calculate total amount across all orders by summing order total amounts
    const totalAmount = orders.reduce((sum, order) => sum + order.totalAmount, 0);
    // Get all discount codes from the database
    const discountCodes = getDiscountCodes();
    // Calculate total discount amount based on number of discount codes
    // Assumes each code gives 10% discount on total amount
    const totalDiscountAmount = discountCodes.length * 0.1 * totalAmount; // Simplified calculation

    // Send JSON response with 200 status code containing calculated statistics
    res.status(200).json({
        totalItems,
        totalAmount, 
        discountCodes,
        totalDiscountAmount
    });
};

// Export the getStats controller function
export { getStats };
