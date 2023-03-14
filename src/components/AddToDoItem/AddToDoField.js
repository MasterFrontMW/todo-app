import './AddToDoField.css';
import { ToDoItem } from '../ToDoItem/ToDoItem';
import { addTaskToStorage } from '../../helpers/storage';

export const AddToDoField = () => {
  const addToDoField = document.createElement('div');
  addToDoField.classList.add('add-to-do-item');
  addToDoField.innerHTML = `
      <input
        class="add-to-do-input"
        type="text"
        placeholder="Write something to do..."
      />
      <div  class="add-to-do-button">ADD TASK</div>
    `;
  return addToDoField;
};

export const TasksList = () => {
  const tasksList = document.createElement('div');
  tasksList.classList.add('tasks-list');
  return tasksList;
};

// method to initialize add to do (inside main.js) - we pass here html element of whole section
export const initializeAddToDoField = (addToDoSectionHTMLElement) => {
  const addToDoButton = addToDoSectionHTMLElement.querySelector('.add-to-do-button');
  const addToDoInput = addToDoSectionHTMLElement.querySelector('.add-to-do-input');
  const tasksList = document.querySelector('.tasks-list');

  function createTaskStorage(message) {
    return { completed: false, groupId: '', id: Date.now().toString(), message };
  }

  const handleAddToDoButtonClick = () => {
    if (!addToDoInput.value.trim()) {
      alert('Please insert the task');
      addToDoInput.value = '';
      return;
    }
    const todoTextMessage = addToDoInput.value;
    const taskInStorage = createTaskStorage(todoTextMessage);
    addTaskToStorage(taskInStorage);
    tasksList.prepend(ToDoItem(taskInStorage));
    addToDoInput.value = '';
  };

  addToDoButton.addEventListener('click', handleAddToDoButtonClick);
};
