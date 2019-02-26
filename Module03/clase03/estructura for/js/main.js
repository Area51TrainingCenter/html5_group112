listado=["Luis","Raúl","Roberto"];
for (var i = 0; i < listado.length; i++) {
	var node = document.createElement("LI");                 // Create a <li> node
	var textnode = document.createTextNode(listado[i]);         // Create a text node
	node.appendChild(textnode);     
	document.getElementById("listado").appendChild(node);  


}
