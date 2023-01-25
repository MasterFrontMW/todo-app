// HERE WE WILL WRITE SOME ENDING JS SCRIPTS TO MANIPULATE PAGE
import './src/utils/firebase';
import { Title } from './src/components/Title/Title';

import { Accordion, initializeAccordion } from './src/components/Accordion/Accordion';

import { AddToDoField, initializeAddToDoField } from './src/components/AddToDoItem/AddToDoField';

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
