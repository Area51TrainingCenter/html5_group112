$(".ui-nav-site ul li").click(function(){
      $(".ui-nav-site ul li").removeClass("activado");
      $(this).addClass("activado");
      //$(".ui-nav-site ul li").css("background-color","transparent")
      //$(this).css("background-color","white");

})


var arregloFotos=["ruta1","ruta2"]

/*
$(window).click(function(){

  $(".modal1").fadeOut();
  $("body").removeClass("fijo");
})
*/
/*
$("#foto1").click(function(){
   event.stopPropagation();
   // obtienen
   //$(".pic").attr("src")
  // actualiza el valor 
  $(".pic").attr("src","https://www.nacionrex.com/__export/1543527792304/sites/debate/img/2018/11/29/avengers-4-fan-trailer-x-men-fantastic-four-1130186-1280x0.jpeg_1834093470.jpeg");
  $(".modal1").fadeIn();
  $("body").addClass("fijo");
   
})
*/
/*
$(".contenido-modal").click(function(){
   event.stopPropagation();
   //return false;
   
})


$(".item-grid a").click(function(){
  event.stopPropagation();
  event.preventDefault();
})

$(".item-grid img").click(function(){
 // var ruta=$(this).attr("src");
  //var ruta="img/hulk.jpg"
  //var ruta="img/maquinaguerra.jpg"
   var ruta=$(this).attr("data-ruta");
   $(".modal1").fadeIn();
   $("body").addClass("fijo");
   $(".pic").attr("src",ruta);

   $(this).addClass("seleccionado");
})




$(".nav-right").click(function(){  
  var elementosiguiente=$(".seleccionado").parent().parent().next().find("img");
  console.log(elementosiguiente.length);
  if(elementosiguiente.length==0){
    // no hay elemento siguiente
  }
  else{
    // si hay elemento siguiente
    var ruta=elementosiguiente.attr("data-ruta");
    $(".item-grid a img").removeClass("seleccionado");
    $(elementosiguiente).addClass("seleccionado");
    $(".pic").attr("src",ruta);
  }
  
})

$(".nav-left").click(function(){
    var elementoanterior=$(".seleccionado").parent().parent().prev().find("img");
  if(elementoanterior.length==0){

  }else{
     var ruta=$(elementoanterior).attr("data-ruta");
     
     $(".item-grid a img").removeClass("seleccionado");
     $(elementoanterior).addClass("seleccionado");
     $(".pic").attr("src",ruta);
  }

 
})
*/


$(window).scroll(function(){
  let top=$(window).scrollTop();
  console.log(top);
  if(top>100){
    //mostrar link up
    $(".link-up").fadeIn();
  }
  else{
    // ocultar link up
    $(".link-up").fadeOut();
  }


/*
  if(top>0){
    $(".header-site").addClass("fixed-menu")
  }
  else{
    $(".header-site").removeClass("fixed-menu")
  }
*/
if(top>98){
$(".menu-fixed2").addClass("show-menu")

}
else{
$(".menu-fixed2").removeClass("show-menu")
}
})


$(".link-up").click(function(){
 //$(window).scrollTop(0);
 //$(ele).animate(background-color:black,1000)
scrollMovimiento(0);
})



// usando de manera especifica cada elemento del menu

// el click para item servicios
$("#servicios-menu").click(function(){

  let top=$("#services").offset().top-30;
  scrollMovimiento(top);
})
// el click para item project
$("#portafolio").click(function(){
  let data=$("#project").offset().top-30;
    scrollMovimiento(data);
})


/*
automatizando las tareas , usando el micro dato
tener en cuenta que el micro dato debe coincidir con el
nombre de la seccion para poder automatizar el proceso.
$(".ui-nav-site ul li").click(function(){
  let data=$(this).attr("data-seccion")
  var top=$("#"+data).offset().top;
  $("html,body").animate({scrollTop:top},1000);
})
*/

function scrollMovimiento(valor){
 $("html,body").animate({scrollTop:valor},1000);

}

