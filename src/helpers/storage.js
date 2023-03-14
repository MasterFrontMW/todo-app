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

// THIS IS ANOTHER SOLUTION OF updateTaskInGroupStorage LEFT BY PURPOSE

// export const updateTaskInGroupStorage = (task) => {
//   const currentGroupOfTasks = getGroupOfTasksDataFromLocalStorage();
//   console.log(currentGroupOfTasks, task);
//   const foundTaskGroup = currentGroupOfTasks.find((group) => {
//     return group.tasks.find((item) => item.id === task.id);
//   });
//   const newUpdatedTasksInGroup = foundTaskGroup.tasks.map((item) =>
//     item.id === task.id ? task : item,
//   );
//   const newUpdatedGroup = {
//     ...foundTaskGroup,
//     tasks: newUpdatedTasksInGroup,
//   };

//   const updatedAllGroups = currentGroupOfTasks.map((groupItem) =>
//     groupItem.id === newUpdatedGroup.id ? newUpdatedGroup : groupItem,
//   );
//   saveDataInStorageForKey(STORAGE_GROUP_OF_TASKS_KEY, updatedAllGroups);
// };

export const updateTaskInGroupStorage = (task) => {
  const currentGroupOfTasks = getGroupOfTasksDataFromLocalStorage();
  const updatedAllGroups = [...currentGroupOfTasks].map((group) => {
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

export const deleteTaskInGroupStorage = (task, id) => {
  const currentGroupOfTasks = getGroupOfTasksDataFromLocalStorage();
  const foundGroupOfTasks = [...currentGroupOfTasks].find((group) => group.id === task.groupId);
  const indexOfDeletedTask = foundGroupOfTasks.tasks.findIndex((tasks) => tasks.id === id);
  const newListOfTasksInFoundGroupOfTasks = foundGroupOfTasks.tasks.filter(
    (tasksList) => tasksList !== foundGroupOfTasks.tasks[indexOfDeletedTask],
  );
  foundGroupOfTasks.tasks = newListOfTasksInFoundGroupOfTasks;
  const updatedGroupsOfTasks = currentGroupOfTasks.map((group) =>
    group.id === foundGroupOfTasks.id ? foundGroupOfTasks : group,
  );

  saveDataInStorageForKey(STORAGE_GROUP_OF_TASKS_KEY, updatedGroupsOfTasks);
};

// THIS IS ANOTHER SOLUTION OF deleteTaskInGroupStorage LEFT BY PURPOSE

// export const deleteTaskInGroupStorage = (task, id) => {
//   const currentGroupOfTasks = getGroupOfTasksDataFromLocalStorage();
//   console.log(currentGroupOfTasks, task);
//   const updatedAllGroups = [...currentGroupOfTasks].map((group) => {
//     if (group.id === task.groupId) {
//       console.log(group.tasks);
//       const indexOfDeletedTask = group.tasks.findIndex((tasks) => tasks.id === id);
//       console.log(indexOfDeletedTask);
//       return {
//         ...group,
//         tasks: group.tasks.filter((tasksList) => tasksList !== group.tasks[indexOfDeletedTask]),
//       };
//     }
//     return group;
//   });

//   saveDataInStorageForKey(STORAGE_GROUP_OF_TASKS_KEY, updatedAllGroups);
// };

export const addGroupOfTaskToStorage = (taskGroupTitle) => {
  const currentGroupOfTasks = getGroupOfTasksDataFromLocalStorage();
  const newGroupOfTasks = [...currentGroupOfTasks, taskGroupTitle];
  saveDataInStorageForKey(STORAGE_GROUP_OF_TASKS_KEY, newGroupOfTasks);
};

export const getTasksInGroupOfTasksDataFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem(STORAGE_GROUP_OF_TASKS_KEY)) || [];
};

export const addTaskToGroupOfTaskToStorage = (taskTitle) => {
  const currentTasksInGroupOfTasks = getTasksInGroupOfTasksDataFromLocalStorage();
  const newGroupOfTasks = [...currentTasksInGroupOfTasks, taskTitle];
  saveDataInStorageForKey(STORAGE_GROUP_OF_TASKS_KEY, newGroupOfTasks);
};

export const updateGroupofTasksDataInStorage = (tasksGroup) => {
  const currentTasksGroups = getGroupOfTasksDataFromLocalStorage();
  const updatedTasksGroups = currentTasksGroups.map((currentTaskGroup) => {
    if (currentTaskGroup.id === tasksGroup.id) {
      return tasksGroup;
    }
    return currentTaskGroup;
  });
  saveDataInStorageForKey(STORAGE_GROUP_OF_TASKS_KEY, updatedTasksGroups);
};
