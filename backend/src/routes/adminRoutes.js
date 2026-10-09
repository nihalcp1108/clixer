import express from 'express';
import { adminLogin, getAdminMe } from '../controllers/adminController.js';
import { authenticateAdmin } from '../middleware/adminAuth.js';

const router = express.Router();

// Admin Authentication Endpoints
router.post('/login', adminLogin);
router.get('/me', authenticateAdmin, getAdminMe);

export default router;
