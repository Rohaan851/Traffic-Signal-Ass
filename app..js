/* script.js */
let redLight = document.getElementById('red');
let yellowLight = document.getElementById('yellow');
let greenLight = document.getElementById('green');
let car = document.getElementById('car');

let currentLight = 'red';

function changeLight() {
    switch (currentLight) {
        case 'red':
            redLight.style.backgroundColor = 'red';
            yellowLight.style.backgroundColor = 'gray';
            greenLight.style.backgroundColor = 'gray';
            currentLight = 'green';
            break;
        case 'yellow':
            redLight.style.backgroundColor = 'gray';
            yellowLight.style.backgroundColor = 'yellow';
            greenLight.style.backgroundColor = 'gray';
            currentLight = 'red';
            break;
        case 'green':
            redLight.style.backgroundColor = 'gray';
            yellowLight.style.backgroundColor = 'gray';
            greenLight.style.backgroundColor = 'green';
            currentLight = 'yellow';
            moveCar();
            break;
    }
}

function moveCar() {
    car.style.left = 'calc(100% - 60px)';
    setTimeout(() => {
        car.style.left = '10px';
    }, 3000);
}

redLight.addEventListener('click', changeLight);
yellowLight.addEventListener('click', changeLight);
greenLight.addEventListener('click', changeLight);

changeLight();
