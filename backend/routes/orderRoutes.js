import express from 'express'
import orderController from '../controllers/orderController.js';
const router = express.Router();

router.get('/orders_by_customer/:id', orderController.getOrderByCustomer)
router.post('/create', orderController.createOrder);
router.get('/:id', orderController.getOrderById);
router.get('/', orderController.getOrders);

export default router;