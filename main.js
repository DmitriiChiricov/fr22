//Random key generator
const keys = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"];
const lshift = document.getElementById('ShiftLeft')
const rshift = document.getElementById('rshift')
const caps = document.getElementById("caps")
const esc = document.getElementById("Escape")
const ent = document.getElementById('enter')
const bcksp = document.getElementById('Backspace')
function GiveMeRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1));
}

function GiveMeRandomKey() {
    return keys [GiveMeRandomNumber(0, keys.length)];
}

//activate random key
function ActivateRandomKey() {
    const C = document.getElementById(GiveMeRandomKey());
    C.classList.add("pressed")
}

//-----------
window.addEventListener('keyup', (ev) => {
    const Cpress = String.fromCharCode(ev.keyCode)
    console.log(Cpress);
    const element = document.getElementById(Cpress)
    const selectedelement = document.querySelector('.pressed')
    if (Cpress === selectedelement.innerHTML) {
        selectedelement.classList.remove('pressed');
        ActivateRandomKey();
    }
    if (ev.code == 'ShiftLeft') {
        lshift.classList.add('hit')
        lshift.addEventListener('animationend', () => {
            lshift.classList.remove('hit')
        })
    }
    if (ev.code === 'CapsLock') {
        caps.classList.add('hit')
        caps.addEventListener('animationend', () => {
            caps.classList.remove('hit');
        })
    }
    if (ev.code === 'Escape'){
        esc.classList.add('hit')
        esc.addEventListener('animationend',()=>{
            esc.classList.remove('hit')
        })
    }
    if (ev.code === 'Enter'){
        ent.classList.add('hit')
        ent.addEventListener('animationend',()=>{
            ent.classList.remove('hit')
        })
    }
    if (ev.code === 'ShiftRight'){
        rshift.classList.add('hit')
        rshift.addEventListener('animationend',() =>{
            rshift.classList.remove('hit')
        })
    }
    if (ev.code === 'Backspace'){
        bcksp.classList.add('hit')
        bcksp.addEventListener('animationend',()=>{
            bcksp.classList.remove('hit')
        })
    }
    else
    {
        element.classList.add('hit')
        element.addEventListener('animationend', () => {
            element.classList.remove('hit')
        })
    }
});
ActivateRandomKey();