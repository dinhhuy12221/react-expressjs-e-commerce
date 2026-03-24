import customerAccountController from '../../controllers/account/customerAccountController.js';
import customerController from '../../controllers/customerController.js';
import express from 'express'
const router = express.Router();

router.post('/create', customerAccountController.create, customerController.createCustomer);
router.post('/get', customerAccountController.get);

export default router