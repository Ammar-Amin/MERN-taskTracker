import { Router } from 'express';
import { addTask, deleteTask, getAllTasks, toggleTask, updateTask } from '../controllers/taskController.js';

const route = Router();

route.post('/task', addTask)
route.get('/task', getAllTasks)
route.get('/task/:id', toggleTask)
route.put('/task/:id', updateTask)
route.delete('/task/:id', deleteTask)

export default route;