import express from 'express'
const router = express.Router();
import customerAccountController from '../../controllers/account/customerAccountController.js';

router.post('/create', customerAccountController.create);
router.post('/get', customerAccountController.get);

export default router