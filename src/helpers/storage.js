// eslint-disable-next-line import/prefer-default-export
import { STORAGE_KEY } from '../config/consts';

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

export const editTaskInStorage = (id, newTaskTitle) => {
  const currentTasks = getTasksDataFromLocalStorage();
  const indexOfEditedTask = currentTasks.findIndex((task) => task.id === id);
  currentTasks[indexOfEditedTask].name = newTaskTitle;
  saveDataInStorageForKey(STORAGE_KEY, currentTasks);
};

export const deleteTaskStorage = (id) => {
  const currentTasks = getTasksDataFromLocalStorage();
  const indexOfDeletedTask = currentTasks.findIndex((task) => task.id === id);
  const newTaskList = currentTasks.filter((task) => task !== currentTasks[indexOfDeletedTask]);
  saveDataInStorageForKey(STORAGE_KEY, newTaskList);
};

// TODO: ADD here remove task from storage functionality
