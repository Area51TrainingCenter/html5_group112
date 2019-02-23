var titulo;
var btn_cambiar;
titulo=document.getElementById('title-site');
btn_cambiar=document.getElementById('cambiar-texto');
console.log(titulo);
console.log(btn_cambiar);
btn_cambiar.addEventListener("click",tarea)

function tarea(){
	titulo.innerHTML="Texto Cambiado por JS";
	
}
