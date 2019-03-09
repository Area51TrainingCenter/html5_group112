var latitud;
var longitud;

$("#cargar-sitios").click(function(){
	traerDatos();
})


/* no sirve debido a que el elemetno no ha sido creado para cuando se asinga el evento
los elementos se crea a respuesta del getJSON 

$(".item").click(function(){
	alert("click");
})
*/


function listadoalerta(){
	alert("click");
}

function detalleItem(valor){
		$("#item_por_id").html("");
		$("#cargando").show();

	let url="http://sminnova.com/restapitrujillo/sitiosturisticos/id/"+valor;
	$.getJSON(url,function(data){
		$("#cargando").hide();
		console.log(data);
		let nombre=data[0].nombre;
		let direccion=data[0].direccion;
		let foto=data[0].foto_principal;
		let historia=data[0].historia;
		let latitud=data[0].latitud;
		let longitud=data[0].longitud;
	
		$("#item_por_id").append(`
					<h2 class="id_item_title">${nombre}</h2>
					<img  class="id_item_img" src="${foto}" alt="">
					<div class="id_item_detalle">${historia}</div>
					<button onclick="vermapa(${latitud},${longitud})" class="btn btn-primary" data-longitud="${longitud}" data-latitud="${latitud}" >Ver Mapa</button>`)
	})
}

function vermapa(latitud,longitud,tipo){
	console.log(latitud);
	console.log(longitud);
	

	var centro_map=new google.maps.LatLng(latitud,longitud)
	var opciones={
		center:centro_map,
		zoom:15,
		styles:type2
	}

	var elemento=document.getElementById('mapa');

	var mapa = new google.maps.Map(elemento,opciones)

	var opciones_marker={
		position:centro_map,
		map:mapa,
		animation:google.maps.Animation.BOUNCE,
		icon:"https://via.placeholder.com/100x100"
	}
	new google.maps.Marker(opciones_marker)

	var opciones_marker_2={
		position:centro_map,
		map:mapa,
		animation:google.maps.Animation.BOUNCE
	}
	new google.maps.Marker(opciones_marker_2)
	$(".modal").fadeIn();

}
function traerDatos(){
$(".listado").html("");
	var url="http://sminnova.com/restapitrujillo/sitiosturisticos";
	$.getJSON(url,function(data){
	
		let limite=data.length;	

		for(var i=0;i<limite;i++){
			let id=data[i].id;
			let nombre=data[i].nombre;
			let direccion=data[i].direccion;
			let foto_principal=data[i].foto_principal;

			$(".listado").append(`
						<article class="item" onclick="detalleItem('${id}')">
							<img class="img-item" src="${foto_principal}" alt="">
							<div class="texto-item">
								<h2 class="h3">${nombre}</h2>
								<p>${direccion}</p>
							</div>
						</article>`);


			
		}



	}) // end $.getJSON




}
