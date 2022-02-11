const todoInput = document.querySelector('.task-input');
const todoSubmit = document.querySelector('.task-submit');
const todoTask = document.querySelector('.task-element');

todoSubmit.addEventListener('click', addTodo);

function addTodo (event) {
    event.preventDefault(); //prevents from submitting the form
    
    //create a div
    const createDiv = document.createElement('div');
    createDiv.classList.add('todo');
    
    //create li
    const createLi = document.createElement('li');
    createLi.innerText = "it's working!!";
    createLi.classList.add('todo-item');
    createDiv.appendChild(createLi);

    //append to list
    todoTask.appendChild(createDiv);
}