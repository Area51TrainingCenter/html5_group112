/*$("#cambiar").click(tarea)

function tarea(){
	$("#title").html("Texto Modificado");
}
*/
var texto;
$("#cambiar").click(function(){
	texto=$("#title").html();
	$("#title").html("Texto modificado");
})
$("#regresar").click(function(){
	$("#title").html(texto);	
})

$("#agregar-clase").click(tarea2)
function tarea2(){
	$("#title").addClass("activado");
	//$("#title").removeClass("activado");
}

/*
$(".elenmento").click(function (){


})

$(".elenmento").click(nombre)
function nombre()
{
$(".otro-elemento").cambio()
}

*/
//$("#ele").mouseenter();

// seleccion de elemento en base a selccion de CSS
//$(".nav-site ul li");