
let numeroAdivinar = Math.floor(Math.random() * 100 + 1);
let inputUsuario = 0;
let intentos = 0;
let salida = document.getElementById("salida");
let respuesta = document.getElementById("respuesta");
let prueba = document.getElementById("prueba");


function PlayGame(){
    inputUsuario = parseInt(respuesta.value);
    prueba.innerHTML = "El numero es = ?";
    
    if(inputUsuario !== numeroAdivinar){
        
        salida.innerHTML = "El numero no es el: " + inputUsuario;
        salida.style.color = 'red';
        respuesta.style.border = '1px solid red';
        intentos++;
    }
    if(inputUsuario == numeroAdivinar){
        salida.innerHTML = "Has adivinado el numero!"
        salida.style.color = 'black';
        respuesta.style.border = '1px solid green';
    }
}
function ResetGame(){

    numeroAdivinar = Math.floor(Math.random() * 100 + 1);
    prueba.innerHTML =  "El numero es = ?";
    salida.innerHTML = "Empieza a Jugar!";
    salida.style.color = 'black';
    respuesta.style.border = 'black';
    respuesta.value = '';
    respuesta.focus();
}
function MostrarRespuesta(){
    prueba.innerHTML =  "El numero es = " + numeroAdivinar;
}