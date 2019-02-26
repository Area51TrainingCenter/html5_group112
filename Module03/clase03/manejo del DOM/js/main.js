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

var ele_inicio=document.getElementById('inicio');
ele_inicio.addEventListener("click",cambio)

var ele_nosotros=document.getElementById('nosotros');
ele_nosotros.addEventListener("click",cambio2)


function cambio(){
	ele_inicio.classList.add("activo");
	ele_nosotros.classList.remove("activo");

}


function cambio2(){
	ele_nosotros.classList.add("activo");
	ele_inicio.classList.remove("activo");
}
