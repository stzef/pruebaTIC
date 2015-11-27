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

		var SVGglobo = "M" + numeroAleatorio(widthContenedorGlobos-50,50) + " " + numeroAleatorio(heightContenedorGlobos-50,50) + " h-68.351c-1.258 0-2.278 1.020-2.278 2.278l2.278 36.454c0 1.26 1.020 2.278 2.278 2.278h63.795c1.26 0 2.278-1.019 2.278-2.278l2.278-36.454c0-1.258-1.019-2.278-2.278-2.278 h-25.062l-4.556-6.835c0-1.258-1.019-2.278-2.278-2.278h-27.34c-1.258 0-2.278 1.020-2.278 2.278v6.835h-6.835c-1.258 0-2.278 1.020-2.278 2.278v4.556c0 1.258 1.020 2.278 2.278 2.278h68.352c1.26 0 2.278-1.020 2.278-2.278v-4.556c0-1.258-1.019-2.278-2.278-2.278z"

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
	if (globosPinchados > 0 || clickFueraGlogo > 0 ){
		var values = {
			tipoPregunta: "actividad",
			correcto : globosPinchados,
			incorrecto : clickFueraGlogo
		}
	}else{
		values = undefined
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


