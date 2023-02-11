import './ToDoItem.css';

import { deleteTaskStorage, updateTaskInStorage } from '../../helpers/storage';

export const ToDoItem = ({ message, id, completed }) => {
  // CREATION OF ELEMENTSy

  const toDoItemElement = document.createElement('div');
  toDoItemElement.classList.add('to-do-element-wrapper');
  toDoItemElement.dataset.id = id;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('to-do-element-checkbox');
  checkbox.checked = completed;

  const checkmark = document.createElement('div');
  checkmark.classList.add('checkmark');

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

  const handleMessageOnBlur = () => {
    updateTaskInStorage(id, checkbox.checked, taskMessage.innerText);
  };

  const handleMouseOut = () => {
    editTaskButton.style.opacity = 0.4;
  };

  const editingToDoMessage = () => {
    if (!checkbox.checked) {
      taskMessage.contentEditable = true;
      taskMessage.focus();
      editTaskButton.style.opacity = 1;
      editTaskButton.removeEventListener('mouseout', handleMouseOut);
    }
  };

  const handleToDoMessageOnClick = (e) => {
    e.preventDefault();
    editingToDoMessage();
  };

  const handleEditTaskButtonClick = () => {
    editingToDoMessage();
  };

  const handleCheckToDoElement = () => {
    updateTaskInStorage(id, checkbox.checked, taskMessage.innerText);
    if (checkbox.checked) {
      taskMessage.contentEditable = false;
      checkmark.classList.add('grey-border');
      return;
    }
    checkmark.classList.remove('grey-border');
  };

  const handleDeleteTaskButtonClick = () => {
    toDoItemElement.remove();
    deleteTaskStorage(id);
  };

  const clickOutsideTask = (e) => {
    if (e.target !== taskMessage && e.target !== editTaskButton) {
      taskMessage.contentEditable = false;
      editTaskButton.style.opacity = 0.4;
      editTaskButton.addEventListener('mouseover', () => {
        editTaskButton.style.opacity = 1;
      });
      editTaskButton.addEventListener('mouseout', handleMouseOut);
    }
  };

  taskMessage.addEventListener('blur', handleMessageOnBlur);
  taskMessage.addEventListener('click', handleToDoMessageOnClick);
  deleteTaskButton.addEventListener('click', handleDeleteTaskButtonClick);
  editTaskButton.addEventListener('click', handleEditTaskButtonClick);
  checkbox.addEventListener('click', handleCheckToDoElement);
  document.body.addEventListener('click', clickOutsideTask);

  // INJECT ELEMENTS WITH PROPER ORDER AND RETURN WHOLE TODO ELEMENT
  checkboxLabelWrapper.appendChild(checkbox);
  checkboxLabelWrapper.appendChild(checkmark);
  checkboxLabelWrapper.appendChild(taskMessage);
  toDoItemElement.appendChild(checkboxLabelWrapper);
  toDoItemElement.appendChild(editTaskButton);
  toDoItemElement.appendChild(deleteTaskButton);

  return toDoItemElement;
};
