import { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from './AuthContext';
import TaskApi from 'api/services/task';

import { activeRowCount } from 'pages/TasksPage/taskTableConfig';

const TaskContext = createContext('');

function useTask() {
  return useContext(TaskContext);
}

function TaskProvider({ children }) {
  const { user } = useAuth();

  const [historyTasks, setHistoryTasks] = useState({
    data: [],
    count: 0,
    hasNextPage: false,
    loading: true,
  });
  const [activeTasks, setActiveTasks] = useState({
    data: [],
    count: 0,
    hasNextPage: false,
    loading: true,
  });
  const [selectedTask, setSelectedTask] = useState('');

  const deleteTask = async (id) => {
    await TaskApi.deleteTask({ id });
    setSelectedTask('');
  };

  const loadActiveTasks = async (pageNumber = 1) => {
    setActiveTasks({
      ...activeTasks,
      loading: true,
    });
    const data = user.isAdmin
      ? await TaskApi.getActiveTasks({
          page: pageNumber,
          rowCount: activeRowCount,
        })
      : await TaskApi.getEmployeeActiveTasks({
          page: pageNumber,
          rowCount: activeRowCount,
          employeeId: user.id,
        });
    if (data) {
      setActiveTasks({
        ...activeTasks,
        data: data.taskList,
        hasNextPage: data.hasNextPage,
        count: data.taskList.length,
        loading: false,
      });
    }
  };

  const loadHistoryTasks = async (pageNumber = 1) => {
    setHistoryTasks({
      ...historyTasks,
      loading: true,
    });
    const data = user.isAdmin
      ? await TaskApi.getHistoryTasks({
          page: pageNumber,
          rowCount: activeRowCount,
        })
      : await TaskApi.getEmployeeHistoryTasks({
          page: pageNumber,
          rowCount: activeRowCount,
          employeeId: user.id,
        });
    if (data) {
      setHistoryTasks({
        ...historyTasks,
        data: data.taskList,
        hasNextPage: data.hasNextPage,
        count: data.taskList.length,
        loading: false,
      });
    }
  };

  useEffect(() => {
    loadActiveTasks();
    loadHistoryTasks();
  }, []);

  const value = {
    historyTasks,
    activeTasks,
    loadActiveTasks,
    loadHistoryTasks,
    deleteTask,
    selectedTask,
    setSelectedTask,
  };
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}

export { useTask, TaskProvider };
