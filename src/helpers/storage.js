// eslint-disable-next-line import/prefer-default-export
import { STORAGE_TASK_KEY, STORAGE_GROUP_OF_TASKS_KEY } from '../config/consts';

const saveDataInStorageForKey = (key, data) => {
  return localStorage.setItem(key, JSON.stringify(data));
};

export const getGroupOfTasksDataFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem(STORAGE_GROUP_OF_TASKS_KEY)) || [];
};

export const getListOfTasksWithoutGrupFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem(STORAGE_TASK_KEY)) || [];
};

export const addTaskToStorage = (taskTitle) => {
  const currentTasks = getListOfTasksWithoutGrupFromLocalStorage();
  const newTasks = [...currentTasks, taskTitle];
  saveDataInStorageForKey(STORAGE_TASK_KEY, newTasks);
};

export const deleteTaskStorage = (id) => {
  const currentTasks = getListOfTasksWithoutGrupFromLocalStorage();
  const indexOfDeletedTask = currentTasks.findIndex((task) => task.id === id);
  const newTaskList = currentTasks.filter((task) => task !== currentTasks[indexOfDeletedTask]);
  saveDataInStorageForKey(STORAGE_TASK_KEY, newTaskList);
};

export const updateTaskInStorage = (task) => {
  const currentTasks = getListOfTasksWithoutGrupFromLocalStorage();
  const updatedTasks = currentTasks.map((currentTask) =>
    currentTask.id === task.id ? task : currentTask,
  );
  saveDataInStorageForKey(STORAGE_TASK_KEY, updatedTasks);
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

  saveDataInStorageForKey(STORAGE_TASK_KEY, updatedAllGroups);
};

export const deleteTaskInGroupStorage = (task) => {
  if (!task.groupId) {
    const lsitOfTasks = getListOfTasksWithoutGrupFromLocalStorage();
    const newListOfTasks = lsitOfTasks.filter((taskItem) => taskItem.id !== task.id);
    saveDataInStorageForKey(STORAGE_TASK_KEY, newListOfTasks);
    return;
  }
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

export const addGroupOfTaskInStorage = (tasksGroup) => {
  const currentGroupOfTasks = getGroupOfTasksDataFromLocalStorage();
  const newGroupOfTasks = [...currentGroupOfTasks, tasksGroup];
  saveDataInStorageForKey(STORAGE_GROUP_OF_TASKS_KEY, newGroupOfTasks);
};

export const addTaskInGroupStorage = (task) => {
  const allGroupOfTasks = getGroupOfTasksDataFromLocalStorage();
  const currentGroup = allGroupOfTasks.find((group) => task.groupId === group.id);
  currentGroup.tasks.push(task);
  saveDataInStorageForKey(STORAGE_GROUP_OF_TASKS_KEY, allGroupOfTasks);
};

export const addTaskToStorageWithoutGroup = (task) => {
  const lsitOfTasks = getListOfTasksWithoutGrupFromLocalStorage();
  lsitOfTasks.push(task);
  saveDataInStorageForKey(STORAGE_TASK_KEY, lsitOfTasks);
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
