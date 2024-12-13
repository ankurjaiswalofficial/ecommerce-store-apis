let discountCodes = [];
let nthOrder = 5; // Example: Every 5th order gets a discount code

const generateDiscountCode = (orderId) => {
    if (orderId % nthOrder === 0) {
        const code = `DISCOUNT${orderId}`;
        discountCodes.push(code);
        return code;
    }
    return null;
}
const validateDiscountCode = (code) => {
    const index = discountCodes.indexOf(code);
    if (index !== -1) {
        discountCodes.splice(index, 1);
        return true;
    }
    return false;
}
const getDiscountCodes = () => {
    return discountCodes;
}

export { generateDiscountCode, validateDiscountCode, getDiscountCodes };
