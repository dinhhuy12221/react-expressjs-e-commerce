import express from 'express'
const router = express.Router();
import authUserController from '../../controllers/auth/authUserController.js';

router.post('/login', authUserController.login)
router.post('/logout', authUserController.logout)
router.get('/refresh', authUserController.refresh)

export default router