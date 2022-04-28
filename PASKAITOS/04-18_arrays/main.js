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



function updateLists() {    // sukuriame f-ja
    todo.innerHTML = ' ';  // isvalome list'us, kad pradetume nuo svaraus elemento
    done.innerHTML = ' ';

    for (let i = 0; i < todoArray.length; i++) {  // pradedame sukti/vykdyti cikla per ta array, is kurio norime isimti item'a. Kur: i - index trumpinys; ++ - inkrementavimas
        const listElement = document.createElement('div'); // sukuriame list element (tai gali buti div, li, span ir panasiai) panaudojant .createElement
        listElement.textContent = todoArray[i]; // sukurtam list elementui prilyginam teksto reiksme pagal indexa
        listElement.onclick = () => { // list elementui pridedame onclick funkcija, kad galetume spustelti elementus
            doneArray.push(todoArray.splice(i, 1)[0]); // perkeliami paspaudziami elementai is vieno array i kita. Siuo atveju: i done array perkeliami duomenys is todo array.    
            updateLists(); // iskvieciame updateLists(), nes keiciasi duomenys 
        }

        todo.appendChild(listElement); // i lista is kurio isimame item'a, pridedame vaika - sukurta listElement
    }

    // kad f-ja vyktu abipusei, butu galima duomenis perkelti is vieno array i kita, f-ja reikia pakartoti ir su kitu array:
    for (let i = 0; i < doneArray.length; i++) {
        const listElement = document.createElement('div');
        listElement.textContent = doneArray[i];

        listElement.onclick = () => {
            todoArray.push(doneArray.splice(i, 1)[0]);
            updateLists();
        }
        done.appendChild(listElement);
    }
}


// -------------------Ciklu pavyzdziai:-----------------------------------

const array = [];

for (let i = 0; i < 10; i++) {
    array.push(Math.random());
}
console.log(array);

// filter f-ja:

const filteredArray = [];

function filterArray() {
    for (let number of array) {
        if (number >= 0.5) {
            filteredArray.push(number);
        }
    }
}
filterArray();
console.log(filteredArray);

// Kitas filter f-jos rasymo budas:

const filterMethod = array.filter((number) => number >= 0.4)
console.log(filterMethod);

// reduse metodas:

const reducedArray = filteredArray.reduce((previest, current) => previest + current);
console.log(reducedArray);

// some metodas:

const someArray = filteredArray.some((number) => number >= 0.7);
console.log(someArray);




