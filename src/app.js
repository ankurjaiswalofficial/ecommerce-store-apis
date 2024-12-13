// Import the Express framework
import express from 'express';
// Import router for cart-related routes
import cartRouter from './routes/cartRoutes.js';
// Import router for checkout-related routes
import checkoutRouter from './routes/checkoutRoutes.js';
// Import router for admin-related routes
import adminRouter from './routes/adminRoutes.js';

// Create an Express application instance
const app = express();
// Add middleware to parse JSON bodies of requests
app.use(express.json());

// Mount the cart router on the /cart path
app.use('/cart', cartRouter);
// Mount the checkout router on the /checkout path
app.use('/checkout', checkoutRouter);
// Mount the admin router on the /admin path
app.use('/admin', adminRouter);

// Set the port number from environment variables or default to 3000
const PORT = process.env.PORT || 3000;
// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
