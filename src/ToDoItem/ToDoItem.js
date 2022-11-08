import "./ToDoItem.css";

export const ToDoItem = (message) => {
  const toDoItemElement = document.createElement("div");
  toDoItemElement.classList.add("to-do-element-wrapper");

  // TODO: add functionality to grey text item message when checked, make text style -> line through

  const checkboxLabel = document.createElement("label");
  checkboxLabel.htmlFor = "checkbox-label";
  checkboxLabel.classList.add("checkbox-label");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "checkbox-label";
  checkbox.classList.add("to-do-element-checkbox");

  const checkmark = document.createElement("div");
  checkmark.classList.add("checkmark");

  const checkboxLabelWrapper = document.createElement("div");
  checkboxLabelWrapper.classList.add("checkbox-label-wrapper");

  const checkToDoElement = () => {
    if (checkbox.checked) {
      toDoMessage.contentEditable = false;
    }
  };

  checkbox.addEventListener("click", checkToDoElement);

  // TODO: show added message from AddToDoField inside task
  const toDoMessage = document.createElement("p");
  toDoMessage.classList.add("task-message");
  toDoMessage.innerText = message;

  //TODO: add button to edit TodoElement
  const editButton = document.createElement("div");
  editButton.classList.add("edit-button");

  const editToDoButton = () => {
    if (checkbox.checked) {
      return;
    }
    toDoMessage.contentEditable = true;
    toDoMessage.focus();
  };

  editButton.addEventListener("click", editToDoButton);

  // TODO: remove todo element from DOM on close click
  const closeButton = document.createElement("div");
  closeButton.classList.add("close-button");

  closeButton.addEventListener("click", () => toDoItemElement.remove());

  // The family of elements
  checkboxLabelWrapper.appendChild(checkbox);
  checkboxLabelWrapper.appendChild(checkboxLabel);
  checkboxLabelWrapper.appendChild(toDoMessage);
  checkboxLabel.appendChild(checkmark);
  toDoItemElement.appendChild(checkboxLabelWrapper);
  toDoItemElement.appendChild(editButton);
  toDoItemElement.appendChild(closeButton);

  return toDoItemElement;
};
