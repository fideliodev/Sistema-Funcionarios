const funcionarioNome = document.querySelector('.funcionarioNome')
const botaoSubmit = document.querySelector('.botaoSubmit')
const historico = document.querySelector('.conteudo-contratado')
//

const logDemitidos = document.querySelector('.btn-demitir')

const song = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-quick-win-video-game-notification-269.mp3')
const song2 = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-positive-interface-beep-221.mp3')


function criaLi() {
    const h5 = document.createElement('h5')
    return h5

}

funcionarioNome.addEventListener('keypress', function(e) {
        if (e.keyCode === 13) {
            if (!funcionarioNome.value) return;
            criaTarefa(funcionarioNome.value);
        }
    })
    
function limpaInput() {
    funcionarioNome.value = ''
    funcionarioNome.focus();
}

function criaTarefa(textInput) {
    const h5 = criaLi();
    h5.innerText = textInput;
    historico.appendChild(h5);
    limpaInput();
    criaBotaoApagar(h5);


}

botaoSubmit.addEventListener('click', function(e) {
    e.preventDefault()
    funcionarioAdicionado()
    if (!funcionarioNome.value) return;
    criaTarefa(funcionarioNome.value);
   
});


function criaBotaoApagar(h5) {
    h5.innerText += '';
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Demitir'
    botaoApagar.setAttribute('class', 'btn-demitir')
    h5.appendChild(botaoApagar);
   
    botaoApagar.addEventListener('click', function(){
        song2.play()
        toastLog()
    })
  
}


function toastLog(){
    
    const funcionarioID = document.querySelector('.funcionarioID')
   
    const elementHtml = `<h1>Funcionario ${funcionarioID.value}, foi demitido </h1>`
    document.querySelector('.conteudo-demitido').innerHTML = elementHtml
    funcionarioID.value = ''
    logToastDemitido()

}

document.addEventListener('click', function(e) {
    const el = e.target;
    if (el.classList.contains('btn-demitir')) {
       el.parentElement.remove();

    
    }
});


function funcionarioAdicionado(){
    song.play()
}

const toastDemitido = document.querySelector('.toast-demitido')


function timeOutToast(){
   toastDemitido.classList.remove('toast-demitido-on')

}

function logToastDemitido(){
    toastDemitido.classList.add('toast-demitido-on')
    setTimeout(timeOutToast, 3000)
}


