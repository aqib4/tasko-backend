import express from 'express';
import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  toggleTodo,
} from '../controllers/todoController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

// Protect all todo routes
router.use(authMiddleware);

router.route('/').get(getTodos).post(addTodo);
router.route('/:id').put(updateTodo).delete(deleteTodo);
router.put('/:id/toggle', toggleTodo);

export default router;