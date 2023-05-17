const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById("lamp")

function islampbroken () {
    return lamp.src.indexOf ( 'quebrada ') > -1
}

function lampOn () {
    if (!islampbroken()) {
        lamp.src = "./img/acesa.jpg" ; 
    }
}

function lampOff () {
    if (!islampbroken()) {
        lamp.src = './img/apagada.jpg'
    }
}

function lampbroken() {
    lamp.src = './img/quebrada.jpg'
}

turnOn.addEventListener ('click', lampOn)
turnOff.addEventListener('click', lampOff)
lamp.addEventListener ('mouseover', lampOn)
lamp.addEventListener ('mouseleave', lampOff)
lamp.addEventListener ('dblclick', lampbroken)
