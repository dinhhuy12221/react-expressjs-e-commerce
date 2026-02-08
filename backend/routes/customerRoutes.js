import express from 'express'
import customerController from '../controllers/customerrController.js'

const router = express.Router();

router.put('/update', customerController.updateCustomer);
router.get('/get/:id', customerController.getCustomer);

export default router;