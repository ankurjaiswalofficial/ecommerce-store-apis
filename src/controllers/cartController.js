// Import the addToCart function from cart.js model and alias it as addToCartModel
import { addToCart as addToCartModel } from '../models/cart.js';

// Define controller function to handle adding items to cart
const addToCart = (req, res) => {
    // Extract userId and item from request body using object destructuring
    const { userId, item } = req.body;
    // Call the model function to add item to cart for given user
    addToCartModel(userId, item);
    // Send success response with 200 status code
    res.status(200).send('Item added to cart');
};

// Export the addToCart controller function
export { addToCart };
