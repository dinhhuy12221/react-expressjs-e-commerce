import express from 'express'
import customerController from '../controllers/customerController.js'

const router = express.Router();

router.put('/update', customerController.updateCustomer);

export default router;