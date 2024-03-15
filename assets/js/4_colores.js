// Div cambio de color a negro

let cuadradoAzul = document.querySelector('#box-azul');
cuadradoAzul.addEventListener('click', function(){
    cuadradoAzul.style.backgroundColor = 'black'
})

let cuadradoRojo = document.querySelector('#box-rojo');
cuadradoRojo.addEventListener('click', function(){
    cuadradoRojo.style.backgroundColor = 'black'
})

let cuadradoVerde = document.querySelector('#box-verde');
cuadradoVerde.addEventListener('click', function(){
    cuadradoVerde.style.backgroundColor = 'black'
})

let cuadradoAmarillo= document.querySelector('#box-amarillo');
cuadradoAmarillo.addEventListener('click', function(){
    cuadradoAmarillo.style.backgroundColor = 'black'
})

//Cambio de color con el teclado

function pintar(color){
    const box4 = document.getElementById("key");
    box4.style.backgroundColor = color;
}
document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
    pintar('pink')
    } else if (event.key === 's') {
    pintar('orange')
    } else if (event.key === 'd'){
    pintar('skyblue')
    }
    })

//Crear nuevo div 

function crearDiv(color){
    const divNuevo = document.createElement('div');
    divNuevo.style.width = '200px';
    divNuevo.style.height = '200px';
    divNuevo.style.border = '1px solid black';
    divNuevo.style.backgroundColor = color;
    document.body.appendChild(divNuevo);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'q') {
    crearDiv('purple')
    } else if (event.key === 'w') {
    crearDiv('gray')
    } else if (event.key === 'e'){
    crearDiv('brown')
    }
    })


