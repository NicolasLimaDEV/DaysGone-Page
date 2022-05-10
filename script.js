const btnDark = document.querySelector('.btn-dark');
btnDark.addEventListener('click', dark)
btnDark.addEventListener('click', aparecer)

function dark(){
    const body = document.querySelector('.body');
    body.classList.toggle('dark-theme');

    let img1 = document.querySelector('.imagem01');
    img1.classList.toggle('show-img1')
    let img2 = document.querySelector('.imagem02');
    img2.classList.toggle('show-img2')
}

function motor(){
    let somMotor = document.getElementById('motor-arranque');
    somMotor.play();    
}

function tiro(){
    let somTiro = document.getElementById('tiro');
    somTiro.play();
}