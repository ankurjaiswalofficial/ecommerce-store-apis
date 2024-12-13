// Import the Express framework
import express from 'express';
// Import the addToCart controller function from cartController.js
import { addToCart } from '../controllers/cartController.js';

// Create a new Express Router instance for cart-related routes
const cartRouter = express.Router();
// Define POST route '/add' that calls the addToCart controller function
cartRouter.post('/add', addToCart);

// Export the router to be used in other parts of the application
export default cartRouter;
