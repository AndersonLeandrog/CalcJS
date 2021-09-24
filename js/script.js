function calcularIMC() {
    const peso = document.getElementById('pesoKg').value
    const altura = document.getElementById('alturaM').value
    let resultado = peso / (altura * altura);
    document.getElementById('mostrar').innerHTML= resultado.toFixed(2)

    //verifica o valor do IMC e dependendo do valor ele retornará uma situação
    const exibirResultado = document.getElementById('situacao')

    if(resultado >= 40) {
        exibirResultado.innerHTML='Obesidade G3'
    } else if(resultado < 40 && resultado > 35) {
        exibirResultado.innerHTML='Obesidade G2'
    } else if(resultado < 35 && resultado >= 30) {
        exibirResultado.innerHTML='Obesidade G1'
    } else if(resultado < 29.9 && resultado >= 25) {
        exibirResultado.innerHTML='Est Sobrepeso'
    } else if(resultado < 24.9 && resultado >= 18.5) {
        exibirResultado.innerHTML='Peso  . Normal'
    } else if(resultado < 18.5) {
        exibirResultado.innerHTML='Estado. Magro'
    }
}
