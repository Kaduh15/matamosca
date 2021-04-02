var altura = 0
var largura = 0

ajustaTamanhoPalcoJogo()

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura, largura)
}

var posiçãoX = parseInt(Math.random() * largura)
var posiçãoY = parseInt(Math.random() * altura)

console.log(posiçãoX, posiçãoY)