import { addToCart as addToCartModel } from '../models/cart.js';


const addToCart = (req, res) => {
    const { userId, item } = req.body;
    addToCartModel(userId, item);
    res.status(200).send('Item added to cart');
};

export { addToCart };
