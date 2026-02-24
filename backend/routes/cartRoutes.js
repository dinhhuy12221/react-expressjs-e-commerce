import express from 'express'
import cartController from '../controllers/cartController.js';
const router = express.Router();

// router.get('/by_customer/:id', cartController.getCartByCustomer)
router.get('/by_customer/:id', cartController.getProductsByCustomer)
router.delete('/delete/:id', cartController.deleteCart)
router.post('/create', cartController.createCart);
router.put('/update', cartController.updateCart);

export default router;