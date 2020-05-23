'use strict';


let btn = document.querySelector("#btn");
btn.addEventListener("click", agregar);

let contenido = document.querySelector("#mostrar");

function agregar(){

    let nombre = document.querySelector("#nombre").value;
    let apellido = document.querySelector("#apellido").value;
    
    alert(nombre + " " + apellido + " gracias por escribirno sus datos fueron enviados")

}

function comentBelow(msj) {
    var newDiv = document.createElement("div"); 
    var newContent = document.createTextNode(msj); 
    newDiv.appendChild(newContent); //añade texto al div creado. 
    var currentDiv = document.getElementById("formulario"); 
    document.body.insertBefore(currentDiv, newDiv); 
}