import express from 'express'
import orderController from '../controllers/orderController.js';
const router = express.Router();

router.post('/create', orderController.createOrder);
router.get('/order_by_customer/:id', orderController.getOrderByCustomer)

export default router;