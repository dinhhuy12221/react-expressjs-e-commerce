import express from 'express'
import cartController from '../controllers/cartController.js';
import verifyJWT from '../middlewares/verifyJWT.js';
const router = express.Router();

// router.get('/by_customer/:id', cartController.getCartByCustomer)
router.get('/by_customer/:id', verifyJWT, cartController.getProductsByCustomer)
router.delete('/delete/:id', verifyJWT, cartController.deleteCart)
router.post('/create', verifyJWT, cartController.createCart);
router.put('/update', verifyJWT, cartController.updateCart);

export default router;