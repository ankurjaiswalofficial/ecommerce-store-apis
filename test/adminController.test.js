import { jest } from '@jest/globals';
import { getStats } from '../src/controllers/adminController.js';
import { getOrders } from '../src/models/order.js';
import { getDiscountCodes } from '../src/models/discount.js';

jest.mock('../src/models/order.js');
jest.mock('../src/models/discount.js');

describe('Admin Controller', () => {
  it('should get stats', () => {
    const req = {};
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    getOrders.mockReturnValue([{ items: [{ id: 'item1', price: 10 }], totalAmount: 10 }]);
    getDiscountCodes.mockReturnValue(['DISCOUNT1']);

    getStats(req, res);

    expect(getOrders).toHaveBeenCalled();
    expect(getDiscountCodes).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      totalItems: 1,
      totalAmount: 10,
      discountCodes: ['DISCOUNT1'],
      totalDiscountAmount: 1
    });
  });
});
