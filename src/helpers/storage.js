// eslint-disable-next-line import/prefer-default-export
import { STORAGE_TASK_KEY, STORAGE_GROUP_OF_TASKS_KEY } from '../config/consts';

const saveDataInStorageForKey = (key, data) => {
  return localStorage.setItem(key, JSON.stringify(data));
};

export const getTasksDataFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem(STORAGE_TASK_KEY)) || [];
};

export const addTaskToStorage = (taskTitle) => {
  const currentTasks = getTasksDataFromLocalStorage();
  const newTasks = [...currentTasks, taskTitle];
  saveDataInStorageForKey(STORAGE_TASK_KEY, newTasks);
};

export const deleteTaskStorage = (id) => {
  const currentTasks = getTasksDataFromLocalStorage();
  const indexOfDeletedTask = currentTasks.findIndex((task) => task.id === id);
  const newTaskList = currentTasks.filter((task) => task !== currentTasks[indexOfDeletedTask]);
  saveDataInStorageForKey(STORAGE_TASK_KEY, newTaskList);
};

export const updateTaskInStorage = (task) => {
  const currentTasks = getTasksDataFromLocalStorage();
  const updatedTasks = currentTasks.map((currentTask) =>
    currentTask.id === task.id ? task : currentTask,
  );
  saveDataInStorageForKey(STORAGE_TASK_KEY, updatedTasks);
};

export const getGroupOfTasksDataFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem(STORAGE_GROUP_OF_TASKS_KEY)) || [];
};

export const updateTaskInGroupStorage = (task) => {
  const currentGroupOfTasks = getGroupOfTasksDataFromLocalStorage();
  const updatedAllGroups = currentGroupOfTasks.map((group) => {
    if (group.id === task.groupId) {
      return {
        ...group,
        tasks: group.tasks.map((taskItem) => (taskItem.id === task.id ? task : taskItem)),
      };
    }
    return group;
  });

  saveDataInStorageForKey(STORAGE_GROUP_OF_TASKS_KEY, updatedAllGroups);
};

export const deleteTaskInGroupStorage = (task) => {
  const currentGroupOfTasks = getGroupOfTasksDataFromLocalStorage();
  const foundGroupOfTasks = [...currentGroupOfTasks].find((group) => group.id === task.groupId);
  const newListOfTasksInFoundGroupOfTasks = foundGroupOfTasks.tasks.filter(
    (tasksItem) => tasksItem.id !== task.id,
  );
  foundGroupOfTasks.tasks = newListOfTasksInFoundGroupOfTasks;
  const updatedGroupsOfTasks = currentGroupOfTasks.map((group) =>
    group.id === foundGroupOfTasks.id ? foundGroupOfTasks : group,
  );

  saveDataInStorageForKey(STORAGE_GROUP_OF_TASKS_KEY, updatedGroupsOfTasks);
};

export const addGroupOfTaskInStorage = (taskGroupTitle) => {
  const currentGroupOfTasks = getGroupOfTasksDataFromLocalStorage();
  const newGroupOfTasks = [...currentGroupOfTasks, taskGroupTitle];
  saveDataInStorageForKey(STORAGE_GROUP_OF_TASKS_KEY, newGroupOfTasks);
};

export const addTaskInGroupStorage = (task) => {
  const allGroupOfTasks = getGroupOfTasksDataFromLocalStorage();
  const currentGroup = allGroupOfTasks.find((group) => task.groupId === group.id);
  currentGroup.tasks.push(task);
  saveDataInStorageForKey(STORAGE_GROUP_OF_TASKS_KEY, allGroupOfTasks);
};

export const updateGroupOfTasksInStorage = (tasksGroup) => {
  const currentTasksGroups = getGroupOfTasksDataFromLocalStorage();
  const updatedTasksGroups = currentTasksGroups.map((currentTaskGroup) => {
    if (currentTaskGroup.id === tasksGroup.id) {
      return tasksGroup;
    }
    return currentTaskGroup;
  });
  saveDataInStorageForKey(STORAGE_GROUP_OF_TASKS_KEY, updatedTasksGroups);
};

export const deleteGroupOfTasksInStorage = (id) => {
  const allGroupOfTasks = getGroupOfTasksDataFromLocalStorage();
  const currentGroup = allGroupOfTasks.filter((group) => group.id !== id);
  saveDataInStorageForKey(STORAGE_GROUP_OF_TASKS_KEY, currentGroup);
};
