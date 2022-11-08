import "./ToDoItem.css";

export const ToDoItem = (message) => {
  // CREATION OF ELEMENTS 
  const toDoItemElement = document.createElement("div");
  toDoItemElement.classList.add("to-do-element-wrapper");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("to-do-element-checkbox");

  const checkmark = document.createElement("div");
  checkmark.classList.add("checkmark");

  const checkboxLabelWrapper = document.createElement("div");
  checkboxLabelWrapper.classList.add("checkbox-label-wrapper");

  const toDoMessage = document.createElement("label");
  toDoMessage.classList.add("task-message");
  toDoMessage.innerText = message;

  const editButton = document.createElement("div");
  editButton.classList.add("edit-button");

  const closeButton = document.createElement("div");
  closeButton.classList.add("close-button");

  // METHODS
  const editToDoButton = () => {
    if (checkbox.checked) {
      return;
    }
    toDoMessage.contentEditable = true;
    toDoMessage.focus();
  };

  const checkToDoElement = () => {
    if (checkbox.checked) {
      toDoMessage.contentEditable = false;
    }
  };

  // ASSINGNIG EVENT LISTENERS AND PASSING METHODS FROM UPPER DEFINITION
  checkbox.addEventListener("click", checkToDoElement);
  editButton.addEventListener("click", editToDoButton);
  closeButton.addEventListener("click", () => toDoItemElement.remove());

  // INJECT ELEMENTS WITH PROPER ORDER AND RETURN WHOLE TODO ELEMENT
  checkboxLabelWrapper.appendChild(checkbox);
  checkboxLabelWrapper.appendChild(checkmark);
  checkboxLabelWrapper.appendChild(toDoMessage);
  toDoItemElement.appendChild(checkboxLabelWrapper);
  toDoItemElement.appendChild(editButton);
  toDoItemElement.appendChild(closeButton);

  return toDoItemElement;
};
