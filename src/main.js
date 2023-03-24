/* eslint-disable */
import { Title } from './components/Title/Title';

import { Accordion } from './components/Accordion/Accordion';

import {
  AddToDoField,
  initializeAddToDoField,
  TasksList,
} from './components/AddToDoItem/AddToDoField';

import { GroupTasksField } from './components/GroupTasksField/GroupTasksField';

import {
  getGroupOfTasksDataFromLocalStorage,
  getTasksDataFromLocalStorage,
} from './helpers/storage';

import { ToDoItem } from './components/ToDoItem/ToDoItem';

// selectors
const pageTitle = document.querySelector('#title');
const addToDoSection = document.querySelector('#todo-section');

// load data from local storage and render tasks

const dataGroupOnLoad = getGroupOfTasksDataFromLocalStorage();

export const renderGroups = () => {
  dataGroupOnLoad.forEach((group) => {
    addToDoSection.prepend(Accordion(group));
  });
};
const dataOnLoad = getTasksDataFromLocalStorage();
const tasksList = TasksList();
addToDoSection.prepend(tasksList);

export const renderTasks = () => {
  dataOnLoad.forEach((task) => {
    tasksList.prepend(ToDoItem(task));
  });
};

const initializeFrontendApp = () => {
  renderGroups();
  // renderTasks();
  pageTitle.innerHTML = Title();
  addToDoSection.append(AddToDoField());
  addToDoSection.append(GroupTasksField());
  initializeAddToDoField(addToDoSection);
};

initializeFrontendApp();
