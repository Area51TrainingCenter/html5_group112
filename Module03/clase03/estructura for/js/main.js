listado=["Luis","Raúl","Roberto","Luis","Martín","Daniel", "Micaela"];
var limite=listado.length;



for (var i = 0; i < limite; i++) {
	var node = document.createElement("LI");                 // Create a <li> node
	var textnode = document.createTextNode(listado[i]);         // Create a text node
	node.appendChild(textnode);     
	document.getElementById("listado").appendChild(node);  


}
