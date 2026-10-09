import express from 'express';
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} from '../controllers/productController.js';
import { authenticateAdmin } from '../middleware/adminAuth.js';
import { upload } from '../middleware/upload.js';

const router = express.Router();

// Public catalogue routes
router.get('/', getProducts);
router.get('/:id', getProductById);

// Protected admin product management routes
router.post('/', authenticateAdmin, upload.single('image'), createProduct);
router.put('/:id', authenticateAdmin, upload.single('image'), updateProduct);
router.patch('/:id', authenticateAdmin, upload.single('image'), updateProduct);
router.delete('/:id', authenticateAdmin, deleteProduct);

export default router;
