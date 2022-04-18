const todo = document.getElementById('todo');
const done = document.getElementById('done');
const inputElement = document.getElementById('input');
const value = isValueEmptyOrExsisting

let doneArray = [];
let todoArray = ['Learn HTML', 'Learn CSS', 'Learn JavaScript']

todo.innerHTML = todoArray.join('<br>');

function transferDone() {
    doneArray = todoArray.splice(0, 2);
    todoArray = todoArray.splice(0, 1);

    updateList();
}

function addTodo() {
    const value = inputElement.value
    const isValueEmptyOrExsisting = value !== '' || !todoArray.includes(value);

    if (!isValueEmptyOrExsisting) {
        todoArray.push(inputElement.value);
        inputElement.value = '';
        updateList();
    }

}

function updateList() {
    todo.innerHTML = '';

    for (let index = 0; index < todoArray.length; index++) {
        todo.innerHTML += `<div>${todoArray[index]}</div>`
    }


    done.innerHTML = doneArray.join('<br>');
    todo.innerHTML = todoArray.join('<br>');
}
transferDone()