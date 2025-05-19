import express from 'express'
import customerController from '../controllers/customerController.js'

const router = express.Router();

router.put('/update', customerController.updateCustomer);
router.get('/get', customerController.getCustomer);

export default router;