import express from 'express'
const router = express.Router();
import authCustomerController from '../../controllers/auth/authCustomerController.js';

router.post('/login', authCustomerController.login)
router.get('/refresh', authCustomerController.refresh)

export default router