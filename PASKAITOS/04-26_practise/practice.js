// String metodas:

const sting1 = 'Naudojamas tekstui';
console.log(sting1);

// Number metodas:

const number = 125;
console.log(number);

// Boolean metodas:

const isWorking = new Boolean(true) 
if (isWorking) {
    console.log(isWorking);
}


// const isWorking = true;
// const isUnemployed = false;
// console.log(isWorking);
// console.log(isUnemployed);

// Array metodas:

const array = ['name', 125, true];
console.log(array);

// Object metodas: 

const objectMonth = {
    first: 'january',
    second: 'february',
    third: 'martch'
}

console.log(objectMonth);

// Funkcija kuri consoleje parasys number tipo kintamaji puslapiui kraunantis:

function numberToPrint() {
    console.log(number)
}
numberToPrint()


// funkcijoje prideti salyga su mano nurodytu boolean kintamuoju jei true - paliekam number kintamojo console.log, else printinam string tipo kintamaji:

function printNumber() {
    if (isWorking) {
        console.log(number);
    } else {
        console.log(string1)
    }
}
printNumber();

// Funkcija grazinanti trecia reiksme is array kintamojo:

function theThirdValueFromArray() {
    return (array[2])
}
// theThirdValueFromArray(); //Neveikia:

// konsoleje grazinti naujos f-jos gauta rezultata:
console.log(theThirdValueFromArray());

// ideti nauja reiksme i array naudojant push:

array.push("Vezliukas");

// Iskirpti pirma reiksme is array kintamojo naudojant array isemimo metoda:

let result = array.slice(0, 1);
console.log(result);

// ciklas kuris consoleje parasys nuo 1 iki 10:

for (let i = 1; i < 11; i++) {
console.log(i);
};

// Naudojant map metoda pakeiciamas visas array tipo kintamojo reiksmes nuo 0, iki array.length:

let arr = [77, 23, 36, 46, 15];

console.log(arr.map((item, index) => item = index));
console.log(arr);
   

// IS array isfiltruoti tik nelyginius skaicius (odd numbers):

let odds = arr.filter(n => n%2);
console.log(odds)

// Parasyti nauja f-ja, kuri konsoleje parasys mano paduota parametra:

const sum = new 
Function('a', 'b', 'return a + b'); //Paklausti ar teisingai suprasta uzduotis!!!!
console.log(sum(4, 22));

// Susikurti nauja Array su bet kokiais 5 skaitmenimis:

let element = [5, 12, 587, 5623, 58731]

// Parasyti nauja f-ja, kuri, naudojant viena is array metodu, konsoleje parasys naujai sukurto array suma:

let elementSum = [element].reduce((previousValue, currentValue) => previousValue + currentValue[0]);
console.log(elementSum); //Funkcija negera!!!!!

// Konsoleje parasyti objekto kintamojo savybiu (keys) reiksmes (values) atskirose eilutese ir kiekviena ja iskonsologinti:

let lexusRX350 = {
    manufactureDate: 2013,
    price: 16.900,
    fuelType: 'gasoline',
    liter: 3.5
}
console.log(lexusRX350.manufactureDate);
console.log(lexusRX350.price);
console.log(lexusRX350.fuelType);
console.log(lexusRX350.liter);

// Garazinti nauja array su visomis objekto savybemis:

for (let [key, value] of Object.entries(lexusRX350)) {
    console.log(`${key}: ${value}`);
}


// Prie pradzioje nurodyto objekto kintamojo prideti dvi naujas savybes. Viena is ju lygi mano number, kita - boolean kintamajam:

 lexusRX350.price = number
 console.log(lexusRX350.price); //ar turi perrasyti kita skaiciu, ar turi buti gaunama reiksme is objekto tai yra price: 16.900???????

 lexusRX350.isWorking = boolean
                                    //pasiaiskinti del salygos parasymo su boolean!!!!!!!!!
//  if (fuelType = 'gasoline') {
//      console.log(true)
//  }

// Object.assign(lexusRX350, { a: number, b: boolean})  // siuo metodu nesigavo!!!!!!
//  console.log(lexusRX350);


// Sukurti nauja array ir i ji, naudojant FOR cikla, ideti 5 mano objekto tipo kintamuosius (turi buti 5 savybes ir reiksmes):

let myNewArray = [];

for (let i = 0; i < 5; i++) {
    myNewArray.push(lexusRX350);  //paklausti, ar teisingai suprasta uzduotis!!!!!!!
}

console.log(myNewArray);

// susikurti mygtuka 21 uzduoties rezultatams konsoleje atvaizduoti:

function getResultsOfArray() {  // cia document.getElementById ar createElement nenaudojamas, nes mygtukas igalinamas per f-ja.
    console.log(myNewArray);
}

// HTML'e susikurti input ir button ant kurio paspaudus konsoleje atvaizduos mano ivesta input reiksme:

const input = document.getElementById('inputValue'); // issitraukiamas inputas is html'o
const anotherArr = []; //pridedamas tuscias array, kad kiekviena karta butu kur ideti nauja reiksme is input.value

function inputValueResults() {
    if (!anotherArr.includes(input.value) && input.value !== '') { // jei sukurtas tuscias array apima inputo reiksme // "&& input.value !== ''" reiskia, kad nauja inputo reiksme nebutu tuscia
        anotherArr.push(input.value); // tada i tuscia areju pusinama (idedama) parasyta inputo reiksme
    }
    inputValueDisplayElement.textContent += input.value  //nepasiekia elemento!!!!!!!!
    // console.log(inputValue.value);
}

// I html prisideti papildoma elementa, kuriame, paspaudus auksciau esancios uzduoties mygtuka, atvaizduos input reiksmes teksta (vietoje console.log):

const inputValueDisplayElement = document.getElementById('inputValueDisplay');











