// Array to store all generated discount codes
let discountCodes = [];
// Determines frequency of discount code generation - every 5th order gets a code
let nthOrder = 5; // Example: Every 5th order gets a discount code

// Generates a new discount code for qualifying orders
const generateDiscountCode = (orderId) => {
    // Check if this order qualifies for a discount (every nth order)
    if (orderId % nthOrder === 0) {
        // Create discount code by concatenating 'DISCOUNT' with the order ID
        const code = `DISCOUNT${orderId}`;
        // Add the new code to our array of valid codes
        discountCodes.push(code);
        // Return the generated code
        return code;
    }
    // Return null if order doesn't qualify for discount
    return null;
}

// Validates a discount code and removes it from valid codes if found
const validateDiscountCode = (code) => {
    // Check if code exists in our array of valid codes
    const index = discountCodes.indexOf(code);
    // If code is found (index !== -1)
    if (index !== -1) {
        // Remove the code from array so it can't be used again
        discountCodes.splice(index, 1);
        // Return true to indicate code was valid
        return true;
    }
    // Return false if code wasn't found
    return false;
}

// Returns the current array of valid discount codes
const getDiscountCodes = () => {
    return discountCodes;
}

// Export functions to be used in other modules
export { generateDiscountCode, validateDiscountCode, getDiscountCodes };
