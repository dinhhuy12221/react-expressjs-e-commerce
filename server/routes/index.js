import categoryRouter from './categoryRoutes'
import productRouter from './productRoutes'

route = (app) => {
    app.use('/api/category', categoryRouter);
    app.use('/api/product', productRouter);
}

export default route;