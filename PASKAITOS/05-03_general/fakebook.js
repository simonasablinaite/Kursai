const url = 'https://randomuser.me/api/';  //nuoroda fetch metodui
const peoples = '?results=100';// nuorodos galas, kvieciantis issitraukti 100 zmoniu

let cardElements = document.getElementById('elementsForCard');

let people;

function getPeople() { 
    fetch(url + peoples) 
        .then((response) => response.json() 
            .then((data) => { 
                people = data.results; 

                console.log(people); 
                profilePicture(people[0].picture.medium);

                let peopleInformation = people[0].name.first; 
                console.log(peopleInformation)

            }))

}
getPeople() 




function profilePicture(nuotrauka) {
    document.getElementById('profilePicture').src = nuotrauka;

}

function getInfoInCard() {
    fetch(url + peoples).then(response => response.json()
        .then(data => {
            cardElements.innerHTML += `
        <li class="list-group-item">${data.results[0].name.first}</li>
        <li class="list-group-item">${data.results[0].name.last}</li>
        <li class="list-group-item">${data.results[0].dob.age}</li>
        <li class="list-group-item">${data.results[0].location.country}</li>
        <li class="list-group-item">${data.results[0].location.city}</li>`
        }))
}
getInfoInCard();

// key iskonsolinimas ir ciuju nifiga neveikia :/

for (info in people) {  
    const peopleKeys = Object.keys(people) 
    console.log(peopleKeys);
}

//ciklo sukimas per array ir sitas neveikia :/

function getMorePeoples() {
    for (let i =0; i <= 6; i++) {
        const key = peoplesKeys[i];
        console.log(key, people[key]);
    }
}
// getMorePeoples();


// function createCardsWithInfo() {


//     let userFullInfo = people.map(function (data) {  //issikvieciu .map funkcija 
//         return `${ data.name.first } ${ data.name.last } ${ data.dob.age } ${ data.coordinates.country } ${ data.coordinates.state } ` //iskvieciu return, kad man grazintu nurodytus duomenis
//     })

//     }

// createCardsWithInfo();
