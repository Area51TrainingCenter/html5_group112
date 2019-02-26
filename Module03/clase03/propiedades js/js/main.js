var title=document.getElementById('title');
title.innerText="<strong>Texto</strong>";

var opcion=document.getElementById('opcion');
opcion.innerHTML="<strong>opcion</strong>";

var node = document.createElement("LI");                 // Create a <li> node
var textnode = document.createTextNode("Dos");         // Create a text node
node.appendChild(textnode);     
document.getElementById("listado").appendChild(node);  


var node = document.createElement("LI");                 // Create a <li> node
var textnode = document.createTextNode("Tres");         // Create a text node
node.appendChild(textnode);     

                         // Append the text to <li>
document.getElementById("listado").appendChild(node);     // Append <li> to <ul> with id="myList"



document.getElementById("listado").childElementCount

document.getElementById("listado").classList.add("tipo1");


document.getElementById("listado").className = "Activo";

document.getElementById("listado")("myList").firstChild.innerHTML;


document.getElementById("listado").getAttribute("class");

listado de porpiedades
https://www.w3schools.com/jsref/met_element_getattribute.asp
