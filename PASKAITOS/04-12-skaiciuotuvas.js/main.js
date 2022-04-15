const answerZone = document.getElementById('answerZone');
let previestNumber; //firstNumber keicia previesNumber
let symbolParameter;

function addNumber(number) {
    if (Number(answerZone.textContent) == 0) {
        answerZone.textContent = number;

    } else {
        answerZone.textContent += number;

    }

    function deleteNumber() {  
        answerZone.textContent = answerZone.textContent.slice(0, -1); //neaiski funkcija, kazkodel prigesusi
        if (answerZone.textContent.length == 0) {
            answerZone.textContent = 0;
        }
    }



    // pirmas/paprastesnis budas nurodyti matematinius skaiciavimus. Kiekvienam mat.veiksmui vis nauja funkcija. Nepatogu.
    // function plusAction () {
    //     firstNumber = Number(answerZone.textContent);
    //     answerZone.textContent = 0;
    // }

    // function equalsAction () {
    //     answerZone.textContent = firstNumber + Number(answerZone.textContent);
}

// kitas būdas atlikti mat.veiksmus - visiems priskirti viena klase. naudoti salygos sakinius taip vykdant parametrus:

function mathActions(symbolParameter) {
    if (previestNumber) {
        equals();
    }
    previestNumber = Number(answerZone.textContent);
    symbol = symbolParameter; //skaiciuojant sudeti, symbolParameter yra + simbolis
    answerZone.textContent = 0; //nunulinam tam, kad spaudziant kita reiksme atsirastu 0
}

function equalsAction() {
    if (symbol == '+') {
        answerZone.textContent = previestNumber + Number(answerZone.textContent);
    } else if (symbol == '-') {
        answerZone.textContent = previestNumber - Number(answerZone.textContent);
    } else if (symbol == '*') {
        answerZone.textContent = previestNumber * Number(answerZone.textContent);
    }else if (symbol == '/') {
        answerZone.textContent = previestNumber / Number(answerZone.textContent);
    }
}


