var tiempoEsperaDesinflarGlobos = 2000

var colores = ["#82BB5D","#4C678C","#D4786A"]

//cantidad de globos en pantalla
var cantidadGlobos = 3

var cantidadIntentos = 10

//contenedor de iconode intentos restantes
var contenedorIntentosRestantes = document.getElementById("intentos")

//contador de globos pinchados
var globosPinchados = 0

//contador de click fuera de los globos
var clickFueraGlogo = 0

//tag que contiene todo los globos
var contenedorGlobos = document.getElementById("contenedorGlobos_js")

//capturar ancho y largo del lienzo svg
var widthContenedorGlobos = 650
var heightContenedorGlobos = 300

//tag que muestra la cantidad de globos pinchados
var contenedorGlobosPinchados = document.getElementById("tagContenedorGlobosPinchados")

//tag que muestra la cantidad de de click fuera de los globos

//---------------------
//funciones principales
//----------------------

//funcion que retorna un numero aleatorio entero en un rango determiando
function numeroAleatorio(max,min) {
	var aleatorio = Math.floor((Math.random() * max) + min)
	return aleatorio
}

function dibujarIntentos () {
	for (var i = 1; i <= cantidadIntentos-clickFueraGlogo; i++) {
		var iconoIntento = document.createElement("span")
		iconoIntento.classList.add("icon-intento","marginLateral","colorRojo")
		contenedorIntentosRestantes.appendChild(iconoIntento)
	}
}



//funcion para agregar el evento de click fuera del globo
function agregarEventosPresionFueraGlobo() {
	//agregar el evento de presionar fuera del globo
	contenedorGlobos.addEventListener("click", presionarFueraGlobo,false)
}

//fuction pra crear globos
function crearGlobos(){

	//ciclo para crear los globos
	for (var insertarGlobo =  1; insertarGlobo <= cantidadGlobos; insertarGlobo++){

		var SVGglobo = 'M' + numeroAleatorio(widthContenedorGlobos,30) + " " + numeroAleatorio(heightContenedorGlobos,30) + ' c-10.871 2.124-20.264 10.035-25.863 21.777-2.96 6.176-4.567 12.288-5.211 19.782-0.965 11.388 2.735 22.741 10.937 33.582 2.669 3.476 9.747 10.616 12.929 12.994 3.153 2.348 7.076 4.567 9.233 5.244 0.902 0.289 1.673 0.708 1.673 0.902 0 0.419-0.902 1.8-1.576 2.381-0.45 0.386-0.45 0.418 0.129 0.226 0.353-0.129 1.029-0.321 1.478-0.418l0.866-0.161 0.129 6.531c0.129 5.724 0.257 6.819 0.867 8.557 0.933 2.574 2.669 5.402 4.823 7.816 0.933 1.094 1.673 2.026 1.607 2.090-0.065 0.034-0.997 0.611-2.060 1.222-4.245 2.509-6.271 5.21-6.271 8.395 0 1.834 0.386 3.185 2.090 7.592 0.965 2.414 1.223 3.57 1.319 5.628 0.066 1.414 0.097 2.669 0.129 2.799 0.034 0.515 1.286 0.226 2.124-0.516 0.772-0.644 0.903-1.061 1.029-2.832 0.161-2.473-0.419-4.888-2.189-9.327-1.382-3.409-1.576-4.888-0.804-6.401 0.611-1.19 3.089-2.767 6.402-4.182 1.866-0.772 2.606-1.255 2.96-1.996 0.289-0.516 0.45-0.965 0.386-1.029s-1.413-1.479-2.992-3.118c-5.052-5.244-6.271-8.426-6.271-16.76v-5.051h0.833c0.45 0 1.093 0.161 1.449 0.321 0.772 0.418 0.772 0.418-0.034-1.127-0.353-0.708-0.645-1.414-0.645-1.607 0-0.161 1.127-0.902 2.508-1.607 7.91-4.053 17.723-14.024 23.159-23.578 5.596-9.812 7.432-18.88 6.017-29.752-2.473-18.88-13.927-34.065-28.629-37.893-3.314-0.833-9.425-1.093-12.545-0.483z'

		//crear tag para el globo
		tagGlobo = document.createElementNS("http://www.w3.org/2000/svg","path")

		//agregar las calses y atributos
		tagGlobo.classList.add("globo")
		tagGlobo.setAttribute("fill", colores[numeroAleatorio(colores.length,0)])
		tagGlobo.setAttribute("d",SVGglobo)

		//agregar el tag a el contenedor de globos
		contenedorGlobos.appendChild(tagGlobo)



	}
	dibujarIntentos()

}
//funcion para capturar los globos(en un array)
function capturarGlobos(){

	//captura de un HTMLCollections de los globos
	var globosTemp = document.querySelectorAll(".globo")

	//convertir el HTMLCOllections en un Array
	var globos = [].slice.call(globosTemp);


	return(globos)
}

//funcion que agregar el evento de click a los globos
function agregarEventosPresionGlobo(globos){

	//añadir evento el evento click a los globos

	globos.forEach(function(globo,positionGlobo){
		globo.addEventListener("click", presionarGlobo,true)

	});
}


//---------------------
//funciones de eventos
//----------------------
function presionarFueraGlobo() {
	while(contenedorIntentosRestantes.hasChildNodes()){
		contenedorIntentosRestantes.removeChild(contenedorIntentosRestantes.firstChild)
	}
	clickFueraGlogo += 1
	dibujarIntentos()


}

//funcion listener para el evento click de los globos
function presionarGlobo(event){

	event.stopPropagation()
	this.removeEventListener("click", presionarGlobo,true)
	var globloT = this

	//añadir uno al contador de globos pinchados
	globosPinchados += 1

	//agregar la clase de globo pinchado al globo al cual se le da click
	this.classList.add("globoDesinflado")

	setTimeout(function(globoT) {
		contenedorGlobos.removeChild(globloT)
	}, tiempoEsperaDesinflarGlobos)

	//se actualiza el numero de globos pinchados en el HTML
	contenedorGlobosPinchados.innerHTML = globosPinchados

}

function finallyValues(){
	var values = {
		puntaje : globosPinchados
	}
	return values
}

//-----------------------------//
//-----------------------------//
//-----------------------------//

agregarEventosPresionFueraGlobo()

crearGlobos()

var globos = capturarGlobos()

agregarEventosPresionGlobo(globos)


