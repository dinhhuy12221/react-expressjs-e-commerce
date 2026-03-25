import express from 'express'
import orderController from '../controllers/orderController.js';
import verifyJWT from '../middlewares/verifyJWT.js';
const router = express.Router();

router.get('/orders_by_customer/:id', verifyJWT, orderController.getOrderByCustomer)
router.post('/create', verifyJWT, orderController.createOrder);
router.get('/:id', verifyJWT, orderController.getOrderById);
router.get('/', verifyJWT, orderController.getOrders);

export default router;