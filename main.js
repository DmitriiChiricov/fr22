//Random key generator

const keys = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-="];


function GiveMeRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1));
}

function GiveMeRandomKey() {
    return  keys [GiveMeRandomNumber(0,keys.length)];
}


//activate random key
function ActivateRandomKey() {
    const C = document.getElementById(GiveMeRandomKey());
    C.classList.add("pressed")
}

//-----------
const li = document.querySelector('li')
window.addEventListener('keyup', (ev) => {
    const Cpress = String.fromCharCode(ev.keyCode)
    console.log(Cpress);
    const element = document.getElementById(Cpress)
   const selectedelement =document.querySelector('.pressed')
    element.classList.add('pressed')
if(Cpress === selectedelement.innerHTML){
selectedelement.classList.remove('pressed');
ActivateRandomKey();
}

});
ActivateRandomKey();