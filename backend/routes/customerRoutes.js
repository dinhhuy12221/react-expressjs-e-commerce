import express from 'express'
import customerController from '../controllers/customerController.js'

const router = express.Router();

router.put('/update', customerController.updateCustomer);
router.post('/create', customerController.createCustomer);
router.get('/get/:id', customerController.getCustomer);

export default router;