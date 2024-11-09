/**
 * Simular uma lampada com aperto de um interruptor e quebra
 * @author Guilherme Holi
 */

let chave = false
let lampada = true

//pre carregamento do arquivo de audio
let som = new Audio('sound/breaking-glass.mp3')

// lanterna (pré carregamento)
let stream, track //variaveis de apoio
inicializarLanterna()


function quebrar() {
    if (lampada === true) {
        //reproduzindo um arquivo de audio do JS
        // passo 1: copiar o arquivo de audio para o projeto
        // passo 2: usae a classe Audio(biblioteca interna do JS)
        // passo 3: pré carregar o arquivo de audio para sincronizar com a troca de imagem (UX)
        som.play()
        //apoio a logica para o JS identificar a lampada
        document.getElementById('lamp').src = "img/broken.jpg"
        lampada = false
    }
}

function onoff() {
    if (chave === false) {
        document.getElementById('interruptor').src = "img/swon.png"
        chave = true //chave ligada
        //verificar se a chave esta intecta antes de acender
        if (lampada === true) {
            document.getElementById('lamp').src = "img/on.jpg"
        }
    } else {
        document.getElementById('interruptor').src = "img/swoff.png"
        chave = false
        //verificar se a chave esta intecta antes de acender
        if (lampada === true) {
            document.getElementById('lamp').src = "img/off.jpg"
        }
    }
}

//Estudo de eventos relacionados a click do mouse (pressionado ou não pressionado) e telas touch
//passo 1 - Capturar os elementos do html (DOM)
const botao = document.getElementById('button')
const lampadaImg = document.getElementById('lamp')

//passo 2 - Manipular o evento mouse pressionado
// "addEventListener" escuta eventos em tempo real

// mousedown (manter o botão do mouse pressionado)
botao.addEventListener('mousedown', (event) => {
    event.preventDefault()//ignorar o comportamento padrão
    //console.log('botão pressionado')
    // se a lampada estiver intacta e o interruptor principal estiver desligado
    if (lampada === true && chave ===false){
        lampadaImg.src='img/on.jpg'//troca a imagem
    }
})
//mouseup (soltar o botão do mouse) 
botao.addEventListener('mouseup', (event) => {
    event.preventDefault()//ignorar o comportamento padrão 
   // console.log('botão solto')
     // se a lampada estiver intacta e o interruptor principal estiver desligado
     if (lampada === true && chave ===false){
        lampadaImg.src='img/off.jpg'//troca a imagem
    }
})

//touchstart (tocar na tela e manter)
botao.addEventListener('touchstart', (event) => {
    event.preventDefault()//ignorar o comportamento padrão 
   // console.log('tela pressionado')
   if (lampada === true && chave ===false){
    lampadaImg.src='img/on.jpg'//troca a imagem
} 
})
//touchend (deixar de pressionar a tela touch) 
botao.addEventListener('touchend', (event) => {
    event.preventDefault()//ignorar o comportamento padrão 
   // console.log('tela livre')
   if (lampada === true && chave ===false){
    lampadaImg.src='img/off.jpg'//troca a imagem
}
})

//Lanterna (torch)
async function inicializarLanterna(){
   // try catch (tratamento de exceções)
    try {
        // Solicita acesso à câmera traseira sem exibir o vídeo
        stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "environment" }
        })
        
        // Obtém o track do vídeo para controlar a lanterna
        track = stream.getVideoTracks()[0]
        
        // Verifica se o dispositivo suporta o uso da lanterna
        const capabilities = track.getCapabilities()
        if (!capabilities.torch) {
            console.log("Lanterna não suportada no dispositivo.")
            return
        }
    } catch (error) {
        console.error(`Erro ao inicializar a lanterna: ${error}`)
    }
}

async function ligar(){
    if (track) {
        try {
            await track.applyConstraints({ advanced: [{ torch: true }] })
        } catch (error) {
            console.error(`Erro ao inicializar a lanterna: ${error}`)
        }
    }
}

async function desligar(){
    if (track) {
        try {
            await track.applyConstraints({ advanced: [{ torch: false }] })
        } catch (error) {
            console.error(`Erro ao inicializar a lanterna: ${error}`)
        }
    }
}
