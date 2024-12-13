let orders = [];
let orderCount = 0;

const createOrder = (userId, items, totalAmount, discountCode = null) => {
    orderCount++;
    orders.push({ userId, items, totalAmount, discountCode, orderId: orderCount });
    return orderCount;
}
const getOrders = () => {
    return orders;
}
const getOrderCount = () => {
    return orderCount;
}

export { createOrder, getOrders, getOrderCount };
