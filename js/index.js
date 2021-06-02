import {addTodos} from "./components/addTodos.js"
import {renderTodos} from "./components/renderTodos.js"
import {renderTodoStorage} from "./utils/storage.js"

// Added click event to add button
const addTodo = document.querySelector("#add");
addTodo.addEventListener("click" , addTodos);

// Retrive all elements from storage and show 
const todosFromStorage = renderTodoStorage('todo');
renderTodos(todosFromStorage)

const isCompleteChk = document.querySelectorAll("li input");
