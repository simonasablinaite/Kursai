const numberZone = document.getElementById('numberZone');

function addNumber(number) {
    if (Number(numberZone.textContent) == 0) {
        numberZone.textContent = number;
    } else {
        numberZone.textContent += number;
    }
}

function deleteNumber() {
    numberZone.textContent = numberZone.textContent.slice(0, -1);
}