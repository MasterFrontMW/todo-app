import "./ToDoItem.css";

export const ToDoItem = (message) => {
  const toDoItemElement = document.createElement("div");
  toDoItemElement.classList.add("to-do-element-wrapper");

  // TODO: add functionality to grey text item message when checked, make text style -> line through
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("to-do-element-checkbox");

  // TODO: show added message from AddToDoField inside task
  const toDoMessage = document.createElement("p");
  toDoMessage.innerText = "test message";

  const closeButton = document.createElement("div");
  closeButton.classList.add("close-button");

  // TODO: remove todo element from DOM on close click
  closeButton.addEventListener("click", () =>
    toDoItemElement.remove()
  );

  toDoItemElement.appendChild(checkbox);
  toDoItemElement.appendChild(toDoMessage);
  toDoItemElement.appendChild(closeButton);

  return toDoItemElement;
};
