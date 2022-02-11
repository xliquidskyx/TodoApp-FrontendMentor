const todoInput = document.querySelector('.task-input');
const todoSubmit = document.querySelector('.task-submit');
const todoTask = document.querySelector('.task-element');

todoSubmit = addEventListener('keypress', addTodo);

function addTodo(e) {
    e.preventDefault();
    if (event.key === 'Enter') {
        alert('hello');
    }
}