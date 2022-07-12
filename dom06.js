console.log("Hello06");

//Captura referencias do DOM
const eP = document.querySelector("p");
const eButton = document.querySelector("button");
function mudaTexto()
{
    eP.textContent = "OK, funcionou!";
}

function ouvinteClick (event)
{
    console.log("ouvinteClick disparou")
    mudaTexto();
}

eButton.addEventListener("click", ouvinteClick);
