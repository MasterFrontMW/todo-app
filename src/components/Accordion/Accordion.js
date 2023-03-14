import './Accordion.css';
import { ToDoItem } from '../ToDoItem/ToDoItem';
import { updateGroupofTasksDataInStorage } from '../../helpers/storage';

export const Accordion = ({ id, taskGroupTitle, tasks }) => {
  const accordionState = { id, taskGroupTitle, tasks };

  const accordionWrapper = document.createElement('div');
  accordionWrapper.classList.add('accordion-wrapper');
  accordionWrapper.dataset.id = id;

  const accordionItem = document.createElement('div');
  accordionItem.classList.add('accordion-item');

  const accordionTitle = document.createElement('div');
  accordionTitle.classList.add('accordion-title');
  accordionTitle.innerText = taskGroupTitle;

  const addToDoButton = document.createElement('div');
  addToDoButton.classList.add('add-to-do-group-button');
  addToDoButton.innerHTML = 'ADD TASK';

  const addToDoAccordionField = document.createElement('div');
  addToDoAccordionField.classList.add('add-to-do-accordion-field');
  addToDoAccordionField.style.display = 'none';

  const addToDoAccordionFieldInput = document.createElement('input');
  addToDoAccordionFieldInput.classList.add('add-to-do-accordion-input');
  addToDoAccordionFieldInput.placeholder = 'Add new task to this group';

  const addToDoAccordionFieldAddButton = document.createElement('div');
  addToDoAccordionFieldAddButton.classList.add('add-to-do-accordion-button');
  addToDoAccordionFieldAddButton.innerHTML = 'add TASK';

  const accordionPlusSign = document.createElement('div');
  accordionPlusSign.classList.add('accordion-plus-sign');

  const accordionItemContent = document.createElement('div');
  accordionItemContent.classList.add('accordion-content');

  tasks.forEach((task) => {
    accordionItemContent.appendChild(ToDoItem(task));
  });

  const handleAddToDoButtonClick = () => {
    addToDoButton.style.display = 'none';
    addToDoAccordionField.style.display = 'flex';
  };

  const handleAccordionCollapse = () => {
    accordionPlusSign.classList.toggle('active');
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
    accordionItemContent.appendChild(ToDoItem(taskToStorage));
    accordionState.tasks.push(taskToStorage);
    addToDoAccordionFieldInput.value = '';
    updateGroupofTasksDataInStorage(accordionState);
    if (!accordionPlusSign.classList.contains('active')) {
      accordionPlusSign.classList.toggle('active');
    }

    if (!accordionTitle.classList.contains('active')) {
      accordionTitle.classList.toggle('active');
    }

    if (accordionPlusSign.classList.contains('active')) {
      const accordionItemContentScroll = accordionItemContent.scrollHeight;
      accordionItemContent.style.maxHeight = `${accordionItemContentScroll}px`;
    } else {
      accordionItemContent.style.maxHeight = 0;
    }
  };

  accordionPlusSign.addEventListener('click', handleAccordionCollapse);
  addToDoButton.addEventListener('click', handleAddToDoButtonClick);
  addToDoAccordionFieldAddButton.addEventListener('click', handleAddToDoButtonActiveClick);

  accordionWrapper.appendChild(accordionItem);
  accordionItem.appendChild(accordionTitle);
  accordionItem.appendChild(accordionItemContent);
  accordionTitle.appendChild(addToDoButton);
  accordionTitle.appendChild(addToDoAccordionField);
  accordionTitle.appendChild(accordionPlusSign);
  addToDoAccordionField.appendChild(addToDoAccordionFieldInput);
  addToDoAccordionField.appendChild(addToDoAccordionFieldAddButton);

  return accordionWrapper;
};
