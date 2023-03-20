import './GroupTasksField.css';
import { Accordion } from '../Accordion/Accordion';
import { addGroupOfTaskToStorage } from '../../helpers/storage';

export const GroupTasksField = () => {
  const fieldState = { value: '' };

  const groupTasksField = document.createElement('div');
  groupTasksField.classList.add('group-tasks-field');
  groupTasksField.id = 'group-tasks';

  const groupTasksButtonActive = document.createElement('button');
  groupTasksButtonActive.classList.add('group-tasks-button-text');
  groupTasksButtonActive.style.display = 'none';
  groupTasksButtonActive.disabled = true;
  groupTasksButtonActive.innerHTML = `add task group`;

  const groupTasksButton = document.createElement('button');
  groupTasksButton.classList.add('group-tasks-button');

  const groupTasksInput = document.createElement('input');
  groupTasksInput.classList.add('group-tasks-input');

  groupTasksField.appendChild(groupTasksButton);
  groupTasksField.appendChild(groupTasksButtonActive);
  groupTasksField.appendChild(groupTasksInput);

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
    const groupTaskAccordion = document.createElement('div');
    groupTaskAccordion.classList.add('group-task-accordion');
    const groupTitle = fieldState.value;
    const tasksGroup = createTasksGroupStorage(groupTitle);
    addGroupOfTaskToStorage(tasksGroup);
    const accordionItem3 = Accordion(tasksGroup);
    groupTaskAccordion.append(accordionItem3);
    groupTasksField.after(groupTaskAccordion);
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
