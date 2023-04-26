import './MainActionButtonsField.css';
import { ToDoItem } from '../ToDoItem/ToDoItem';
import { addGroupOfTaskInStorage, addTaskInStorage } from '../../helpers/storage';
import { Accordion } from '../Accordion/Accordion';
import { createTasksGroupDTO, createTasksItemDTO } from '../../helpers/dataObjects';

const toDoSection = document.querySelector('#todo-section');

const createGroup = (name) => {
  const newGroup = createTasksGroupDTO(name);
  addGroupOfTaskInStorage(newGroup);
  const accordionItem = Accordion(newGroup);
  toDoSection.prepend(accordionItem);
};

const createTask = (name) => {
  const newTask = createTasksItemDTO(name);
  addTaskInStorage(newTask);

  const toDoItem = ToDoItem(newTask);
  const actionButtonsNode = toDoSection.querySelector('#action-buttons-container');
  toDoSection.insertBefore(toDoItem, actionButtonsNode);
};

export const MainActionButtonsField = () => {
  const mainActionButtonsFieldContainer = document.createElement('div');
  mainActionButtonsFieldContainer.id = 'action-buttons-container';

  const mainActionButtonsField = document.createElement('div');
  mainActionButtonsField.classList.add('action-buttons-field', 'font-small');
  mainActionButtonsField.style.display = 'flex';

  const separator = document.createElement('div');
  separator.classList.add('separator');

  const input = document.createElement('input');
  input.classList.add('action-buttons-input');
  input.placeholder = 'Write new task or group...';

  const inputWrapper = document.createElement('div');
  inputWrapper.classList.add('action-buttons-input-wrapper');

  const addTaskButton = document.createElement('button');
  addTaskButton.classList.add('action-buttons-button');
  addTaskButton.dataset.action = 'add-task';
  addTaskButton.innerHTML = 'Add Task';

  const addGroupButton = document.createElement('button');
  addGroupButton.classList.add('action-buttons-button');
  addGroupButton.dataset.action = 'add-group';
  addGroupButton.innerHTML = 'Add Group';

  const getButtons = () => mainActionButtonsFieldContainer.querySelectorAll('button');
  const activateButtons = () => getButtons().forEach((button) => button.classList.add('active'));
  const resetActiveButtons = () =>
    getButtons().forEach((button) => button.classList.remove('active'));

  const handleAddToDoButtonActiveClick = (e) => {
    input.focus();
    activateButtons();

    if (!input.value.trim()) {
      input.value = '';
      return;
    }

    switch (e.target.dataset.action) {
      case 'add-task':
        createTask(input.value);
        break;
      case 'add-group':
        createGroup(input.value);
        break;
      default:
    }

    input.value = '';
  };

  addTaskButton.addEventListener('click', handleAddToDoButtonActiveClick);
  addGroupButton.addEventListener('click', handleAddToDoButtonActiveClick);
  input.addEventListener('focusin', () => activateButtons());
  input.addEventListener('focusout', () => resetActiveButtons());

  mainActionButtonsFieldContainer.appendChild(separator);
  inputWrapper.appendChild(input);
  mainActionButtonsField.appendChild(inputWrapper);
  mainActionButtonsField.appendChild(addTaskButton);
  mainActionButtonsField.appendChild(addGroupButton);
  mainActionButtonsFieldContainer.appendChild(mainActionButtonsField);

  return mainActionButtonsFieldContainer;
};
