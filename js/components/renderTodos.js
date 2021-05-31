export function renderTodos(todoArray){

    const todosContainer = document.querySelector("#todolist");
    todosContainer.innerHTML = "";

    todoArray.forEach(todo => {
        todosContainer.innerHTML += `
            <li>
                <span>${todo.name}</span>
                <input type="checkbox" value="${todo.isComplete}" data-id="${todo.name}"/>
            </li>`;
    });

}