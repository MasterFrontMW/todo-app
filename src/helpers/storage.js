// eslint-disable-next-line import/prefer-default-export
import { STORAGE_KEY } from '../config/consts';

// let Task = { completed: false, id: '', message: '' };

const saveDataInStorageForKey = (key, data) => {
  return localStorage.setItem(key, JSON.stringify(data));
};

export const getTasksDataFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
};

export const addTaskToStorage = (taskTitle) => {
  const currentTasks = getTasksDataFromLocalStorage();
  const newTasks = [...currentTasks, taskTitle];
  saveDataInStorageForKey(STORAGE_KEY, newTasks);
};

export const deleteTaskStorage = (id) => {
  const currentTasks = getTasksDataFromLocalStorage();
  const indexOfDeletedTask = currentTasks.findIndex((task) => task.id === id);
  const newTaskList = currentTasks.filter((task) => task !== currentTasks[indexOfDeletedTask]);
  saveDataInStorageForKey(STORAGE_KEY, newTaskList);
};

export const updateTaskInStorage = (task) => {
  const currentTasks = getTasksDataFromLocalStorage();
  const updatedTasks = currentTasks.map((currentTask) => {
    if (currentTask.id === task.id) {
      return task;
    }
    return currentTask;
  });
  saveDataInStorageForKey(STORAGE_KEY, updatedTasks);
};
