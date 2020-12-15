window.addEventListener('load', start);

var red = null;
var green = null;
var blue = null;

var QuadradoColorido = null;
        
const rangeInputs = Array.from(
    document.querySelectorAll('input[type="text"]')
);

function start () {
    red = document.querySelector('#red');
    green = document.querySelector('#green');
    blue = document.querySelector('#blue');

    red.addEventListener('input', ColorPrint);
    green.addEventListener('input', ColorPrint);
    blue.addEventListener('input', ColorPrint);
}

function ColorPrint(){

    Valor = red.value;
    Valor1 = green.value;
    Valor2 = blue.value;

    QuadradoColorido = document.querySelector('#color');
    
    rangeInputs[0].value = Valor;
    rangeInputs[1].value = Valor1;
    rangeInputs[2].value = Valor2;

    rgb = `rgb(${Valor},${Valor1},${Valor2})`;
    QuadradoColorido.style.backgroundColor = rgb;
}




