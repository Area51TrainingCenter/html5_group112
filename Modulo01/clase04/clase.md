# Clase 04	

## Formularios
Los formularios evolucionaron y con ellos las etiquetas que nos permitian crear controles para poder solicitar información al usuario.
El problema que podemos encontrar con estos controles es que todavía no tiene el 100% de compatibilidad con todos los navegadores

````````
<form>
	<label>Búsqueda</label>
	<input type="search" name="">
	<label>Correo</label>
	<input type="email" name="">
	<label>Url</label>
	<input type="url" name="">
	<label>Telefono</label>
	<input type="tel" name="">
	<label>Numero</label>
	<input type="number"  min="0" max="18" step="0.5">
	<label>Rango</label>
	<input type="range" min="1" max="100" value="0">
	<label>Fecha</label>
	<input min="2012-01-01" max="2013-01-01" type="date">
	<label>Mes</label>
	<input type="month" required>
	<label>Semana</label>
	<input type="week">
	<label>Time</label>
	<input type="time">
	<label>Color</label>
	<input type="color">
	<input type="submit" name="">
</form>
````````
## Iframe
La etiqueta **iframe** representa un contexto de navegación anidada, el cual permite incorporar otra página HTML en la página actual

````````
<iframe src="rutadelcontenido" frameborder="0" scrolling="no">
````````

## Embed 

la etiqueta embed no permite poder insentar contenidos de una aplicación externa o de contenido interactivo

````````
<embed src="rutadelarchivo" width="" height=""></embed>
````````

## Etiquetas semanticas

las etiquetas semanticas que aparecen para poder marcar nuestro contenido de manera más rica son las siguientes:

* header 
* nav
* section
* article
* aside
* footer
* main
* figure
* figcaption
* date
