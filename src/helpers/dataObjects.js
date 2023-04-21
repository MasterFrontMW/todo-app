export const createTasksGroupDTO = (taskGroupTitle) => ({
  id: Date.now().toString(),
  taskGroupTitle,
  tasks: [],
});

export const createTasksItemDTO = (taskTitle) => ({
  completed: false,
  cratedAt: new Date().toDateString(),
  endsAt: '',
  groupId: '',
  id: Date.now().toString(),
  message: taskTitle,
  updatedAt: '',
});
