import express from 'express'
import cartController from '../controllers/cartController.js';
const router = express.Router();

router.get('/by_customer/:id', cartController.getCartByCustomer)
router.post('/create', cartController.createCart);

export default router;