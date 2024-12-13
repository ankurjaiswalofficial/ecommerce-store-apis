// Import the Express framework
import express from 'express';
// Import the checkout controller function
import { checkout } from '../controllers/checkoutController.js';

// Create a new Express Router instance for checkout routes
const checkoutRouter = express.Router();
// Define POST route for /checkout endpoint that uses the checkout controller
checkoutRouter.post('/checkout', checkout);

// Export the router to be used in other parts of the application
export default checkoutRouter;
