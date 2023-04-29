// eslint-disable-next-line import/prefer-default-export
import {
  STORAGE_TASK_KEY,
  STORAGE_GROUP_OF_TASKS_KEY,
  DARK_STORAGE_THEME_MODE,
} from '../config/consts';

const saveDataInStorageForKey = (key, data) => {
  return localStorage.setItem(key, JSON.stringify(data));
};

export const getThemeModeFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem(DARK_STORAGE_THEME_MODE));
};

export const updateDarkThemeModeInStorage = (themeMode) => {
  if (!themeMode) {
    localStorage.removeItem(DARK_STORAGE_THEME_MODE);
    return;
  }
  saveDataInStorageForKey(DARK_STORAGE_THEME_MODE, true);
};

export const getGroupOfTasksDataFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem(STORAGE_GROUP_OF_TASKS_KEY)) || [];
};

export const getListOfTasksWithoutGrupFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem(STORAGE_TASK_KEY)) || [];
};

export const addTaskInStorage = (task) => {
  if (!task.groupId) {
    const lsitOfTasks = getListOfTasksWithoutGrupFromLocalStorage();
    lsitOfTasks.push(task);
    saveDataInStorageForKey(STORAGE_TASK_KEY, lsitOfTasks);
    return;
  }

  const allGroupOfTasks = getGroupOfTasksDataFromLocalStorage();
  const currentGroup = allGroupOfTasks.find((group) => task.groupId === group.id);
  currentGroup.tasks.push(task);
  saveDataInStorageForKey(STORAGE_GROUP_OF_TASKS_KEY, allGroupOfTasks);
};

export const addGroupOfTaskInStorage = (tasksGroup) => {
  const currentGroupOfTasks = getGroupOfTasksDataFromLocalStorage();
  const newGroupOfTasks = [...currentGroupOfTasks, tasksGroup];
  saveDataInStorageForKey(STORAGE_GROUP_OF_TASKS_KEY, newGroupOfTasks);
};

export const updateTaskInStorage = (task) => {
  if (!task.groupId) {
    const currentTasks = getListOfTasksWithoutGrupFromLocalStorage();
    const updatedTasks = currentTasks.map((currentTask) =>
      currentTask.id === task.id ? task : currentTask,
    );
    saveDataInStorageForKey(STORAGE_TASK_KEY, updatedTasks);
    return;
  }

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

export const deleteTaskInStorage = (task) => {
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

export const deleteGroupOfTasksInStorage = (id) => {
  const allGroupOfTasks = getGroupOfTasksDataFromLocalStorage();
  const currentGroup = allGroupOfTasks.filter((group) => group.id !== id);
  saveDataInStorageForKey(STORAGE_GROUP_OF_TASKS_KEY, currentGroup);
};
