// HERE WE WILL WRITE SOME ENDING JS SCRIPTS TO MANIPULATE PAGE

import { Title } from './src/Title/Title';

import { Accordion, initializeAccordion } from './src/Accordion/Accordion';

import { AddToDoField, initializeAddToDoField } from './src/AddToDoItem/AddToDoField';

// selectors

const pageTitle = document.querySelector('#title');
const accordion = document.querySelector('#accordion');
const addToDoSection1 = document.querySelector('#todo-section');

const initializeApp = () => {
  pageTitle.innerHTML = Title();
  addToDoSection1.innerHTML = AddToDoField();
  accordion.innerHTML = Accordion();
  initializeAccordion(accordion);
  initializeAddToDoField(addToDoSection1);
};

initializeApp();
