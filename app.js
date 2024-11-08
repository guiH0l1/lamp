/**
 * Simular uma lampada com aperto de um interruptor e quebra
 * @author Guilherme Holi
 */

let chave = false
let lampada = true


function quebrar() {
    if (lampada === true) {
        //reproduzindo um arquivo de audio do JS
        // passo 1: copiar o arquivo de audio para o projeto
        // passo 2: usae a classe Audio(biblioteca interna do JS)
        let som = new Audio()
        som.src = "sound/glassbreaking.wav"
        som.play()
        //apoio a logica para o JS identificar a lampada
        document.getElementById('lamp').src = "img/broken.jpg"
        lampada = false
    }
}

function onoff() {
    if (chave === false && lampada === true) {
        document.getElementById('interruptor').src = "img/swon.png"
        document.getElementById('lamp').src = "img/on.jpg"
        chave = true //chave ligada
    } else if (lampada === true) {
        document.getElementById('interruptor').src = "img/swoff.png"
        document.getElementById('lamp').src = "img/off.jpg"
        chave = false
    }
}


