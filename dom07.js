console.log("Hello 07");

//Busca uma referência para o 1º elemento
const eH1 = document.querySelector("h1");
const eSpans = document.querySelectorAll("span");

const eA = eSpans[0];
const eB = eSpans[1];
const eP = eSpans[2];
const eS = eSpans[3];

const eButtons =document.querySelectorAll("button");
const eButtonSoma = eButtons[0];
const eButtonsMultiplica = eButtons[1];

eButtonSoma.addEventListener("click", somaListener);
eButtonsMultiplica.addEventListener("click", multiplicaListener);

function somaListener(event)
{
    console.log("Soma Listener");
    soma();
    mudaSinalSoma();
}
function multiplicaListener(event)
{
    console.log("Multiplica Listener");
    multiplica();
    mudaSinalMultiplica();
}

function soma(params) {
    const a = Number(eA.textContent);
    const b = Number(eB.textContent);
    const c = a + b;
    eS.textContent = c;
}

function multiplica(params) {
    const a = Number(eA.textContent);
    const b = Number(eB.textContent);
    const c = a * b;
    eS.textContent = c;
}

function mudaSinalSoma() {
    eP.textContent = "+"
}

function mudaSinalMultiplica() {
    eP.textContent = "*"
}
