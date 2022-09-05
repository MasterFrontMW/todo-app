import "./AddToDoField.css";
import { ToDoItem } from "../ToDoItem/ToDoItem.js";

export const AddToDoField = () => {
  return `<div class="add-to-do-item">
      <div class="icon-box"></div>
      <input
        class="add-to-do-input"
        type="text"
        placeholder="Write something to do..."
      />
      <div  class="add-to-do-button">ADD TASK</div>
    </div>`;
};

//method to initialize add to do (inside main.js) - we pass here html element of whole section
export const initializeAddToDoField = (addToDoSectionHTMLElement) => {
  const addToDoButton =
    addToDoSectionHTMLElement.querySelector(".add-to-do-button");
  const addToDoInput =
    addToDoSectionHTMLElement.querySelector(".add-to-do-input");

  const handleAddToDoButtonClick = () => {
    //get value from input
    const todoTextMessage = addToDoInput.value;
    //inject on the top of the section ToDoItem with the message from input
    addToDoSectionHTMLElement.prepend(ToDoItem(todoTextMessage));
    // TODO: clear input field
    // addToDoInput.value = "";
  };

  addToDoButton.addEventListener("click", handleAddToDoButtonClick);
};
