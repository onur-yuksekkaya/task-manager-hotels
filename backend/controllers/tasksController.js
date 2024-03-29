import db from '../configs/db';
import { getPatchableProps, sanitizeTask } from './utils';

export const get_all_tasks = async (req, res) => {
  const { page, rowCount } = req.query;

  const taskCount = await db.task.count();
  const allTasks = await db.task.findAll({
    limit: rowCount || 10,
    offset: page * rowCount - rowCount || 0,
  });

  res.send({
    result: 'OK',
    taskList: allTasks.map(sanitizeTask),
    hasNextPage: page * rowCount < taskCount,
  });
};

export const get_active_tasks = async (req, res) => {
  const { page, rowCount } = req.query;

  const taskCount = await db.task.count();
  const allTasks = await db.task.findAll({
    where: {
      status: {
        [db.Sequelize.Op.eq]: 'active',
      },
    },
    limit: rowCount || 10,
    offset: page * rowCount - rowCount || 0,
  });

  res.send({
    result: 'OK',
    taskList: allTasks.map(sanitizeTask),
    hasNextPage: page * rowCount < taskCount,
  });
};

export const get_task_history = async (req, res) => {
  const { page, rowCount } = req.query;

  const taskCount = await db.task.count();
  const allTasks = await db.task.findAll({
    where: {
      status: {
        [db.Sequelize.Op.eq]: 'done',
      },
    },
    limit: rowCount || 10,
    offset: page * rowCount - rowCount || 0,
  });

  res.send({
    result: 'OK',
    taskList: allTasks.map(sanitizeTask),
    hasNextPage: page * rowCount < taskCount,
  });
};

export const get_employee_tasks_all = async (req, res) => {
  const { page, rowCount, employeeId } = req.query;

  const taskCount = await db.task.count();
  const allTasks = await db.task.findAll({
    where: {
      assigned: {
        [db.Sequelize.Op.contains]: [employeeId],
      },
    },
    limit: rowCount || 10,
    offset: page * rowCount - rowCount || 0,
  });

  res.send({
    result: 'OK',
    taskList: allTasks.map(sanitizeTask),
    hasNextPage: page * rowCount < taskCount,
  });
};

export const get_employee_tasks_active = async (req, res) => {
  const { page, rowCount, employeeId } = req.query;

  const taskCount = await db.task.count();
  const allTasks = await db.task.findAll({
    where: {
      assigned: {
        [db.Sequelize.Op.contains]: [employeeId],
      },
      status: {
        [db.Sequelize.Op.eq]: 'active',
      },
    },
    limit: rowCount || 10,
    offset: page * rowCount - rowCount || 0,
  });

  res.send({
    result: 'OK',
    taskList: allTasks.map(sanitizeTask),
    hasNextPage: page * rowCount < taskCount,
  });
};

export const get_employee_tasks_history = async (req, res) => {
  const { page, rowCount, employeeId } = req.query;

  const taskCount = await db.task.count();
  const allTasks = await db.task.findAll({
    where: {
      assigned: {
        [db.Sequelize.Op.contains]: [employeeId],
      },
      status: {
        [db.Sequelize.Op.eq]: 'done',
      },
    },
    limit: rowCount || 10,
    offset: page * rowCount - rowCount || 0,
  });

  res.send({
    result: 'OK',
    taskList: allTasks.map(sanitizeTask),
    hasNextPage: page * rowCount < taskCount,
  });
};

export const create_task = async (req, res) => {
  const { title, description, room_number, assigned } = req.body;

  await db.task.create({
    title,
    description,
    room_number,
    assigned: assigned || [],
  });

  res.send({ result: 'OK' });
};

export const get_task_by_id = async (req, res) => {
  const task = await db.task.findAll({
    where: {
      id: req.params.id,
    },
  });
  const taskObj = task.length ? { task: sanitizeTask(task[0]) } : {};

  res.send(Object.assign({ result: 'OK' }, taskObj));
};

export const update_task_detail = async (req, res) => {
  await db.task.update(getPatchableProps(req.body), {
    where: { id: req.params.id },
  });

  res.send({ result: 'OK' });
};

export const delete_task = async (req, res) => {
  const result = await db.task.destroy({
    where: {
      id: req.params.id,
    },
  });

  if (result === 1)
    res.send({ result: 'OK', message: 'general_task_deleted_text' });
  if (result === 0)
    res.send({
      result: 'OK',
      message: 'general_task_already_deleted_text',
    });
};
