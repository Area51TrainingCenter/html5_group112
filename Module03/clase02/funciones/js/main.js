//alert("Bienvendio al siito");
var dato1=prompt("Ingresa numero1");
var dato2=prompt("Ingresa numero1");
/*
var n1=dato1-0;
var n2=dato2-0;
*/
var n1=parseInt(dato1);
var n2=parseInt(dato2);

/*parseInt("20") // 20 
parseInt("5") // 5
*/
 var suma=n1+n2;
console.log(suma);
n1=0;
n2=0;
console.log(suma);



var n1=10;
var n2=20;
var suma1=n1+n2;
console.log(suma1)

var n3=10;
var n4=20;
var sum2=n3+n4;

console.log(suma2)
var n5=10;
var n6=20;
var suma3=n5+n6;
console.log(suma3)

function nombre_de_funcion(){
	// lineas de codigo a ejecutar
}

function suma(){
	var n1=10;
	var n2=20;
	var suma=n1+n2;
	console.log(suma);

}

//funcion sin parametros o con parametros
// funcion sin parametros
function tarea1(){
	// linea de codigo
}
// funcion con parametros

function tarea1(valor1,valor2,valor3)
{
	var suma;

	suma=parseInt(valor1)+parseInt(valor2)+parseInt(valor3);
	console.log(suma);

}
// funciones con retorno 
	function limpiar_inputs(){
		// limpiar inputs
	}
// funciones sin retorno
	function calcular_igv(valor1){
		var igv=valor1*0.18;
		return igv;
	}

	function edadPermitida(edad){
		let estado;
		// validar de 18 años
		// si edad es mayor	estado=true;
		// si no estado =false	
		return estado;
	}

	// funcion sin parametros y sin retorno
	limpiar_inputs()

	var igv=calcular_igv(500)
	console.log(igv)

	var comprobar_edad=edadPermitida(20);



var persona={
	nombre:"juan carlos",
	apellidos:"Ramos"
}

