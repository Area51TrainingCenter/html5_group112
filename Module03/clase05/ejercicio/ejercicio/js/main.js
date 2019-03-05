$(".ui-nav-site ul li").click(function(){
      $(".ui-nav-site ul li").removeClass("activado");
      $(this).addClass("activado");
      //$(".ui-nav-site ul li").css("background-color","transparent")
      //$(this).css("background-color","white");

})



$(window).click(function(){

  $(".modal1").fadeOut();
  $("body").removeClass("fijo");
})

$("#foto1").click(function(){
   event.stopPropagation();
  $(".modal1").fadeIn();
  $("body").addClass("fijo");
   
})

$(".contenido-modal").click(function(){
   event.stopPropagation();
   //return false;
   
})