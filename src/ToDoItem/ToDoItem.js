import './ToDoItem.css';

export const ToDoItem = (message, id) => {
  const toDoItemElement = document.createElement('div');
  toDoItemElement.classList.add('to-do-element-wrapper');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('to-do-element-checkbox');

  const toDoMessage = document.createElement('p');
  toDoMessage.classList.add('task-message');
  toDoMessage.innerText = message;

  const checkToDoElement = (e) => {
    if (e.target.checked) {
      toDoMessage.style.textDecoration = 'line-through';
      toDoMessage.style.opacity = 0.4;
    } else {
      toDoMessage.style.textDecoration = 'none';
    }
    toDoMessage.style.opacity = 1;
  };

  const editButton = document.createElement('div');
  editButton.classList.add('edit-button');

  const handleEditToDoClick = () => {
    if (checkbox.checked) {
      return;
    }
    toDoMessage.contentEditable = true;
    toDoMessage.focus();
  };

  const hadnleDeleteTaskButtonClick = () => {
    // TODO: remove task from storage
    toDoItemElement.remove();
  };

  const closeButton = document.createElement('div');
  closeButton.classList.add('close-button');

  closeButton.addEventListener('click', () => hadnleDeleteTaskButtonClick);
  editButton.addEventListener('click', handleEditToDoClick);
  checkbox.addEventListener('click', checkToDoElement);
  toDoItemElement.appendChild(checkbox);
  toDoItemElement.appendChild(toDoMessage);
  toDoItemElement.appendChild(editButton);
  toDoItemElement.appendChild(closeButton);
  toDoItemElement.dataset.id = id;

  return toDoItemElement;
};
