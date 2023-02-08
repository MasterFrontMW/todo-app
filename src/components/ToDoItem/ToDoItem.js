import './ToDoItem.css';

import { editTaskInStorage, deleteTaskStorage, updateCheckedTasks } from '../../helpers/storage';

export const ToDoItem = (message, id, completed) => {
  // CREATION OF ELEMENTS

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

  const toDoMessage = document.createElement('p');
  toDoMessage.classList.add('task-message');
  toDoMessage.innerText = message;

  const editTaskButton = document.createElement('div');
  editTaskButton.classList.add('edit-button');

  const deleteTaskButton = document.createElement('div');
  deleteTaskButton.classList.add('close-button');

  // METHODS

  const handleMessageOnBlur = () => {
    const newTaskTitle = toDoMessage.innerHTML;
    editTaskInStorage(id, newTaskTitle);
  };

  const handleToDoMessageOnClick = (e) => {
    if (checkbox.checked) {
      e.preventDefault();
      return;
    }
    toDoMessage.contentEditable = true;
    toDoMessage.focus();
    e.preventDefault();
    editTaskButton.style.opacity = 1;
    toDoMessage.addEventListener('blur', handleMessageOnBlur);
    editTaskButton.removeEventListener('mouseout', () => {
      editTaskButton.style.opacity = 0.4;
    });
  };

  const handleEditToDoButtonClick = () => {
    if (!checkbox.checked) {
      toDoMessage.contentEditable = true;
      toDoMessage.focus();
      editTaskButton.style.opacity = 1;
      toDoMessage.addEventListener('blur', handleMessageOnBlur);
      editTaskButton.removeEventListener('mouseout', () => {
        editTaskButton.style.opacity = 0.4;
      });
    }
  };

  const handleCheckToDoElement = () => {
    updateCheckedTasks(id, checkbox.checked);
    if (checkbox.checked) {
      toDoMessage.contentEditable = false;
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
    if (e.target !== toDoMessage && e.target !== editTaskButton) {
      toDoMessage.contentEditable = false;
      editTaskButton.style.opacity = 0.4;
      editTaskButton.addEventListener('mouseover', () => {
        editTaskButton.style.opacity = 1;
      });
      editTaskButton.addEventListener('mouseout', () => {
        editTaskButton.style.opacity = 0.4;
      });
    }
  };

  toDoMessage.addEventListener('click', handleToDoMessageOnClick);
  deleteTaskButton.addEventListener('click', handleDeleteTaskButtonClick);
  editTaskButton.addEventListener('click', handleEditToDoButtonClick);
  checkbox.addEventListener('click', handleCheckToDoElement);
  document.body.addEventListener('click', clickOutsideTask);

  // INJECT ELEMENTS WITH PROPER ORDER AND RETURN WHOLE TODO ELEMENT
  checkboxLabelWrapper.appendChild(checkbox);
  checkboxLabelWrapper.appendChild(checkmark);
  checkboxLabelWrapper.appendChild(toDoMessage);
  toDoItemElement.appendChild(checkboxLabelWrapper);
  toDoItemElement.appendChild(editTaskButton);
  toDoItemElement.appendChild(deleteTaskButton);

  return toDoItemElement;
};
