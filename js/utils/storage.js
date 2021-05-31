export function saveTodoStorage(key , value , isComplete){
    localStorage.setItem(key , JSON.stringify(value) , isComplete);
}

export function renderTodoStorage(key){
    const value = localStorage.getItem(key);
    
    if(!value){
        console.log("Nothing in storage!")
        return [];
    }
    return JSON.parse(value);
}