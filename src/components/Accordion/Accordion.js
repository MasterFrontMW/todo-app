import './Accordion.css';
import { ToDoItem } from '../ToDoItem/ToDoItem';
import {
  addTaskInStorage,
  getGroupOfTasksDataFromLocalStorage,
  deleteGroupOfTasksInStorage,
} from '../../helpers/storage';

export const Accordion = ({ id, taskGroupTitle, tasks }) => {
  const accordionState = { id, taskGroupTitle, tasks };

  const groupOfTasks = getGroupOfTasksDataFromLocalStorage();
  const tasksQuantity = groupOfTasks.find((group) => group.id === id).tasks.length;

  const accordionWrapper = document.createElement('div');
  accordionWrapper.classList.add('accordion-wrapper');
  accordionWrapper.dataset.id = id;

  const accordionItem = document.createElement('div');
  accordionItem.classList.add('accordion-item');

  const accordionHeaderContainer = document.createElement('div');
  accordionHeaderContainer.classList.add('accordion-header-container');

  const accordionNavbarContainer = document.createElement('div');
  accordionNavbarContainer.classList.add('accordion-navbar-container');

  const accordionFolderSign = document.createElement('div');
  accordionFolderSign.classList.add('accordion-folder-sign');

  const accordionTitle = document.createElement('div');
  accordionTitle.classList.add('accordion-title');
  accordionTitle.innerText = taskGroupTitle;

  const accordionLine = document.createElement('div');
  accordionLine.classList.add('accordion-line');

  const addToDoAccordionField = document.createElement('div');
  addToDoAccordionField.classList.add('add-to-do-accordion-field');
  addToDoAccordionField.style.display = 'flex';

  const addToDoAccordionFieldInput = document.createElement('input');
  addToDoAccordionFieldInput.classList.add('add-to-do-accordion-input');
  addToDoAccordionFieldInput.placeholder = 'Write new task...';

  const addToDoAccordionFieldInputWrapper = document.createElement('div');
  addToDoAccordionFieldInputWrapper.classList.add('add-to-do-accordion-input-wrapper');

  const addToDoAccordionFieldAddButton = document.createElement('button');
  addToDoAccordionFieldAddButton.classList.add('add-to-do-accordion-button');
  addToDoAccordionFieldAddButton.innerHTML = 'add TASK';

  const accordionExpandSign = document.createElement('div');
  accordionExpandSign.classList.add('accordion-expand-sign');

  const accordionDeleteSign = document.createElement('div');
  accordionDeleteSign.classList.add('accordion-delete-sign');

  const accordionTaskCounter = document.createElement('div');
  accordionTaskCounter.classList.add('accordion-task-counter');
  accordionTaskCounter.dataset.counterid = id;
  accordionTaskCounter.innerText = tasksQuantity;

  const accordionItemContent = document.createElement('div');
  accordionItemContent.classList.add('accordion-content');

  tasks.forEach((task) => {
    accordionItemContent.prepend(ToDoItem(task));
  });

  const handleAccordionExpand = () => {
    accordionItem.classList.toggle('active');
    if (accordionItem.classList.contains('active')) {
      const expandedHeight = accordionItemContent.scrollHeight;
      accordionItemContent.style.maxHeight = `${expandedHeight}px`;
    } else {
      accordionItemContent.style.maxHeight = 0;
    }
  };

  function createTaskStorage(message) {
    return { completed: false, groupId: accordionState.id, id: Date.now().toString(), message };
  }

  const handleAddToDoButtonActiveClick = () => {
    if (!addToDoAccordionFieldInput.value.trim()) {
      addToDoAccordionFieldInput.focus();
      addToDoAccordionFieldInput.value = '';
      return;
    }
    const taskToStorage = createTaskStorage(addToDoAccordionFieldInput.value);
    accordionItemContent.prepend(ToDoItem(taskToStorage));
    addTaskInStorage(taskToStorage);
    const actualGroupOfTasks = getGroupOfTasksDataFromLocalStorage();
    const actualTasksQuantity = actualGroupOfTasks.find((group) => group.id === id).tasks.length;
    accordionTaskCounter.innerText = actualTasksQuantity;
    addToDoAccordionFieldInput.value = '';

    if (accordionItem.classList.contains('active')) {
      const newExpandedHeight = accordionItemContent.scrollHeight;
      accordionItemContent.style.maxHeight = `${newExpandedHeight}px`;
    } else {
      accordionItemContent.style.maxHeight = 0;
    }
  };

  accordionNavbarContainer.addEventListener('click', handleAccordionExpand);
  addToDoAccordionFieldAddButton.addEventListener('click', handleAddToDoButtonActiveClick);
  accordionDeleteSign.addEventListener('click', () => {
    accordionWrapper.remove();
    deleteGroupOfTasksInStorage(id);
  });

  accordionWrapper.appendChild(accordionItem);
  accordionItem.appendChild(accordionHeaderContainer);
  accordionItem.appendChild(accordionItemContent);
  accordionHeaderContainer.appendChild(accordionNavbarContainer);
  accordionHeaderContainer.appendChild(accordionTaskCounter);
  accordionHeaderContainer.appendChild(accordionDeleteSign);
  accordionNavbarContainer.appendChild(accordionFolderSign);
  accordionNavbarContainer.appendChild(accordionTitle);
  accordionNavbarContainer.appendChild(accordionLine);
  accordionNavbarContainer.appendChild(accordionExpandSign);
  accordionItemContent.appendChild(addToDoAccordionField);
  addToDoAccordionFieldInputWrapper.appendChild(addToDoAccordionFieldInput);
  addToDoAccordionField.appendChild(addToDoAccordionFieldInputWrapper);
  addToDoAccordionField.appendChild(addToDoAccordionFieldAddButton);

  return accordionWrapper;
};
