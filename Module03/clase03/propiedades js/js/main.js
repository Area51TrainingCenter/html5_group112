var title=document.getElementById('title');
var temporal=title.innerText;
title.innerText=temporal+" Curso de html";

var opcion=document.getElementById('opcion');
opcion.innerHTML="<strong>opcion<img src='https://via.placeholder.com/200x200'></strong>";


var node = document.createElement("LI"); // creo elemenot                // Create a <li> node
var textnode = document.createTextNode("Dos");  // creo texto para elemeto       // Create a text node
node.appendChild(textnode);     

document.getElementById("listado").appendChild(node);  



var node = document.createElement("LI");                 // Create a <li> node
var textnode = document.createTextNode("Tres");         // Create a text node
node.appendChild(textnode);     

                      
document.getElementById("listado").appendChild(node);


var agregar =document.getElementById('agregar');
agregar.addEventListener("click",agregar_elemento)
function agregar_elemento(){
	var node = document.createElement("LI");                 // Create a <li> node
	var textnode = document.createTextNode("Tres");         // Create a text node
	node.appendChild(textnode);     

                      
document.getElementById("listado").appendChild(node);
}

// cantidad de elementos hijos que tiene el elemento
var cantidad=document.getElementById("listado").childElementCount
console.log(cantidad);
// manejar los metodos add y remove a nivel de clases de un elmento
document.getElementById("listado").classList.add("tipo1");

// remplaza las clases existentes
document.getElementById("listado").className = "Activo";


var primero_elemento=document.getElementById("listado").firstChild;
console.log(primero_elemento);


console.log(document.getElementById("listado").getAttribute("id"));
console.log(document.getElementById("listado").getAttribute("data-dia"));

/*
listado de porpiedades
https://www.w3schools.com/jsref/met_element_getattribute.asp



*/ 