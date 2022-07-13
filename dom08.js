const eValor = document.querySelector("p");

const eButtons = document.querySelectorAll("button");
const eParButton = eButtons[0];
const eIMparButton = eButtons[1];

const eList = document.querySelectorAll("ul");
const eParList = eList[0];
const eImparList = eList[1];

function sorteiaValor() {
    const novoNumero = Math.floor(Math.random()*10);
    eValor.textContent = novoNumero;
}

eParButton.addEventListener("click", function(){
    console.log("É par!");
    criaElemento(eParList);});
    
    
eIMparButton.addEventListener("click", event => {
    console.log("É ímpar!");
    criaElemento(eImparList);
    });
    
function criaElemento(lista){
    const eLi = document.createElement("li")
    eLi.textContent = eValor.textContent;
        
    lista.appendChild(eLi);

    sorteiaValor();
}
