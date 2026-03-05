import express from 'express'
import customerController from '../controllers/customerController.js'
import multer from "multer";

const upload = multer({ dest: "uploads/" })

const router = express.Router();

router.put('/update', upload.single("image_file"), customerController.updateCustomer);
router.post('/create', customerController.createCustomer);
router.get('/get/:id', customerController.getCustomer);

export default router;