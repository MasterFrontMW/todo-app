/* eslint-disable */
import { Title } from './components/Title/Title';

import { Accordion, initializeAccordion } from './components/Accordion/Accordion';

import { AddToDoField, initializeAddToDoField } from './components/AddToDoItem/AddToDoField';

import { getTasksDataFromLocalStorage } from './helpers/storage';

import { ToDoItem } from './components/ToDoItem/ToDoItem';



// selectors
const pageTitle = document.querySelector('#title');
const accordion = document.querySelector('#accordion');
const addToDoSection = document.querySelector('#todo-section');

// load data from local storage and render tasks
const dataOnLoad = getTasksDataFromLocalStorage();
export const renderTasks = () => {
  dataOnLoad.forEach((task) => {
    addToDoSection.prepend(ToDoItem(task));
  });
};

const initializeFrontendApp = () => {
  renderTasks();
  pageTitle.innerHTML = Title();
  addToDoSection.append(AddToDoField());
  accordion.innerHTML = Accordion();
  initializeAccordion(accordion);
  initializeAddToDoField(addToDoSection);
};

initializeFrontendApp();
