// pavyzdys Nr.1

let a, b, c;
a = 4;
b = 'suo';
c = false;

console.log(a, b, c);

// Reiksmiu sujungimas. Pavyzdys Nr.2
d = (a + b);
console.log(d);

d = (c - b);
console.log(d);

let e = 8;

d = (a - e);
console.log(d);

let f = 'labas';
let g = 'rytas';

d = (f + ' ' + g);
console.log(d)

// arba

d = ([f] + [g]);
console.log(d)

// Masyvo [] naudojimas. Pavyzdys Nr.3 

d = [a, e, c];
console.log(d);

// arba
console.log(d[0], d[1], d[2])

// Salygos. Vykdys koda, jei uzklausa tenkins salyga. Pavyzdys Nr. 4

const reiksme_1 = 5;
const reiksme_2 = 2;

if (reiksme_1 == reiksme_2) {
    console.log('reiksme atitinka');
} else {
    console.log('reiksme neatitinka');
}

const akys = 'kita spalva';

if (akys === 'zalios') {
    console.log('zaliaakis');
} else if (akys === 'melynos') {
    console.log('melynakis');
} else if (akys === 'kita spalva') {
    console.log('spalva neatpazinta');
}

// __________Uzduotis__________

const inputForNumbers = document.getElementById(forNumbers);

const reiksme_x = 5

function count() {
    const inputValue = inputForNumbers.value;
    const inputValueToNumber = parseInt(inputForNumbers);
}
console.log(reiksme_x + inputValueToNumber);