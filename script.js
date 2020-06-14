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

/*desenvolvido por Anderson Leandro*/