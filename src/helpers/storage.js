// eslint-disable-next-line import/prefer-default-export
import { STORAGE_KEY } from '../config/const';

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

export const editTaskInStorage = (taskTitle, newTaskTitle) => {
  const currentTasks = getTasksDataFromLocalStorage();
  const indexOfEditedTask = currentTasks.findIndex((task) => task === taskTitle);
  const newTasks = ([...currentTasks][indexOfEditedTask] = newTaskTitle);
  saveDataInStorageForKey(STORAGE_KEY, newTasks);
};

// TODO: ADD here remove task from storage functionality
