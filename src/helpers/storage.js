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

export const updateTaskInStorage = (Task) => {
  const currentTasks = getTasksDataFromLocalStorage();
  const updatedTask = currentTasks.find((task) => task.id === Task.id);
  updatedTask.message = Task.message;
  updatedTask.completed = Task.completed;
  saveDataInStorageForKey(STORAGE_KEY, currentTasks);
};
