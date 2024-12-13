// Import Jest testing framework
import { jest } from '@jest/globals';
// Import the cart controller function to be tested
import { addToCart } from '../src/controllers/cartController.js';
// Import the cart model function and alias it as addToCartModel
import { addToCart as addToCartModel } from '../src/models/cart.js';

// Mock the cart model to isolate the controller test
jest.mock('../src/models/cart.js');

// Test suite for Cart Controller
describe('Cart Controller', () => {
  // Test case for adding item to cart
  it('should add item to cart', () => {
    // Mock request object with user ID and item details
    const req = { body: { userId: 'user1', item: { id: 'item1', price: 10 } } };
    // Mock response object with status and send functions
    const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };

    // Call the controller function with mock request and response
    addToCart(req, res);

    // Verify that model function was called with correct parameters
    expect(addToCartModel).toHaveBeenCalledWith('user1', { id: 'item1', price: 10 });
    // Verify that response status was set to 200
    expect(res.status).toHaveBeenCalledWith(200);
    // Verify that success message was sent in response
    expect(res.send).toHaveBeenCalledWith('Item added to cart');
  });
});
