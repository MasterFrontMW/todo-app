import "./ToDoItem.css";

export const ToDoItem = (message) => {
  const toDoItemElement = document.createElement("div");
  toDoItemElement.classList.add("to-do-element-wrapper");

  // TODO: add functionality to grey text item message when checked, make text style -> line through

  const checkboxLabel = document.createElement("label");
  checkboxLabel.classList.add("checkbox-label");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("to-do-element-checkbox");
  const checkmark = document.createElement("div");
  checkmark.classList.add("checkmark");

  const checkToDoElement = (e) => {
    if (e.target.checked) {
      toDoMessage.style.textDecoration = "line-through";
      toDoMessage.style.opacity = 0.4;
      toDoMessage.contentEditable = false;
      checkmark.classList.add("checked");
    } else {
      toDoMessage.style.textDecoration = "none";
      toDoMessage.style.opacity = 1;
      checkmark.classList.remove("checked");
    }
  };

  // checkmark.addEventListener("click", checkToDoElement);
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

  const closeButton = document.createElement("div");
  closeButton.classList.add("close-button");

  // TODO: remove todo element from DOM on close click
  closeButton.addEventListener("click", () => toDoItemElement.remove());
  editButton.addEventListener("click", editToDoButton);

  checkboxLabel.appendChild(checkmark);
  checkboxLabel.appendChild(checkbox);
  toDoItemElement.appendChild(checkboxLabel);
  toDoItemElement.appendChild(toDoMessage);
  toDoItemElement.appendChild(editButton);
  toDoItemElement.appendChild(closeButton);

  return toDoItemElement;
};