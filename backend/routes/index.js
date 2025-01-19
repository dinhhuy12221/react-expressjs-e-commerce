import categoryRouter from './categoryRoutes.js'
import productRouter from './productRoutes.js'
import authRoutes from './authRoutes.js';

const route = (app) => {
    app.use('/api/category', categoryRouter);
    app.use('/api/product', productRouter);
    app.use('/api/auth', authRoutes);
}

export default route;