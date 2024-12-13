import { getCart, clearCart } from "../models/cart.js";
import { createOrder } from "../models/order.js";
import { generateDiscountCode, validateDiscountCode } from "../models/discount.js";

const checkout = (req, res) => {
    const { userId, discountCode } = req.body;
    const items = getCart(userId);
    let totalAmount = items.reduce((sum, item) => sum + item.price, 0);

    if (discountCode && validateDiscountCode(discountCode)) {
        totalAmount *= 0.9; // Apply 10% discount
    }

    const orderId = createOrder(userId, items, totalAmount, discountCode);
    const newDiscountCode = generateDiscountCode(orderId);

    clearCart(userId);

    res.status(200).json({ orderId, totalAmount, discountCode: newDiscountCode });
};

export { checkout };
