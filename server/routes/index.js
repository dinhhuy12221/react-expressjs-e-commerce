import categoryRouter from './categoryRoutes.js'
import productRouter from './productRoutes.js'

const route = (app) => {
    app.use('/api/category', categoryRouter);
    app.use('/api/product', productRouter);
}

export default route;