var classes = document.getElementsByClassName("classe")

console.log(classes)

for(i=0; i <= 3; i++) {
    classes[i].style.display = "none"
}

var contador = 0

var classeSelecionada = classes[contador]

classeSelecionada.style.display = "block"

const botaoEsquerdo = document.getElementById("seta-esquerda")

const botaoDireito = document.getElementById("seta-direita")

botaoEsquerdo.addEventListener("click",
    () => {
        if(contador !== 0) {
            for(i=0; i <= 3; i++) {
                classes[i].style.display = "none"
            }

            contador--

            classeSelecionada = classes[contador]
    
            classeSelecionada.style.display = "block"

            botaoDireito.classList.remove("botao-desabilitado")

            botaoDireito.classList.add("hover-botao")
        }

        if(contador == 0) {
            botaoEsquerdo.classList.add("botao-desabilitado")

            botaoEsquerdo.classList.remove("hover-botao")
        }
    }
)

botaoDireito.addEventListener("click",
    () => {
        if(contador !== 3) {
            for(i=0; i <= 3; i++) {
                classes[i].style.display = "none"
            }

            contador++

            classeSelecionada = classes[contador]
    
            classeSelecionada.style.display = "block"

            botaoEsquerdo.classList.remove("botao-desabilitado")

            botaoEsquerdo.classList.add("hover-botao")
        }

        if(contador == 3) {
            botaoDireito.classList.add("botao-desabilitado")

            botaoDireito.classList.remove("hover-botao")
        }
    }
)