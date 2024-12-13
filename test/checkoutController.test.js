// Import Jest testing framework
import { jest } from '@jest/globals';
// Import checkout controller function
import { checkout } from '../src/controllers/checkoutController.js';
// Import cart related functions
import { getCart } from '../src/models/cart.js';
// Import order creation function
import { createOrder } from '../src/models/order.js';
// Import discount code related functions
import { generateDiscountCode } from '../src/models/discount.js';

// Mock the cart module
jest.mock('../src/models/cart.js');
// Mock the order module
jest.mock('../src/models/order.js');
// Mock the discount module
jest.mock('../src/models/discount.js');

// Test suite for Checkout Controller
describe('Checkout Controller', () => {
  // Test case for successful checkout and order creation
  it('should checkout and create order', () => {
    // Mock request object with user ID and no discount code
    const req = { body: { userId: 'user1', discountCode: null } };
    // Mock response object with status and json methods
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    // Mock getCart to return a cart with one item
    getCart.mockReturnValue([{ id: 'item1', price: 10 }]);
    // Mock createOrder to return order ID 1
    createOrder.mockReturnValue(1);
    // Mock generateDiscountCode to return null
    generateDiscountCode.mockReturnValue(null);

    // Execute the checkout function with mocked request and response
    checkout(req, res);

    // Verify getCart was called with correct user ID
    expect(getCart).toHaveBeenCalledWith('user1');
    // Verify createOrder was called with correct parameters
    expect(createOrder).toHaveBeenCalledWith('user1', [{ id: 'item1', price: 10 }], 10, null);
    // Verify response status was set to 200
    expect(res.status).toHaveBeenCalledWith(200);
    // Verify response JSON contains correct order details
    expect(res.json).toHaveBeenCalledWith({ orderId: 1, totalAmount: 10, discountCode: null });
  });
});
