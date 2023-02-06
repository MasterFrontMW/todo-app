// eslint-disable-next-line import/prefer-default-export
import { STORAGE_KEY } from '../config/consts';

export type Task = {
  name: string;
  id: string;
  completed: boolean;
};

const saveDataInStorageForKey = (key, data) => {
  return localStorage.setItem(key, JSON.stringify(data));
};

export const getTasksDataFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || '') || [];
};

export const addTaskToStorage = (taskTitle) => {
  const currentTasks = getTasksDataFromLocalStorage();
  const newTasks = [...currentTasks, taskTitle];
  saveDataInStorageForKey(STORAGE_KEY, newTasks);
};

export const updateTaskInStorage = (id: string, task: Task) => {
  const currentTasks = getTasksDataFromLocalStorage();
  const updatedTasks = currentTasks.map((currentTask) => {
    if (currentTask.id === id) {
      return task;
    }
    return currentTask;
  });

  saveDataInStorageForKey(STORAGE_KEY, updatedTasks);
};

export const deleteTaskStorage = (id) => {
  const currentTasks = getTasksDataFromLocalStorage();
  const indexOfDeletedTask = currentTasks.findIndex((task) => task.id === id);
  const newTaskList = currentTasks.filter((task) => task !== currentTasks[indexOfDeletedTask]);
  saveDataInStorageForKey(STORAGE_KEY, newTaskList);
};

export const addCheckedTaskToStorage = (id) => {
  const currentTasks = getTasksDataFromLocalStorage();
  const checkedTask = currentTasks.find((task) => task.id === id);
  checkedTask.complete = true;
  saveDataInStorageForKey(STORAGE_KEY, currentTasks);
};

export const addUncheckedTaskToStorage = (id) => {
  const currentTasks = getTasksDataFromLocalStorage();
  const checkedTask = currentTasks.find((task) => task.id === id);
  checkedTask.complete = false;
  saveDataInStorageForKey(STORAGE_KEY, currentTasks);
};

// TODO: ADD here remove task from storage functionality