const me = {
    firstName: 'Simona',
    lastname: 'Sleviene',
    age: 'nenurodoma',
    profession: 'environmental specialist'
}

console.log(me.profession);

//- - - - - - - - - - - Star Wars užduotis - - - - - - - - - - - 

let characters = [

    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },

    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },

    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',

    },

    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

const tBody = document.getElementById('table');
const keys = Object.keys(characters[0]);
// pirmas budas atvaizduoti lenetele su duomenimis:

function renderTableData(taram_baram) {
    tBody.innerHTML = '';
    taram_baram.map((character) => {
        const rowElement = document.createElement('tr');

        for (let key of keys) {
            const dataCell = document.createElement('td');
            dataCell.textContent = character[key];
            rowElement.appendChild(dataCell);
        }
        tBody.appendChild(rowElement);
    })
}
renderTableData(characters);


// antras budas atvaizduoti lenetele su duomenimis:

// Vieno key is objekto istraukimas:

function getOnlyNames() {
    const names = characters.map((character) => {
        return character.name.split(' ')[0]
    })
    return names;
}
getOnlyNames();
console.log(getOnlyNames());


function getHeightSum() {  // sukuriama f-ja svoriu sumai suskaiciuoti
    return characters
        .map((character) => Number(character.height))
        .reduce((sum, current) => sum + current);
}

function buildRow() { //iskvieciama f-ja eilutes sukurimui
    const rowElement = document.createElement('tr');

    for (let key of keys) {
        const dataCellElement = document.createElement('td');
        if (key === 'height') {
            dataCellElement.textContent = getHeightSum();
        }
        if (key === 'mass') {
            dataCellElement.textContent = getMassSum();
        }
        rowElement.appendChild(dataCellElement);
    }
    tBody.appendChild(rowElement);
}
buildRow();

function getMassSum() {
    return characters
        .map((character) => Number(character.mass))
        .reduce((sum, current) => sum + current);
}


// filtro metodo panaudojimas

const massFilterArray = characters.filter((character) => character.mass > 80);
console.log(massFilterArray);

const heightFilterArray = characters.filter((character) => character.height < 180);
console.log(heightFilterArray);

const genderFilterArray = characters.filter((character) => character.gender === 'male');
console.log(genderFilterArray);

const eyeColorFilterArray = characters.filter((character) => character.eye_color === 'blue');
console.log(eyeColorFilterArray);

const characterSomeArray = characters.some((character) => character.height > 200);
console.log(characterSomeArray);

const charactersHeight = characters;
console.log(charactersHeight.sort(function (a, b) { return a - b }));

getOnlyNames();
renderTableData(characters);


let fetchUrl = 'https://swapi.dev/api/people/';
let previousPage
let nextPage

function getCharacters(url) {
    fetch(url).then((response) => {
        response.json().then((data) => {
            characters = data.results;
            previousPage = data.previous;
            nextPage = data.next;
            renderTableData(characters);
        })
    })


}
getCharacters(fetchUrl);


