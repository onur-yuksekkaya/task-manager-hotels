import express from 'express';
import {
  create_task,
  delete_task,
  get_active_tasks,
  get_all_tasks,
  get_employee_tasks_active,
  get_employee_tasks_all,
  get_employee_tasks_history,
  get_task_by_id,
  get_task_history,
  update_task_detail,
} from '../controllers/tasksController';

const router = express.Router();

/*
  Task Routes
  - /tasks <GET> - Get All Tasks
  - /tasks/active <GET> - Get Active Tasks
  - /tasks/history <GET> - Get Passive Tasks
  - /tasks/employee <GET> - Get All Tasks for Employee
  - /tasks/employee/active <GET> - Get Active Tasks for Employee
  - /tasks/employee/history <GET> - Get Passive Tasks for Employee
  - /tasks/create <POST> - Create Task
  - /tasks/:id <GET> - Get Task Data
  - /tasks/:id <PATCH> - Set Task to Employee/s
  - /tasks/:id <DELETE> - Delete Task
*/

router.get('/', get_all_tasks);
router.get('/active', get_active_tasks);
router.get('/history', get_task_history);
router.get('/employee', get_employee_tasks_all);
router.get('/employee/active', get_employee_tasks_active);
router.get('/employee/history', get_employee_tasks_history);
router.post('/create', create_task);
router.get('/:id', get_task_by_id);
router.patch('/:id', update_task_detail);
router.delete('/:id', delete_task);

const taskRouter = router;
export default taskRouter;
