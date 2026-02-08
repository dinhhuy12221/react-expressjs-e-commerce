import express from 'express'
import userController from '../controllers/userController.js'

const router = express.Router();

router.put('/update', userController.updateUser);
router.get('/get', userController.getUser);

export default router;