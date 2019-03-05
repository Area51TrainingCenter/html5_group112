$("#btn-grabar").click(function(){
	var nombre="";
	var apellidos="";
	var correo="";
	var facebook="";
	nombre=$("#inp_nombres").val();
	apellidos=$("#inp_apellidos").val();
	correo=$("#inp_correo").val();
	facebook=$("#inp_facebook").val();
	$("#listado").append(`<div class="card" style="width: 18rem;">
							  <img src="https://via.placeholder.com/300x100" class="card-img-top" alt="...">
							  <div class="card-body">
							    <h5 class="card-title"> ${nombre} ${apellidos}</h5>
							    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							    <a href="${facebook}" class="btn btn-primary">Ir a facebook</a>
							  </div>
							</div>`)
})