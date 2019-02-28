/*$("#item1").click(function(){
	$("#item1").addClass("activado");
})*/
/*$(".nav-site ul li").click(function(){
	$(".nav-site ul li").addClass("activado");
})*/

/*
$("#item1").click(function(){
	limpiar();
	$("#item1").addClass("activado");

})

$("#item2").click(function(){
	limpiar();
	$("#item2").addClass("activado");
	
})

$("#item3").click(function(){
	limpiar();
	$("#item3").addClass("activado");
	
})

function limpiar(){
	$("#item2").removeClass("activado");
	$("#item1").removeClass("activado");
	$("#item3").removeClass("activado");

}
*/


$(".nav-site ul li").click(function(){
	$(".nav-site ul li").removeClass("activado");
	$(this).addClass("activado");
})