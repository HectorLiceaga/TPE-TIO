'use strict';


msj = document.getElementById("msj");
document.getElementById("btn").addEventListener("click", comentBelow(msj));

function comentBelow(msj) {
    var newDiv = document.createElement("div"); 
    var newContent = document.createTextNode(msj); 
    newDiv.appendChild(newContent); //añade texto al div creado. 
    var currentDiv = document.getElementById("formulario"); 
    document.body.insertBefore(currentDiv, newDiv); 
}