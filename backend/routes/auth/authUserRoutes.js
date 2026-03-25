import express from 'express'
const router = express.Router();
import authUserController from '../../controllers/auth/authUserController.js';
import verifyJWT from '../../middlewares/verifyJWT.js';

router.post('/login', authUserController.login)
router.post('/logout', verifyJWT, authUserController.logout)
router.get('/refresh', authUserController.refresh)

export default router