const todoInput = document.querySelector('.task-input');
const todoSubmit = document.querySelector('.task-submit');
const todoTask = document.querySelector('.task-element');
const filterOption = document.querySelector('.footer-mode');

todoSubmit.addEventListener('click', addTodo);
todoTask.addEventListener('click', deleteTask);
todoTask.addEventListener('mouseover', toggleOver);
todoTask.addEventListener('mouseout', toggleOut);
filterOption.addEventListener('click', filterTodo);

function addTodo (event) {
    event.preventDefault(); //prevents from submitting the form
    
    //create a div
    const createDiv = document.createElement('div');
    createDiv.classList.add('todo');

    //create checkbox
    const createCheckmark = document.createElement('span');
    createCheckmark.classList.add('checkmark');
    createDiv.appendChild(createCheckmark);

    //create li
    const createLi = document.createElement('li');
    createLi.innerText = todoInput.value;
    createLi.classList.add('todo-item');
    createDiv.appendChild(createLi);

    //create delete button
    const createDeleteBtn =  document.createElement('img');
    createDeleteBtn.src = "images/icon-cross.svg";
    createDeleteBtn.classList.add('cross-icon');
    createDiv.appendChild(createDeleteBtn);

    //append to list
    todoTask.appendChild(createDiv);

    //clear the input
    todoInput.value = "";
}

function deleteTask(event) {
    const item = event.target;
    if (item.classList[0] === 'cross-icon') {
        item.parentElement.remove();
    }

    //FINISH TASK
    if (item.classList[0] === 'checkmark'){
        item.classList.toggle('checked');
        const text = item.parentElement;
        text.classList.toggle('finished');
    }
}

function toggleOver(event) {
    const element = event.target;
    if (element.classList[0] === 'todo' ||
        element.classList[0] === 'todo-item') {
        element.classList.add('test');
    }
}

function toggleOut(event) {
    const element = event.target;
    if (element.classList[0] === 'todo' ||
    element.classList[0] === 'todo-item') {
    element.classList.remove('test');
    }
}

//FILTER

function filterTodo(e) {
    const todos = todoTask.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value) {
            case "all":
                todo.style.display = 'inline-block';
                break;
            case "completed":
                if(todo.classList.contains('finished')) {
                    todo.style.display = 'inline-block';
                } else {
                    todo.style.display = 'none';
                }
        }
    });
}