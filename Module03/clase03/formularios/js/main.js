var grabar1=document.getElementById('btn-grabar')
grabar1.addEventListener("click",grabarDatos)
function grabarDatos(){
	event.preventDefault();
	var nombre_input=document.getElementById('nombre').value;

	

	if(nombre_input==""){
		alert("ingresa un valor")
	}
	else{
		var detalle=document.getElementById('detalle')
		detalle.innerHTML=nombre_input;	
	}

}