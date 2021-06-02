import removeFromStorage from './removeStorage.js'
export function renderTodos(todoArray){

    const todosContainer = document.querySelector("#todolist");
    todosContainer.innerHTML = "";

    todoArray.forEach(todo => {
        todosContainer.innerHTML += `
            <li>
                <span>${todo.name}</span>
                <input type="checkbox" value="${todo.isComplete}" data-id="${todo.id}"/>
                <button class="remove-button" data-id="${todo.id}" type="button">Remove</button>
            </li>`;
    });

    const removeButton = document.querySelectorAll(".remove-button");
    removeButton.forEach(element => {
    element.addEventListener("click" , removeFromStorage);  
});

}