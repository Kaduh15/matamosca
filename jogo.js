var altura = 0
var largura = 0

ajustaTamanhoPalcoJogo()

setInterval(() => {
    posiçõesAleatorias()
}, 1000)

posiçõesAleatorias()

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura, largura)
}

function posiçõesAleatorias() {

    if (document.getElementById('mosca')) {
        document.getElementById('mosca').remove()
    }


    var posiçãoX = parseInt(Math.random() * largura) - 90
    var posiçãoY = parseInt(Math.random() * altura) - 90

    posiçãoX = posiçãoX < 0 ? 0 : posiçãoX
    posiçãoY = posiçãoY < 0 ? 0 : posiçãoY

    console.log(posiçãoX, posiçãoY)

    var mosca = document.createElement("img")
    mosca.src = "Img/mosca.png"
    mosca.className = tamanhoAleatorio()
    mosca.style.left = posiçãoX + "px"
    mosca.style.top = posiçãoY + "px"
    mosca.style.position = "absolute"
    mosca.style.transform = `scaleX(${ladoAleatorio()})`
    mosca.id = 'mosca'

    document.body.appendChild(mosca)
}

function tamanhoAleatorio() {
    var classe = parseInt(Math.random() * 3)

    switch(classe) {
        case 0:
            return 'mosca1'
        case 1:
            return 'mosca2'
        case 2:
            return 'mosca3'
    }
}

function ladoAleatorio() {
    var lado = parseInt(Math.random() * 2)

    switch(lado) {
        case 0:
            return -1
        case 1:
            return 1
    }
}