// Import the Express framework
import express from 'express';
// Import the getStats controller function from adminController.js
import { getStats } from '../controllers/adminController.js';

// Create a new Express Router instance for admin routes
const adminRouter = express.Router();
// Define a GET route at '/stats' path that uses the getStats controller
adminRouter.get('/stats', getStats);


// Export the adminRouter to be used in other parts of the application
export default adminRouter;
