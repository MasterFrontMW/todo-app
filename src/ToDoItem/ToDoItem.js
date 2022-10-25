import "./ToDoItem.css";

export const ToDoItem = (message) => {
  const toDoItemElement = document.createElement("div");
  toDoItemElement.classList.add("to-do-element-wrapper");

  // TODO: add functionality to grey text item message when checked, make text style -> line through

  //checkbox label
  const checkboxLabel = document.createElement("label");
  checkboxLabel.classList.add("checkbox-label");
  //checkbox iput (to hide)
  const checkboxInput = document.createElement("input");
  checkboxInput.type = "checkbox";
  //checkbox
  const checkbox = document.createElement("div")
  checkbox.classList.add("checkbox");
  // checkmart
  const checkmark = document.createElement("object")
  checkmark.setAttribute('data', '../../assets/checkIcon2.svg');
  checkmark.classList.add("checkmark");


  const checkToDoElement = (e) => {
    console.log("checkbox cehcked", e.target.checked)
  };

  // checkmark.addEventListener("click", checkToDoElement);
  checkboxInput.addEventListener("click", checkToDoElement);

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

  /* PREPARE ELEMETNS structure checkbox label
   1. inject checkmark with svg data inside checkbox,
   2. inject checkbox and sibling checkboxInput into the label 
   3. inject label with all above iniside To Do Item element 
  */
  checkbox.appendChild(checkmark);
  checkboxLabel.appendChild(checkboxInput);
  checkboxLabel.appendChild(checkbox);
  toDoItemElement.appendChild(checkboxLabel);
  toDoItemElement.appendChild(toDoMessage);
  toDoItemElement.appendChild(closeButton);

  return toDoItemElement;
};
