function ligarModoEscuro() {
    document.querySelector('body').style.backgroundColor='black';
    document.querySelector('.config').style.filter='grayscale(1)';
    document.querySelector('.content').style.backgroundColor='#696969';
    document.querySelector('h1').style.color='white';
    document.querySelector('.title').style.color='whitesmoke';

    const input = document.getElementsByTagName('input');
    for(let i = 0; i < input.length; i++) {
        input[i].setAttribute
        (
            'style',`
            color: white; 
            border-bottom: 1px solid white; 
            background: #808080;`
        )
    }

    const table = document.querySelectorAll('table');
    table.setAttribute
    (
        'style',`
        color: white; 
        background: #808080;`
    )
}

function desligarModoEscuro() {
    document.querySelector('body').style.backgroundColor='rgb(80, 98, 255)';
    document.querySelector('.config').style.filter='grayscale(0)';
    document.querySelector('.content').style.backgroundColor='rgb(248, 248, 248)';
    document.getElementsByTagName('h1')[0].style.color='black';
    document.querySelector('.title').style.color='#808080';

    const input = document.getElementsByTagName('input');
    for(let i = 0; i < input.length; i++) {
        input[i].setAttribute
        (
            'style',`
            color: black; 
            border-bottom: 1px solid gray; 
            background: rgb(235, 235, 235);`
        )
    }

    const table = document.querySelectorAll('table');
    table.setAttribute
    (
        'style',`
        color: black;`
    )
}
