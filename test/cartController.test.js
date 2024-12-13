import { jest } from '@jest/globals';
import { addToCart } from '../src/controllers/cartController.js';
import { addToCart as addToCartModel } from '../src/models/cart.js';

jest.mock('../src/models/cart.js');

describe('Cart Controller', () => {
  it('should add item to cart', () => {
    const req = { body: { userId: 'user1', item: { id: 'item1', price: 10 } } };
    const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };

    addToCart(req, res);

    expect(addToCartModel).toHaveBeenCalledWith('user1', { id: 'item1', price: 10 });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith('Item added to cart');
  });
});
