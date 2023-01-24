import './ToDoItem.css';

import { editTaskInStorage } from '../helpers/storage';
import { deleteTaskStorage } from '../helpers/storage';
import { getTasksDataFromLocalStorage } from '../helpers/storage';

export const ToDoItem = (message, id) => {
  // CREATION OF ELEMENTS

  const toDoItemElement = document.createElement('div');
  toDoItemElement.classList.add('to-do-element-wrapper');
  toDoItemElement.dataset.id = id;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('to-do-element-checkbox');

  const checkmark = document.createElement('div');
  checkmark.classList.add('checkmark');

  const checkboxLabelWrapper = document.createElement('label');
  checkboxLabelWrapper.classList.add('checkbox-label-wrapper');

  const toDoMessage = document.createElement('p');
  toDoMessage.classList.add('task-message');
  toDoMessage.innerText = message;

  const editButton = document.createElement('div');
  editButton.classList.add('edit-button');

  const closeButton = document.createElement('div');
  closeButton.classList.add('close-button');

  // METHODS
  const editButtonHoverOn = () => {
    editButton.style.opacity = 1;
  };

  const editButtonHoverOff = () => {
    editButton.style.opacity = 0.4;
  };

  const checkboxClick = (e) => {
    if (checkbox.checked) {
      e.preventDefault();
      return;
    }
    toDoMessage.contentEditable = true;
    toDoMessage.focus();
    e.preventDefault();
    editButton.style.opacity = 1;
    const blurClick = () => {
      const newTaskTitle = toDoMessage.innerHTML;
      editTaskInStorage(id, newTaskTitle);
    };
    toDoMessage.addEventListener('blur', blurClick);
    editButton.removeEventListener('mouseout', editButtonHoverOff);
  };

  const handleEditToDoButtonClick = () => {
    if (!checkbox.checked) {
      toDoMessage.contentEditable = true;
      toDoMessage.focus();
      editButton.style.opacity = 1;
      const blurClick = () => {
        const newTaskTitle = toDoMessage.innerHTML;
        editTaskInStorage(id, newTaskTitle);
      };
      toDoMessage.addEventListener('blur', blurClick);
      editButton.removeEventListener('mouseout', editButtonHoverOff);
    }
  };

  const handleCheckToDoElement = () => {
    if (checkbox.checked) {
      toDoMessage.contentEditable = false;
      checkmark.classList.add('grey-border');
      toDoMessage.complete = true;
      return;
    }
    checkmark.classList.remove('grey-border');
  };

  const handleDeleteTaskButtonClick = () => {
    toDoItemElement.remove();
    deleteTaskStorage(id);
  };

  const clickOutsideTask = (e) => {
    if (e.target !== toDoMessage && e.target !== editButton) {
      toDoMessage.contentEditable = false;
      editButton.style.opacity = 0.4;
      editButton.addEventListener('mouseover', editButtonHoverOn);
      editButton.addEventListener('mouseout', editButtonHoverOff);
    }
  };

  toDoMessage.addEventListener('click', checkboxClick);
  closeButton.addEventListener('click', handleDeleteTaskButtonClick);
  editButton.addEventListener('click', handleEditToDoButtonClick);
  checkbox.addEventListener('click', handleCheckToDoElement);
  document.body.addEventListener('click', clickOutsideTask);

  // INJECT ELEMENTS WITH PROPER ORDER AND RETURN WHOLE TODO ELEMENT
  checkboxLabelWrapper.appendChild(checkbox);
  checkboxLabelWrapper.appendChild(checkmark);
  checkboxLabelWrapper.appendChild(toDoMessage);
  toDoItemElement.appendChild(checkboxLabelWrapper);
  toDoItemElement.appendChild(editButton);
  toDoItemElement.appendChild(closeButton);

  return toDoItemElement;
};
