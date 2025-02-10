import express from 'express'
const router = express.Router();

import verifyJWT from '../middlewares/verifyJWT.js';

router.post('', verifyJWT);

export default router