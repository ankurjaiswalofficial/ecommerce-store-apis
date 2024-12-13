import express from 'express';
import cartRouter from './routes/cartRoutes.js';
import checkoutRouter from './routes/checkoutRoutes.js';
import adminRouter from './routes/adminRoutes.js';


const app = express();
app.use(express.json());

app.use('/cart', cartRouter);
app.use('/checkout', checkoutRouter);
app.use('/admin', adminRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
