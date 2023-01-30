import './AddToDoField.css';
import { ToDoItem } from '../ToDoItem/ToDoItem';
import { addTaskToStorage } from '../../helpers/storage';

export const AddToDoField = () => {
  const addToDoField = document.createElement('div');
  addToDoField.classList.add('add-to-do-item');
  addToDoField.innerHTML = `
      <div class="icon-box"></div>
      <input
        class="add-to-do-input"
        type="text"
        placeholder="Write something to do..."
      />
      <div  class="add-to-do-button">ADD TASK</div>
    `;
  return addToDoField;
};

// method to initialize add to do (inside main.js) - we pass here html element of whole section
export const initializeAddToDoField = (addToDoSectionHTMLElement) => {
  const addToDoButton = addToDoSectionHTMLElement.querySelector('.add-to-do-button');
  const addToDoInput = addToDoSectionHTMLElement.querySelector('.add-to-do-input');

  function createTaskStorage(name) {
    return { complete: false, id: Date.now().toString(), name };
  }

  const handleAddToDoButtonClick = () => {
    const todoTextMessage = addToDoInput.value;
    const taskInStorage = createTaskStorage(todoTextMessage);
    addTaskToStorage(taskInStorage);
    const idOfNewTask = taskInStorage.id;
    addToDoSectionHTMLElement.prepend(ToDoItem(todoTextMessage, idOfNewTask));
    addToDoInput.value = '';
  };

  addToDoButton.addEventListener('click', handleAddToDoButtonClick);
};
