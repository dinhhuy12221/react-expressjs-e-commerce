import express from 'express'
import customerController from '../controllers/customerController.js'
import multer from "multer";
import verifyJWT from '../middlewares/verifyJWT.js';

const upload = multer({ dest: "uploads/" })

const router = express.Router();

router.get('/get/:id', customerController.getCustomerById);
router.put('/update', verifyJWT, upload.single("image_file"), customerController.updateCustomer);
router.post('/create', customerController.createCustomer);
router.get('/', customerController.getCustomer);

export default router;