import {addTodos} from "./components/addTodos.js"
import {renderTodos} from "./components/renderTodos.js"
import {renderTodoStorage} from "./utils/storage.js"

const addTodo = document.querySelector("#add");
addTodo.addEventListener("click" , addTodos);

const todosFromStorage = renderTodoStorage('todo');
renderTodos(todosFromStorage)