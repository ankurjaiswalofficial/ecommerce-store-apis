import { jest } from '@jest/globals';
import { checkout } from '../src/controllers/checkoutController.js';
import { getCart, clearCart } from '../src/models/cart.js';
import { createOrder } from '../src/models/order.js';
import { generateDiscountCode, validateDiscountCode } from '../src/models/discount.js';

jest.mock('../src/models/cart.js');
jest.mock('../src/models/order.js');
jest.mock('../src/models/discount.js');

describe('Checkout Controller', () => {
  it('should checkout and create order', () => {
    const req = { body: { userId: 'user1', discountCode: null } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    getCart.mockReturnValue([{ id: 'item1', price: 10 }]);
    createOrder.mockReturnValue(1);
    generateDiscountCode.mockReturnValue(null);

    checkout(req, res);

    expect(getCart).toHaveBeenCalledWith('user1');
    expect(createOrder).toHaveBeenCalledWith('user1', [{ id: 'item1', price: 10 }], 10, null);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ orderId: 1, totalAmount: 10, discountCode: null });
  });
});
