const text = document.getElementById('text');
const lorem = document.getElementById('lorem');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');

// to Uppercase f-ja

function paverstiDidziosiomis() {
    text.value = text.value.toUpperCase();
    console.log(text.value.toUpperCase())
}

// return and replace f-ja

function doesTextIncludeString() {
    console.log(lorem.textContent.includes(text.value));

    return lorem.textContent.includes(text.value);
}

function checkIfTextExistsAndReplace() {
    if (doesTextIncludeString()) {
        lorem.innerHTML = lorem.textContent.replace(text.value, text.value.bold());
    }
}

// concat f-ja

function concatText() {
    console.log(input1.value.concat(' ', input2.value));
}

// length f-ja 

function getTextLength() {
    console.log(input1.value.length);
}