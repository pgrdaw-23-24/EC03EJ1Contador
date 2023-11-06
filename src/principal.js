import { incrementar, reset } from './contador.js'

const contador = document.getElementById('contador')
const b_incrementar = document.getElementById('b_incrementar')
const b_reset = document.getElementById('b_reset')

var num = 0

b_incrementar.onclick = () => {
    num = incrementar(num)
    actualizarContador()
}

b_reset.onclick = () => {
    num = reset()
    actualizarContador()
}

function actualizarContador() {
    contador.innerHTML = `${num}`  
}


