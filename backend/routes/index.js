import categoryRouter from './categoryRoutes.js'
import productRouter from './productRoutes.js'
import authCustomerRoutes from './auth/authCustomerRoutes.js';
import customerAccountRoutes from './account/customerAccountRoutes.js';
const route = (app) => {
    app.use('/api/account/customer', customerAccountRoutes);
    app.use('/api/auth/customer', authCustomerRoutes);
    app.use('/api/category', categoryRouter);
    app.use('/api/product', productRouter);
}

export default route;