/*realiza os cálculos criando 3 variáveis e retornando o valor de duas inputs, por fim, 
atribuindo a 'x', o valor de 'a / (b * b)' e retornando esse resultado 'x' dentro da div 
'mostrar', utlizando o método 'toFixed()' para mostrar apenas duas casas decimais após a vírgula.*/
function calcular() {
    var a, b, x;
    a = document.getElementById('pesoKg').value;
    b = document.getElementById('alturaM').value;
    x = a / (b * b);
    document.getElementById('mostrar').innerHTML= x.toFixed(2);

    /*if aninhado verifica o valor do IMC e dependendo do valor ele retornará uma situação*/
    if(x >= 40) {
        document.getElementById('situacao').innerHTML='Obesidade G3';
    } else if(x < 40 && x > 35) {
        document.getElementById('situacao').innerHTML='Obesidade G2';
    } else if(x < 35 && x >= 30) {
        document.getElementById('situacao').innerHTML='Obesidade G1';
    } else if(x < 29.9 && x >= 25) {
        document.getElementById('situacao').innerHTML='Est Sobrepeso';
    } else if(x < 24.9 && x >= 18.5) {
        document.getElementById('situacao').innerHTML='Peso  . Normal';
    } else if(x < 18.5) {
        document.getElementById('situacao').innerHTML='Estado. Magro';
    }
}

function darkModeOn() {
    document.querySelector('.container').style.backgroundColor='black';
    document.querySelector('.config').style.filter='grayscale(1)';
    document.querySelector('.content').style.backgroundColor='#696969';
    document.getElementsByTagName('h1')[0].style.color='white';
    document.querySelector('.title').style.color='whitesmoke';

    var input = document.getElementsByTagName('input');
        input[0].style.color='white';
        input[0].style.backgroundColor='#808080';
        input[0].style.borderBottom='1px solid white';

        input[1].style.color='white';
        input[1].style.backgroundColor='#808080';
        input[1].style.borderBottom='1px solid white';

    var table = document.getElementsByTagName('table');
        table[0].style.backgroundColor='#808080';
        table[0].style.color='white';
}

function darkModeOf() {
    document.querySelector('.container').style.backgroundColor='rgb(80, 98, 255)';
    document.querySelector('.config').style.filter='grayscale(0)';
    document.querySelector('.content').style.backgroundColor='rgb(248, 248, 248)';
    document.getElementsByTagName('h1')[0].style.color='black';
    document.querySelector('.title').style.color='#808080';

    var input = document.getElementsByTagName('input');
        input[0].style.color='black';
        input[0].style.backgroundColor='rgb(235, 235, 235)';
        input[0].style.borderBottom='1px solid gray';

        input[1].style.color='black';
        input[1].style.backgroundColor='rgb(235, 235, 235)';
        input[1].style.borderBottom='1px solid gray';

    var table = document.getElementsByTagName('table');
        table[0].style.backgroundColor='rgb(231, 231, 231)';
        table[0].style.color='black';
}
