
// ----------------cookies--------------------------------------

const cookieDisplay = document.getElementById('cookieDisplay');
const firstUpgrade = document.getElementById('Kocelai');

// Count/skaiciavimas

let cookieCount = getCookie('cookieCount') || 0; //elementas kiek kartu paspaudziamas mygtukas
let babyteCount = getCookie('babyteCount') || 0;

// Intervals/intervalai

let babyteInterval;

// Display/ekranas

cookieDisplay.textContent = cookieCount; //priskiriama ekranui
firstUpgrade.style.display ='none';  // nerodyti upgrade, kol nebus ivykdyta tam tikra funkcija

// Cookie production/sausainuku gamyba

let cookieProduction = {
    babyte: {
        base: 0.5,
        upgrade: false,
    },
}

function increaseCookieCount() {
    cookieCount++;
    setCookie('cookiesCount', cookieCount)
}

function setCookie(name, value) { //si funkcija tem, kad uzsetintume cookie narsyklei. Reikia nurodyti name ir value 
    document.cookie = `${name}=${value}`
}

function getCookie(name) { //issitraukiam cookie
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);

    if (parts.length === 2) return parts.pop().split(';').shift();

}
console.log(getCookie('cookieCount'));


const buyBabyte = () => {
    if (cookieCount >= 20) {
        cookieCount = Number(cookieCount) - 20;
        setCookie('babyteCount', babyteCount)

        babyteCount++
        setBabyteInterval()
        
        setCookie('babyteCount', babyteCount)

        setCookie('cookieCount', cookieCount)
        cookieDisplay.textContent = cookieCount

        
        
        dirbanciosBabytes();
        babyteUpgrade();
    }
}




let babyteInterval = getCookie('babyteInterval')










function dirbanciosBabytes() {
    if (babyteCount) {
        if (babyteInterval) clearInterval(babyteInterval);

        babyteInterval = setInterval(() => babyteArkliukas(), 1000);


        cookieDisplay.textContent = cookieCount;
    }
}

function babyteArkliukas() {
    cookieCount = Number(cookieCount) + 0.5 * babyteCount;
    setCookie('cookieCount', cookieCount)
    cookieDisplay.textContent = cookieCount
}
dirbanciosBabytes();


function babyteUpgrade() {
    if (babyteCount >= 5) {
        firstUpgrade.style.display = 'block';
    }

    if (cookieProduction.babyte.upgrade) {
        firstUpgrade.disabled = true;
    }
}
babyteUpgrade();