// HERE WE WILL WRITE SOME ENDING JS SCRIPTS TO MANIPULATE PAGE

import { Title } from "./src/Title/Title.js";

import { Accordion,
        accordionCollapse, 
} from "./src/Accordion/Accordion";

import {
  AddToDoField,
  initializeAddToDoField,
} from "./src/AddToDoItem/AddToDoField.js";

//selectors

const pageTitle = document.querySelector("#title");
const accordion = document.querySelector("#accordion");
const addToDoSection1 = document.querySelector("#todo-section");



const initializeApp = () => {
  pageTitle.innerHTML = Title();
  addToDoSection1.innerHTML = AddToDoField();
  accordion.innerHTML = Accordion();
  accordionCollapse(accordion);
  initializeAddToDoField(addToDoSection1);
};

initializeApp();
