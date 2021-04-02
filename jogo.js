var altura = 0
var largura = 0

ajustaTamanhoPalcoJogo()

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura, largura)
}

var posiçãoX = parseInt(Math.random() * largura) - 90
var posiçãoY = parseInt(Math.random() * altura) - 90

posiçãoX = posiçãoX < 0 ? 0 : posiçãoX 
posiçãoY = posiçãoY < 0 ? 0 : posiçãoY 

console.log(posiçãoX, posiçãoY)

var mosca = document.createElement("img")
mosca.src = "Img/mosca.png"
mosca.className = "mosca"
mosca.style.left = posiçãoX + "px"
mosca.style.top = posiçãoY + "px"
mosca.style.position = "absolute"

document.body.appendChild(mosca)