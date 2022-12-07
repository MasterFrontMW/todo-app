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

  const checkboxLabelWrapper = document.createElement("label");
  checkboxLabelWrapper.classList.add("checkbox-label-wrapper");

  const toDoMessage = document.createElement("p");
  toDoMessage.classList.add("task-message");
  toDoMessage.innerText = message;

  const editButton = document.createElement("div");
  editButton.classList.add("edit-button");

  const closeButton = document.createElement("div");
  closeButton.classList.add("close-button");

  const checkboxClick = (e) => {
    if (checkbox.checked) {
      toDoMessage.removeEventListener("click", editClick);
      e.preventDefault();
    }
  };

  const editClick = (e) => {
    if (checkbox.checked == false) {
      console.log("editClick was clicked");
      e.preventDefault();
    }
  };

  // METHODS
  const editToDoButton = () => {
    if (checkbox.checked) {
    } else {
      toDoMessage.contentEditable = true;
      toDoMessage.focus();
      toDoMessage.addEventListener("click", editClick);
      toDoMessage.style.cursor = "default";
    }
  };

  const checkToDoElement = () => {
    if (checkbox.checked) {
      toDoMessage.contentEditable = false;
      toDoMessage.style.cursor = "default";
      toDoMessage.removeEventListener("click", editClick);
      checkmark.classList.add("grey-border");
    } else {
      toDoMessage.style.cursor = "pointer";
      checkmark.classList.remove("grey-border");
    }
  };

  // ASSINGNIG EVENT LISTENERS AND PASSING METHODS FROM UPPER DEFINITION
  editButton.addEventListener("click", editToDoButton);
  checkbox.addEventListener("click", checkToDoElement);
  toDoMessage.addEventListener("click", checkboxClick);
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
