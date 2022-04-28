const frontEndCharacters = [{
    firstName: 'Rokas',
    lastName: 'Virvicius',
    age: 27,
    gender: 'Male',
    hobby: 'Bassketball',
    height: 185,
    programingSkill: 0
},

{
    firstName: 'Eimantas',
    lastName: "Jurenkovas",
    age: 49,
    gender: "Male",
    hobby: "Fishing",
    height: 172,
    programingSkill: 0
},

{
    firstName: "Ieva",
    lastName: "Staseviciute",
    age: 33,
    gender: "Female",
    hobby: "Ride a  motorcycle",
    height: 174,
    programingSkill: 0
},

{
    firstName: "Rokas",
    lastName: "Skinderis",
    age: 28,
    gender: "Male",
    hobby: "Singing",
    height: 194,
    programingSkill: 4
},

{
    firstName: "Zilvinas",
    lastName: "Pusnys",
    age: 30,
    gender: "Male",
    hobby: "Napping",
    height: 175,
    programingSkill: 0
},
{
    firstName: "Tatjana",
    lastName: "Volodko",
    age: 25,
    gender: "Female",
    hobby: "Confectionery",
    height: 168,
    programingSkill: 0
},
{
    firstName: "Alicija",
    lastName: "Gruodė",
    age: 24,
    gender: "Female",
    hobby: "Play piano",
    height: 171,
    programingSkill: 0
},
{
    firstName: "Rimvydas",
    lastName: "Linkevicius",
    age: 45,
    gender: "Male",
    hobby: "Hunting",
    height: 186,
    programingSkill: 0
},
{
    firstName: "Mindaugas",
    lastName: "Straškys",
    age: 22,
    gender: "Male",
    hobby: "Play football",
    height: 188,
    programingSkill: 0
},
{
    firstName: "Edvinas",
    lastName: "Stanionis",
    age: 21,
    gender: "Male",
    hobby: "Gaming",
    height: 179,
    programingSkill: 0
}
]

const tBody = document.getElementById('myTBody');
const keys = Object.keys(frontEndCharacters[0]); //iš bendro masyvo imamas pirmas objektas

const button1 = document.getElementById('onlymale');
const button2 = document.getElementById('onlyFemale');
const button3 = document.getElementById('youngerThan30');






// Per funkcija sukuriama lentelė duomenims atvaizduoti:

function renderTableData() {
    frontEndCharacters.map((character) => {
        const createRowElement = document.createElement('tr');  // sukuriame eilutės elementą

        for (let key of keys) {  // sukamas ciklas per raktinius
            const dataCellElement = document.createElement('td'); // Sukuriamas langelis
            dataCellElement.textContent = character[key];
            createRowElement.appendChild(dataCellElement); // Į duomenų langelį pridedami sukurtos eilutės duomenys
        }
        tBody.appendChild(createRowElement); // Sukurtas eilutės elementas patalpinamas į lentelę

    })
}
//renderTableData();


const sortByAlphabet1 = (firstName) => renderTableData(frontEndCharacters.sort((a, b) => a[firstName].localeCompare(b[firstName])));
console.log(sortByAlphabet1);

const sortByAlphabet2 = (lastName) => renderTableData(frontEndCharacters.sort((a, b) => a[lastName].localeCompare(b[lastName])));
console.log(sortByAlphabet2);


const onlyManFilter = frontEndCharacters.filter((character) => character.gender === 'Male');
console.log(onlyManFilter);

const onlyWomanFilter = frontEndCharacters.filter((character) => character.gender === 'Female');
console.log(onlyWomanFilter);


const youngerThan30 = frontEndCharacters.filter((character) => character.age < 30)
console.log(youngerThan30);

renderTableData();

function getMaxOfArray (frontEndCharacters) {
    return Math.max.apply(null, frontEndCharacters);
}
getMaxOfArray();




