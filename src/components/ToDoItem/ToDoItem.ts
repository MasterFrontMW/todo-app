import './ToDoItem.css';

import { updateTaskInStorage, deleteTaskStorage } from '../../helpers/storage';

export type ToDoItemProps = {
  name: string;
  id: string;
  completed?: boolean;
};

export const ToDoItem = ({ name, id, completed = false }: ToDoItemProps) => {
  // CREATION OF ELEMENTS
  const taskState = { name, id, completed };

  console.log({ name, id, completed });
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
  toDoMessage.innerText = name;

  const editButton = document.createElement('div');
  editButton.classList.add('edit-button');

  const closeButton = document.createElement('div');
  closeButton.classList.add('close-button');

  // METHODS
  const editButtonHoverOn = () => {
    editButton.style.opacity = '1';
  };

  const editButtonHoverOff = () => {
    editButton.style.opacity = '0.4';
  };

  const handleOnCheckboxClick = () => {
    editButton.style.opacity = '1';
    taskState.completed = !taskState.completed;

    toDoMessage.contentEditable = taskState.completed ? 'false' : 'true';
    checkmark.classList.toggle('grey-border');

    updateTaskInStorage(id, taskState);
  };

  const handleEditToDoButtonClick = () => {
    if (taskState.completed) {
      return;
    }

    toDoMessage.contentEditable = 'true';
    toDoMessage.focus();
    editButton.style.opacity = '1';
    taskState.name = toDoMessage.innerText;
  };

  const handleDeleteTaskButtonClick = () => {
    toDoItemElement.remove();
    deleteTaskStorage(id);
  };

  const clickOutsideTask = (e) => {
    if (e.target !== toDoMessage && e.target !== editButton) {
      toDoMessage.contentEditable = 'false';
      editButton.style.opacity = '0.4';
    }
  };

  closeButton.addEventListener('click', handleDeleteTaskButtonClick);
  checkbox.addEventListener('click', handleOnCheckboxClick);
  checkboxLabelWrapper.addEventListener('click', (e) => {
    console.log(e.target, e.currentTarget);
    if (e.target !== checkmark && e.target !== checkbox) {
      e.preventDefault();
    }
  });
  document.body.addEventListener('click', clickOutsideTask);
  editButton.addEventListener('click', handleEditToDoButtonClick);
  toDoMessage.addEventListener('click', handleEditToDoButtonClick);
  toDoMessage.addEventListener('blur', () => {
    taskState.name = toDoMessage.innerText;
    updateTaskInStorage(id, taskState);
  });

  // INJECT ELEMENTS WITH PROPER ORDER AND RETURN WHOLE TODO ELEMENT
  checkboxLabelWrapper.appendChild(checkbox);
  checkboxLabelWrapper.appendChild(checkmark);
  checkboxLabelWrapper.appendChild(toDoMessage);
  toDoItemElement.appendChild(checkboxLabelWrapper);
  toDoItemElement.appendChild(editButton);
  toDoItemElement.appendChild(closeButton);

  return toDoItemElement;
};
