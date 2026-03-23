import userAccountController from '../../controllers/account/userAccountController.js';
import userController from '../../controllers/userController.js';
import express from 'express'
const router = express.Router();

router.post('/create', userAccountController.create, userController.createCustomer);
router.post('/get', userAccountController.get);

export default router