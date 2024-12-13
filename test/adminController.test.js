// Import Jest testing framework
import { jest } from '@jest/globals';
// Import getStats function from adminController
import { getStats } from '../src/controllers/adminController.js';
// Import getOrders function from order model
import { getOrders } from '../src/models/order.js';
// Import getDiscountCodes function from discount model
import { getDiscountCodes } from '../src/models/discount.js';

// Mock the order model to control its behavior in tests
jest.mock('../src/models/order.js');
// Mock the discount model to control its behavior in tests
jest.mock('../src/models/discount.js');

// Test suite for Admin Controller
describe('Admin Controller', () => {
  // Test case to verify stats retrieval functionality
  it('should get stats', () => {
    // Create empty request object for testing
    const req = {};
    // Create mock response object with status and json methods
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    // Mock getOrders to return an array with one order containing one item
    getOrders.mockReturnValue([{ items: [{ id: 'item1', price: 10 }], totalAmount: 10 }]);
    // Mock getDiscountCodes to return an array with one discount code
    getDiscountCodes.mockReturnValue(['DISCOUNT1']);

    // Call the getStats function with mock request and response
    getStats(req, res);

    // Verify that getOrders function was called
    expect(getOrders).toHaveBeenCalled();
    // Verify that getDiscountCodes function was called
    expect(getDiscountCodes).toHaveBeenCalled();
    // Verify that response status was set to 200
    expect(res.status).toHaveBeenCalledWith(200);
    // Verify that response json contains correct stats data
    expect(res.json).toHaveBeenCalledWith({
      totalItems: 1,
      totalAmount: 10,
      discountCodes: ['DISCOUNT1'],
      totalDiscountAmount: 1
    });
  });
});
