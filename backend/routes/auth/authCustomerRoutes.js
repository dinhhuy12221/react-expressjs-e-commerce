import express from 'express'
const router = express.Router();
import authCustomerController from '../../controllers/auth/authCustomerController.js';
import verifyJWT from '../../middlewares/verifyJWT.js';

router.post('/login', authCustomerController.login)
router.post('/logout', verifyJWT, authCustomerController.logout)
router.get('/refresh', authCustomerController.refresh)

export default router