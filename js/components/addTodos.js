import {renderTodos} from "./renderTodos.js"
import {saveTodoStorage , renderTodoStorage} from "../utils/storage.js"

export function addTodos(){
    const inputTodo = document.querySelector("#input");
    const inputValue = inputTodo.value.trim();
    const todosFromStorage = renderTodoStorage("todo");

    if (inputValue.length >= 1){
        const newTodo = {
            id: Date.now(),
            name: inputValue,
            isComplete: false
        }

    inputTodo.value="";
    inputTodo.focus();
    todosFromStorage.push(newTodo);
    
    console.log(todosFromStorage)
    saveTodoStorage("todo", todosFromStorage);    
    renderTodos(todosFromStorage)

    }
    
}



