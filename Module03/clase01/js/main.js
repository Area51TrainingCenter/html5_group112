/*
Sintaxis : la forma como debe escribir en este lenguaje

 Palabras reservadas
 if 
 Math
 var 
 else 
 while
 console

 Variables: contenedoras de información que pueden variar en el tiempo.
*/

console.log("Bienvenido a JS");
var dato1;
var dato2;
var dato3;
// cadenas de texto
/*
	las cadenas de texto son representadas en " "  ó ''
*/

dato1="Juan Carlos alias 'el profe'";
dato2='Ramos Torriccelli';
dato3=null;
console.log(dato1);
console.log("dato1");
console.log(dato3);

var num1;
num1=99;

var num2;
num2="9989";

var edad=30;
var edad="30";


/*

+ suma
- resta
* multiplicacion
/ division
% modular

*/

var n1=20;
var n2=10;
var suma=n1+n2;
console.log(suma);

var n1="20";
var n2="10";
var suma=n1-n2;
console.log(suma);



var max=Math.max(10,30,29,495,3949,59697,345);
var min=Math.min(10,213,12309,304,5,607,43,3);

/*10.3= 10*/

var ceil=Math.ceil(10.3)   /* = 11 */
var floor=Math.floor(10.9) /* = 10 */
var redondeo=Math.round(10.3);
var aleatorio=Math.random()*10;
console.log(aleatorio);
var aleatorio_redondeado=Math.round(aleatorio);
console.log(aleatorio_redondeado)

var nombre="Juan carlos";
// length te devuelve el numero de caracteres de la cadena
nombre.length

// 1 o cualquier otro valor distinto a 0
var estado=true;

// 0,undifined, NaN
var estado=false;

// variable de tipo fecha

var fecha1="20/02/2019";

var fecha_real=new Date();
console.log(fecha1);
console.log(fecha_real);

var anio=fecha_real.getFullYear();
console.log(anio);

var mes=fecha_real.getMonth();
var dia_del_mes=fecha_real.getDate();
var dia_semana=fecha_real.getDay();
var horas=fecha_real.getHours();
var minutos=fecha_real.getMinutes();
var segundos=fecha_real.getSeconds();
console.log(mes+1);
console.log(dia_del_mes);
console.log(dia_semana+1);
console.log(horas);
console.log(minutos);
console.log(segundos);



