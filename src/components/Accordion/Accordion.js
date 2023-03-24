import './Accordion.css';
import { ToDoItem } from '../ToDoItem/ToDoItem';
import {
  addTaskToGroupOfTaskToStorage,
  getGroupOfTasksDataFromLocalStorage,
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
  addToDoAccordionFieldInput.placeholder = 'Add new task to this group';

  const addToDoAccordionFieldAddButton = document.createElement('div');
  addToDoAccordionFieldAddButton.classList.add('add-to-do-accordion-button');
  addToDoAccordionFieldAddButton.innerHTML = 'add TASK';

  const accordionExpandSign = document.createElement('div');
  accordionExpandSign.classList.add('accordion-expand-sign');

  const accordionTaskCounter = document.createElement('div');
  accordionTaskCounter.classList.add('accordion-task-counter');
  accordionTaskCounter.dataset.counterid = id;
  accordionTaskCounter.innerText = tasksQuantity;

  const accordionItemContent = document.createElement('div');
  accordionItemContent.classList.add('accordion-content');

  tasks.forEach((task) => {
    accordionItemContent.appendChild(ToDoItem(task));
  });

  const handleAccordionCollapse = () => {
    accordionExpandSign.classList.toggle('active');
    accordionTitle.classList.toggle('active');
    if (accordionTitle.classList.contains('active')) {
      const accordionItemContentScroll = accordionItemContent.scrollHeight;
      accordionItemContent.style.maxHeight = `${accordionItemContentScroll}px`;
    } else {
      accordionItemContent.style.maxHeight = 0;
    }
  };

  function createTaskStorage(message) {
    return { completed: false, groupId: accordionState.id, id: Date.now().toString(), message };
  }

  const handleAddToDoButtonActiveClick = () => {
    const taskToStorage = createTaskStorage(addToDoAccordionFieldInput.value);
    accordionItemContent.prepend(ToDoItem(taskToStorage));
    addTaskToGroupOfTaskToStorage(taskToStorage);
    const actualGroupOfTasks = getGroupOfTasksDataFromLocalStorage();
    const actualTasksQuantity = actualGroupOfTasks.find((group) => group.id === id).tasks.length;
    accordionTaskCounter.innerText = actualTasksQuantity;
    addToDoAccordionFieldInput.value = '';

    if (accordionExpandSign.classList.contains('active')) {
      const accordionItemContentScroll = accordionItemContent.scrollHeight;
      accordionItemContent.style.maxHeight = `${accordionItemContentScroll}px`;
    } else {
      accordionItemContent.style.maxHeight = 0;
    }
  };

  accordionExpandSign.addEventListener('click', handleAccordionCollapse);
  addToDoAccordionFieldAddButton.addEventListener('click', handleAddToDoButtonActiveClick);

  accordionWrapper.appendChild(accordionItem);

  accordionItem.appendChild(accordionHeaderContainer);
  accordionHeaderContainer.appendChild(accordionFolderSign);
  accordionHeaderContainer.appendChild(accordionTitle);
  accordionHeaderContainer.appendChild(accordionLine);
  accordionHeaderContainer.appendChild(accordionExpandSign);
  accordionHeaderContainer.appendChild(accordionTaskCounter);
  accordionItem.appendChild(accordionItemContent);
  accordionItemContent.appendChild(addToDoAccordionField);
  addToDoAccordionField.appendChild(addToDoAccordionFieldInput);
  addToDoAccordionField.appendChild(addToDoAccordionFieldAddButton);

  return accordionWrapper;
};
