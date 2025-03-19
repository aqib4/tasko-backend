import express from 'express';
import { registerUser, loginUser, getMe, logoutUser} from '../controllers/authController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/signup', registerUser);
router.post('/login', loginUser);
router.get('/me', authMiddleware, getMe);
router.put('/logout', authMiddleware, logoutUser);

export default router;