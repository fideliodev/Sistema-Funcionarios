const song = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-positive-interface-beep-221.mp3')

function loginUSU() {

    const USUaqwe = document.querySelector('.loginWrite').value;


    if (USUaqwe == 'admin') {
        song.play()
        alert('Senha Correta!')
        location.href = 'painelDeControle.html';



    } else {

        alert('senha errada, tente novamente!')
    }
} 