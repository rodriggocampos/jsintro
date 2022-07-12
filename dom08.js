const eValor = document.querySelector("p");

const eButtons = document.querySelectorAll("button");
const eParButton = eButtons[0];
eParButton.addEventListener("click", ehParListener);
const eIMparButton = eButtons[1];
eIMparButton.addEventListener("click", ehImparListener);

const eList = document.querySelectorAll("ul");
const eParList = eList[0];
const eImparList = eList[1];

function sorteiaValor() {
    const novoNumero = Math.floor(Math.random()*10);
    eValor.textContent = novoNumero;
}

function ehParListener(event) {
    console.log("É par!");
    criaElemento(true);
}

function ehImparListener(event) {
    console.log("É ímpar!");
    criaElemento(false);
}

function criaElemento(ehPar){
    const eLi = document.createElement("li")
    eLi.textContent = eValor.textContent;

    if(ehPar){
        eParList.appendChild(eLi);
    } else{
        eImparList.appendChild(eLi)
    }
    sorteiaValor();
}
