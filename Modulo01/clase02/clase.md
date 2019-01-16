## Clase 2

## Etiquetas de tipo Img
las etiquetas **img** nos va permitir poder agregar a nuestra web imágenes.
las etiquetas **img** van a contar 2 atributos importantes **alt=""** y **title=""**

````````
<img src="rutadefoto.jpg" atl="" title="">

````````


## Rutas:
el concepto de rutas nos va a permitir entender como podemos incluir img , archivos , enlaces a nuestra web.
estos se dividien en 2 :

### Rutas Absolutas
se puede definir como la ruta del archivo en donde se tiene como origen de la ruta la raiz de los archivos del SO

### Rutas Relativas
se puede definir como la ruta del archivo en donde se tiene como origen de la ruta de la carpeta en donde se encuentra el archivo en el cual estas trabajando.




## Enlaces
los enlances en nuestras paginas son creados mediante las etiquetas **a** y usan el atributo **href=""** para definir el acceso a elementos , en otros palabras la etiqueta de tipo a crea un enlace a otras páginas de internet, archivos o ubicaciones dentro de la misma página

````````
<a href="http://www.gooogle.com">Click Aqui</a>

````````


la etiqueta de tipo a soporta los siguientes atributos:

* **download** Este atributo, indica descargar a los navegadores una URL en lugar de navegar hacia ella, por lo que el usuario será dirigido para salvarla como un archivo local. 


````````
<a href="foto.jpg" download>Click Aqui</a>
````````


* **href** Contiene una URL a la cual apunta el enlace.

````````
<a href="http://www.gooogle.com">Click Aqui</a>
````````
* **target** nos permit definir el compartamiento al hacer click en el enlace.

cuando el atributo target="_self" tiene el valor *_self este permite que en enlace se abra en la misma pestaña
````````
<a href="http://www.gooogle.com" target="_self">Click Aqui</a>
````````
por el contrario cuando el atributo target tiene el valor *_blank este permite que en enlace se abra en otra pestaña
````````
<a href="http://www.gooogle.com" target="_blank">Click Aqui</a>
````````


la etiqueta de tipo **a** también nos permite tener llamados de acción del siguiente tipo

````````
<a href="mailto:jcarlos@gmail.com">Enviar correo a jcarlos@gmail.com</a>
````````
````````
<a href="tel:+51952345456">+51 957 157 156</a>
````````


