import express from 'express'
const router = express.Router();
import registerController from '../controllers/registerController.js';

router.post('', registerController.registerUser);

export default router