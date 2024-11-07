/**
 * Simular uma lampada com aperto de um interruptor e quebra
 * @author Guilherme Holi
 */

function quebrar() {
    document.getElementById('lamp').src="img/broken.jpg"
    //reproduzindo um arquivo de audio do JS
    // passo 1: copiar o arquivo de audio para o projeto
    // passo 2: usae a classe Audio(biblioteca interna do JS)
    let som =  new Audio()
    som.src= "sound/glassbreaking.wav"
    som.play()
}