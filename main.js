// HERE WE WILL WRITE SOME ENDING JS SCRIPTS TO MANIPULATE PAGE

import { Title } from './src/Title/Title';

import { AddToDoField, initializeAddToDoField } from './src/AddToDoItem/AddToDoField';
import { getTasksDataFromLocalStorage } from './src/helpers/storage';
import { ToDoItem } from './src/ToDoItem/ToDoItem';
import { Accordion, initializeAccordion } from './src/Accordion/Accordion';

// selectors
const pageTitle = document.querySelector('#title');
const accordion = document.querySelector('#accordion');
const addToDoSection = document.querySelector('#todo-section');

// load data from local storage and render tasks
const dataOnLoad = getTasksDataFromLocalStorage();
export const renderTasks = () => {
  dataOnLoad.forEach((task) => {
    addToDoSection.prepend(ToDoItem(task.name, task.id));
  });
};

const initializeApp = () => {
  renderTasks();
  pageTitle.innerHTML = Title();
  addToDoSection.append(AddToDoField());
  accordion.innerHTML = Accordion();
  initializeAccordion(accordion);
  initializeAddToDoField(addToDoSection);
};

initializeApp();
