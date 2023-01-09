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

  // METHODS

  const checkboxClick = (e) => {
    if (checkbox.checked) {
      e.preventDefault();
      return;
    }
    toDoMessage.contentEditable = true;
    editButton.removeEventListener("mouseout", editButtonHoverOff);
    toDoMessage.focus();
    e.preventDefault();
    editButton.style.opacity = 1;
  };

  const editToDoButton = () => {
    if (!checkbox.checked) {
      toDoMessage.contentEditable = true;
      toDoMessage.focus();
      editButton.style.opacity = 1;
      editButton.removeEventListener("mouseout", editButtonHoverOff);
    }
  };

  const checkToDoElement = () => {
    if (checkbox.checked) {
      toDoMessage.contentEditable = false;
      checkmark.classList.add("grey-border");
      return;
    }
    checkmark.classList.remove("grey-border");
  };

  const editButtonHoverOn = () => {
    editButton.style.opacity = 1;
  };

  const editButtonHoverOff = () => {
    editButton.style.opacity = 0.4;
  };

  const clickOutsideTask = (e) => {
    if (e.target !== toDoMessage && e.target !== editButton) {
      toDoMessage.contentEditable = false;
      editButton.style.opacity = 0.4;
      editButton.addEventListener("mouseover", editButtonHoverOn);
      editButton.addEventListener("mouseout", editButtonHoverOff);
    }
  };

  // ASSINGNIG EVENT LISTENERS AND PASSING METHODS FROM UPPER DEFINITION
  editButton.addEventListener("click", editToDoButton);
  checkbox.addEventListener("click", checkToDoElement);
  toDoMessage.addEventListener("click", checkboxClick);
  closeButton.addEventListener("click", () => toDoItemElement.remove());
  document.body.addEventListener("click", clickOutsideTask);

  // INJECT ELEMENTS WITH PROPER ORDER AND RETURN WHOLE TODO ELEMENT
  checkboxLabelWrapper.appendChild(checkbox);
  checkboxLabelWrapper.appendChild(checkmark);
  checkboxLabelWrapper.appendChild(toDoMessage);
  toDoItemElement.appendChild(checkboxLabelWrapper);
  toDoItemElement.appendChild(editButton);
  toDoItemElement.appendChild(closeButton);

  return toDoItemElement;
};
