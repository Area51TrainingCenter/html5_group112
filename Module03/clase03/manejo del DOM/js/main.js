var btn=document.getElementById('evento');
console.log(btn);
btn.addEventListener("click",tarea);

function tarea(){
var detalle=document.getElementsByClassName('detalle');
detalle[0].innerHTML="Texto Modificado por JS";
detalle[0].classList.add("cambiado");
}

btn.addEventListener("mouseenter",tarea1);

function tarea1(){
	console.log("Entro al elemento");
}

function mostrar_parrafo(){
	console.log("click al parrafo");
}