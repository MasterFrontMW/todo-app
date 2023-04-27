/* eslint-disable */
import { Title } from './components/Title/Title';

import { initializeThemeMode } from './components/ThemeMode/ThemeMode';

import { Accordion } from './components/Accordion/Accordion';

import {
  getThemeModeFromLocalStorage,
  getGroupOfTasksDataFromLocalStorage,
  getListOfTasksWithoutGrupFromLocalStorage,
} from './helpers/storage';

import { ToDoItem } from './components/ToDoItem/ToDoItem';
import { MainActionButtonsField } from './components/MainActionButtonsField/MainActionButtonsField';
import { doc } from 'prettier';

// selectors
const pageTitle = document.querySelector('#title');
const themeModeSection = document.querySelector('#theme-mode');
const addToDoSection = document.querySelector('#todo-section');

// load data from local storage and render tasks

const dataGroupOnLoad = getGroupOfTasksDataFromLocalStorage();
const dataTasksWithoutGropOnLoad = getListOfTasksWithoutGrupFromLocalStorage();
const isDarkThemeModeOnLoad = getThemeModeFromLocalStorage();

console.log({ dataGroupOnLoad, dataTasksWithoutGropOnLoad });
const renderGroups = () => {
  dataGroupOnLoad.forEach((group) => addToDoSection.prepend(Accordion(group)));
};

const renderTasks = () => {
  dataTasksWithoutGropOnLoad.forEach((task) => addToDoSection.append(ToDoItem(task)));
};

const setTheme = () =>
  document.body.classList.add(`${isDarkThemeModeOnLoad ? 'theme-dark' : 'theme-light'}`);

const accordions = document.querySelector('.accordion-navbar-container');
console.log('accordions before initialisation', accordions);
const initializeFrontendApp = () => {
  setTheme();
  renderGroups();
  const accordions = document.querySelector('.accordion-navbar-container');
  console.log('accordions INSIDE initialisation AFTER render grups', accordions);
  renderTasks();
  pageTitle.innerHTML = Title();
  themeModeSection.append(initializeThemeMode(isDarkThemeModeOnLoad));
  addToDoSection.append(MainActionButtonsField());
};

initializeFrontendApp();
