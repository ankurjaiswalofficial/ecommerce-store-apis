import { getOrders } from '../models/order.js';
import { getDiscountCodes } from '../models/discount.js';

const getStats = (req, res) => {
    const orders = getOrders();
    const totalItems = orders.reduce((sum, order) => sum + order.items.length, 0);
    const totalAmount = orders.reduce((sum, order) => sum + order.totalAmount, 0);
    const discountCodes = getDiscountCodes();
    const totalDiscountAmount = discountCodes.length * 0.1 * totalAmount; // Simplified calculation

    res.status(200).json({
        totalItems,
        totalAmount,
        discountCodes,
        totalDiscountAmount
    });
};


export { getStats };
