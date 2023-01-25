// HERE WE WILL WRITE SOME ENDING JS SCRIPTS TO MANIPULATE PAGE
import './lib/firebase';
import { Title } from './components/Title/Title';

import { Accordion, initializeAccordion } from './components/Accordion/Accordion';

import { AddToDoField, initializeAddToDoField } from './components/AddToDoItem/AddToDoField';

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
