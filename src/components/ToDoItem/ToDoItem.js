import './ToDoItem.css';

import { updateTaskInGroupStorage, deleteTaskInGroupStorage } from '../../helpers/storage';

export const ToDoItem = ({
  message,
  id,
  completed = false,
  createdAt,
  groupId,
  updatedAt,
  endsAt,
}) => {
  // CREATION OF ELEMENTS
  const taskState = { completed, createdAt, endsAt, groupId, id, message, updatedAt };

  const toDoItemElement = document.createElement('div');
  toDoItemElement.classList.add('to-do-element-wrapper');
  toDoItemElement.dataset.id = id;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('to-do-element-checkbox');
  checkbox.checked = completed;

  const checkmark = document.createElement('div');
  checkmark.classList.add('checkmark');
  if (checkbox.checked) {
    checkmark.classList.add('grey-border');
  }

  const checkboxLabelWrapper = document.createElement('label');
  checkboxLabelWrapper.classList.add('checkbox-label-wrapper');

  const taskMessage = document.createElement('p');
  taskMessage.classList.add('task-message');
  taskMessage.innerText = message;

  const editTaskButton = document.createElement('div');
  editTaskButton.classList.add('edit-button');

  const deleteTaskButton = document.createElement('div');
  deleteTaskButton.classList.add('close-button');

  // METHODS

  const handleEditToDoMessage = () => {
    if (!checkbox.checked) {
      taskMessage.contentEditable = true;
      taskMessage.focus();
      editTaskButton.classList.add('black-button');
    }
  };

  const handleCheckToDoElement = () => {
    taskState.completed = !taskState.completed;
    updateTaskInGroupStorage(taskState);
    checkmark.classList.toggle('grey-border');
  };

  const handleDeleteTaskButtonClick = () => {
    toDoItemElement.remove();
    deleteTaskInGroupStorage(taskState, id);
  };

  const handleClickOutsideTask = (e) => {
    if (e.target !== taskMessage && e.target !== editTaskButton) {
      taskMessage.contentEditable = false;
    }
  };

  taskMessage.addEventListener('blur', () => {
    taskState.message = taskMessage.innerText;
    updateTaskInGroupStorage(taskState);
    editTaskButton.classList.remove('black-button');
  });
  taskMessage.addEventListener('click', (e) => {
    e.preventDefault();
    handleEditToDoMessage();
  });
  deleteTaskButton.addEventListener('click', handleDeleteTaskButtonClick);
  editTaskButton.addEventListener('click', () => {
    handleEditToDoMessage();
  });
  checkbox.addEventListener('click', handleCheckToDoElement);
  document.body.addEventListener('click', handleClickOutsideTask);

  // INJECT ELEMENTS WITH PROPER ORDER AND RETURN WHOLE TODO ELEMENT
  checkboxLabelWrapper.appendChild(checkbox);
  checkboxLabelWrapper.appendChild(checkmark);
  checkboxLabelWrapper.appendChild(taskMessage);
  toDoItemElement.appendChild(checkboxLabelWrapper);
  toDoItemElement.appendChild(editTaskButton);
  toDoItemElement.appendChild(deleteTaskButton);

  return toDoItemElement;
};
