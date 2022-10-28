import "./ToDoItem.css";

export const ToDoItem = (message) => {
  const toDoItemElement = document.createElement("div");
  toDoItemElement.classList.add("to-do-element-wrapper");

  // TODO: add functionality to grey text item message when checked, make text style -> line through
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("to-do-element-checkbox");

  const checkToDoElement = (e) => {
    e.target.checked
      ? (toDoMessage.style.textDecoration = "line-through")(
          (toDoMessage.style.opacity = 0.4)
        )
      : (toDoMessage.style.textDecoration = "none");
    toDoMessage.style.opacity = 1;
  };

  // TODO: show added message from AddToDoField inside task
  const toDoMessage = document.createElement("p");
  toDoMessage.classList.add("task-message");
  toDoMessage.innerText = message;

  //TODO: add button to edit TodoElement
  const editButton = document.createElement("div");
  editButton.classList.add("edit-button");

  // const editToDoButton = (e) => {toDoMessage.contentEditable = e.target.checked ? false : true}

  const editToDoButton = () => {
    if (checkbox.checked == false) {
      toDoMessage.contentEditable = true;
      toDoMessage.focus();
    } else toDoMessage.contentEditable = false;
  };

  const closeButton = document.createElement("div");
  closeButton.classList.add("close-button");

  // TODO: remove todo element from DOM on close click
  closeButton.addEventListener("click", () => toDoItemElement.remove());
  editButton.addEventListener("click", editToDoButton);
  checkbox.addEventListener("click", checkToDoElement);
  toDoItemElement.appendChild(checkbox);
  toDoItemElement.appendChild(toDoMessage);
  toDoItemElement.appendChild(editButton);
  toDoItemElement.appendChild(closeButton);

  return toDoItemElement;
};
