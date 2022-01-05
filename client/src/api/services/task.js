import Api from '../api';

const getAllTasks = async ({ page, rowCount }) => {
  try {
    const { data } = await Api.get(`/tasks?page=${page}&rowCount=${rowCount}`);

    if (data.result === 'OK') {
      return {
        taskList: data.taskList,
        hasNextPage: data.hasNextPage,
      };
    }
  } catch (error) {
    throw new Error(error);
  }
};

const getActiveTasks = async ({ page, rowCount }) => {
  try {
    const { data } = await Api.get(
      `/tasks/active?page=${page}&rowCount=${rowCount}`
    );

    if (data.result === 'OK') {
      return {
        taskList: data.taskList,
        hasNextPage: data.hasNextPage,
      };
    }
  } catch (error) {
    throw new Error(error);
  }
};

const getHistoryTasks = async ({ page, rowCount }) => {
  try {
    const { data } = await Api.get(
      `/tasks/history?page=${page}&rowCount=${rowCount}`
    );

    if (data.result === 'OK') {
      return {
        taskList: data.taskList,
        hasNextPage: data.hasNextPage,
      };
    }
  } catch (error) {
    throw new Error(error);
  }
};

const getEmployeeTasks = async ({ page, rowCount, employeeId }) => {
  try {
    const { data } = await Api.get(
      `/tasks/history?page=${page}&rowCount=${rowCount}&employeeId=${employeeId}`
    );

    if (data.result === 'OK') {
      return {
        taskList: data.taskList,
        hasNextPage: data.hasNextPage,
      };
    }
  } catch (error) {
    throw new Error(error);
  }
};

const createTask = async ({ title, description, room_number, assigned }) => {
  try {
    const { data } = await Api.post('/tasks/create', {
      title,
      description,
      room_number,
      assigned,
    });

    if (data.result === 'OK') {
      return { success: true };
    }
  } catch (error) {
    throw new Error(error);
  }
};

const getTaskById = async ({ id }) => {
  try {
    const { data } = await Api.get(`/tasks/${id}`);

    if (data.result === 'OK') {
      return {
        task: data.task,
      };
    }
  } catch (error) {
    throw new Error(error);
  }
};

const updateTask = async ({
  id,
  assigned,
  description,
  room_number,
  title,
  status,
}) => {
  try {
    const { data } = await Api.patch(`/tasks/${id}`, {
      assigned,
      description,
      room_number,
      title,
      status,
    });

    if (data.result === 'OK') {
      return {
        success: true,
      };
    }
  } catch (error) {
    throw new Error(error);
  }
};

const deleteTask = async ({ id }) => {
  try {
    const { data } = await Api.delete(`/tasks/${id}`);

    if (data.result === 'OK') {
      return {
        message: data.message,
      };
    }
  } catch (error) {
    throw new Error(error);
  }
};

const TaskApi = {
  getAllTasks,
  getActiveTasks,
  getHistoryTasks,
  getEmployeeTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
};
export default TaskApi;
