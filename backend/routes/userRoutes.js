import express from 'express'
import userController from '../controllers/userController.js'
import multer from "multer";
import verifyJWT from '../middlewares/verifyJWT.js';

const upload = multer({ dest: "uploads/" })

const router = express.Router();

router.get('/get/:id', userController.getUserById);
router.put('/update', verifyJWT, upload.single("image_file"), userController.updateUser);
router.post('/create', userController.createUser);
router.get('/', userController.getUser);

export default router;