import express from 'express'
const router = express.Router();
import authCustomerController from '../../controllers/auth/authCustomerController.js';

router.post('/login', authCustomerController.login)

export default router