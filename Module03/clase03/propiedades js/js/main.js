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

                      
document.getElementById("listado").appendChild(node);     // Append <li> to <ul> with id="myList"
var agregar =document.getElementById('agregar');
agregar.addEventListener("click",agregar_elemento)
function agregar_elemento(){
	var node = document.createElement("LI");                 // Create a <li> node
	var textnode = document.createTextNode("Tres");         // Create a text node
	node.appendChild(textnode);     

                      
document.getElementById("listado").appendChild(node);
}
/*

document.getElementById("listado").childElementCount

document.getElementById("listado").classList.add("tipo1");


document.getElementById("listado").className = "Activo";

document.getElementById("listado")("myList").firstChild.innerHTML;


document.getElementById("listado").getAttribute("class");

listado de porpiedades
https://www.w3schools.com/jsref/met_element_getattribute.asp



*/ 