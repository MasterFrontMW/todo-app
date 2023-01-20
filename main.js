// HERE WE WILL WRITE SOME ENDING JS SCRIPTS TO MANIPULATE PAGE
import './src/utils/firebase';
import { Title } from './src/Title/Title';
import { AddToDoField, initializeAddToDoField } from './src/AddToDoItem/AddToDoField';
import { getTasksDataFromLocalStorage } from './src/helpers/storage';
import { ToDoItem } from './src/ToDoItem/ToDoItem';

// selectors
const pageTitle = document.querySelector('#title');
const addToDoSection = document.querySelector('#todo-section');

// load data from local storage and render tasks
const dataOnLoad = getTasksDataFromLocalStorage();
const renderTasks = () => {
  dataOnLoad.forEach((task, index) => {
    addToDoSection.prepend(ToDoItem(task, index));
  });
};

const initializeApp = () => {
  renderTasks();
  pageTitle.innerHTML = Title();
  addToDoSection.append(AddToDoField());

  initializeAddToDoField(addToDoSection);
};

initializeApp();
