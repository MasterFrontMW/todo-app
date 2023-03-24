import './GroupTasksField.css';
import { Accordion } from '../Accordion/Accordion';
import { addGroupOfTaskToStorage } from '../../helpers/storage';

export const GroupTasksField = () => {
  const fieldState = { value: '' };

  const toDoSection = document.querySelector('#todo-section');

  const groupTasksField = document.createElement('div');
  groupTasksField.classList.add('group-tasks-field');
  groupTasksField.id = 'group-tasks';

  const groupTasksButtonActive = document.createElement('button');
  groupTasksButtonActive.classList.add('group-tasks-button-text');
  groupTasksButtonActive.style.display = 'none';
  groupTasksButtonActive.disabled = true;

  const groupTasksButton = document.createElement('button');
  groupTasksButton.classList.add('group-tasks-button');
  groupTasksButton.innerText = 'ADD GROUP OF TASKS';

  const groupTasksInput = document.createElement('input');
  groupTasksInput.classList.add('group-tasks-input');

  groupTasksField.appendChild(groupTasksButton);
  groupTasksField.appendChild(groupTasksInput);
  groupTasksField.appendChild(groupTasksButtonActive);

  function createTasksGroupStorage(taskGroupTitle) {
    return { id: Date.now().toString(), taskGroupTitle, tasks: [] };
  }

  const handleGroupTaskButtonClick = () => {
    groupTasksButton.classList.toggle('active');
    groupTasksButtonActive.style.display = 'block';
    groupTasksButton.style.display = 'none';
  };

  const handleGroupTaskButtonActiveClick = () => {
    groupTasksButton.classList.toggle('active');
    const groupTitle = fieldState.value;
    const tasksGroup = createTasksGroupStorage(groupTitle);
    addGroupOfTaskToStorage(tasksGroup);
    const accordionItem = Accordion(tasksGroup);
    toDoSection.prepend(accordionItem);
    groupTasksInput.value = '';
    groupTasksButtonActive.style.display = 'none';
    groupTasksButtonActive.disabled = true;
    groupTasksButton.style.display = 'block';
  };

  groupTasksButton.addEventListener('click', () => handleGroupTaskButtonClick());
  groupTasksInput.addEventListener('keyup', (e) => {
    const inputValue = e.target.value;
    fieldState.value = inputValue;
    groupTasksButtonActive.disabled = !inputValue;
  });
  groupTasksButtonActive.addEventListener('click', () => handleGroupTaskButtonActiveClick());

  return groupTasksField;
};
