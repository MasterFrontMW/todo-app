import "./ToDoItem.css";

export const ToDoItem = (message) => {
  const toDoItemElement = document.createElement("div");
  toDoItemElement.classList.add("to-do-element-wrapper");

  // TODO: add functionality to grey text item message when checked, make text style -> line through
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("to-do-element-checkbox");

  const checkToDoElement = () => {
    if (toDoMessage.style.textDecoration == "line-through")
      toDoMessage.style.textDecoration = "none";
    else toDoMessage.style.textDecoration = "line-through";
  }

  // TODO: show added message from AddToDoField inside task
  const toDoMessage = document.createElement("p");
  toDoMessage.innerText = message;
  

  //TODO: add button to edit TodoElement
  const editButton = document.createElement("div");
  editButton.classList.add("edit-button");

  const editToDoButton = () => {
    toDoMessage.contentEditable = true;
    toDoMessage.focus()
  }

  const closeButton = document.createElement("div");
  closeButton.classList.add("close-button");

  // TODO: remove todo element from DOM on close click
  closeButton.addEventListener("click", () => toDoItemElement.remove());

  editButton.addEventListener("click", editToDoButton)

  checkbox.addEventListener("click", checkToDoElement);

  toDoItemElement.appendChild(checkbox);
  toDoItemElement.appendChild(toDoMessage);
  toDoItemElement.appendChild(editButton);
  toDoItemElement.appendChild(closeButton);

  return toDoItemElement;
};
