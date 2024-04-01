function gas(){
    var consumo = document.querySelector('#consumo').value
    var dist = document.querySelector('#dist').value

    var gasto = (parseFloat(dist) / parseFloat(consumo)) * 5.75
    alert('Seu gasto foi de: R$' + gasto)
}

function alcool(){
    var consumo = document.querySelector('#consumo').value
    var dist = document.querySelector('#dist').value

    var gasto = (parseFloat(dist) / parseFloat(consumo)) * 3.42
    alert('Seu gasto foi de: R$' + gasto)
}

function diesel(){
    var consumo = document.querySelector('#consumo').value
    var dist = document.querySelector('#dist').value

    var gasto = (parseFloat(dist) / parseFloat(consumo)) * 5.93
    alert('Seu gasto foi de: R$' + gasto)
}

