// elementu (stringu) isdestymas pagal abecele:

const newArray = ['b', 'f', 'i', 'z', 'a'];
console.log(newArray.sort());

// elementu (skaiciu) isdestymas didejancia tvarka:

const points = [40, 100, 5, 17, 1, 44]
console.log(points.sort(function (a, b) { return a - b }));


// todo ir done listu sukurimas ir panaudojimas:

// issikeliame sukurtus listus is HTML'o:

const todo = document.getElementById('todo');
const done = document.getElementById('done');

// susikuriame kintama 'todo' masyva:

let todoArray = ['learn HTML', 'learn CSS', 'leatn Javascript', 'learn Node.js'];
// kadangi kintamas todo masyvas suskurtas, reikia susikurti kintama done masyva su neapibreztomis reiksmemis:

let doneArray = ['rest'];

// isdestome elementus stulpeliu:

todo.innerHTML = todoArray.join('<br>');

// paieska su indexOf:

console.log(todoArray.indexOf('learn CSS'));

// is todo listo perkeliame elementus i done lista:


const inputElement = document.getElementById('input');

// tada susikuriame f-ja:

function transferDone() {
    // doneArray = todoArray.slice(0, 2);
    // todoArray = todoArray.splice(2, 3);
}
transferDone();


function addNewTodo() {
    todoArray.push(inputElement.value);
    updateLists();
}

// tam, kad nebutu pridedami tusti ar pasikartojantys elementai, galima panaudoti f-ja:

function addNewTodo() {
    const value = inputElement.value;
    const isValueEmptyExisting = value != '' && !todoArray.includes(value);

    if (isValueEmptyExisting) {
        todoArray.push(inputElement.value);
        inputElement.value = ''; // nurodome, kad istrintu naujai pridetus iteam'sus
        updateLists();
    }
}


function updateLists() {
    todo.innerHTML = '';
    done.innerHTML = '';

    for (let index = 0; index < todoArray.length; index++) {

        const listElement = document.createElement('div');
        listElement.textContent = todoArray[index];

        listElement.onclick = () => {
            doneArray.push(todoArray.splice(index, 1));
            updateLists();
        }
        todo.appendChild(listElement);
        // todo.innerHTML += `<div>${todoArray[index]}</div>`
    }

    for (let index = 0; index < doneArray.length; index++) {
        const listElement = document.createElement('div');
        listElement.textContent = doneArray[index];

        listElement.onclick = () => {
            todoArray.push(doneArray.splice(index, 1));
            updateLists();

            // done.inner += `<div>${doneArray[index]}</div>`
        }
        done.appendChild(listElement);
    }
}
