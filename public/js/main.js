ejecicioEnEjecucion = true

var btnVerificar = document.getElementById("btnVerificar_js")
btnVerificar.addEventListener("click", verificarPrueba,true)

function verificarPrueba(evento) {



	var rs = new Array()
	var continueFlow = true
	var frames = document.getElementsByTagName("iframe")

	for (var i = 0,frame; frame = frames[i]; i++) {
		var r = frame.contentWindow.finallyValues()
		console.log(r);
		if (r == undefined){
			continueFlow = false
		}else{
			rs.push(r)

		}
	}
	if (continueFlow) {
		for (var i = 0; i < rs.length; i++ ) {

			$(".result").append($("<p></p>").text("Pregunta #" + i + " -> Resultado : " + rs[i].puntaje + " puntos."))
		}
		$('#myModal').modal('show')


	}else{
		console.log('falta por realizar un ejercicio');
		return
	}

}

/*
//Activar en produccion
window.onbeforeunload = confirmarCierreVentana

function confirmarCierreVentana(){
	if (ejecicioEnEjecucion) {
		return 'Si cierra se perdera todo el progreso.'
	}
}
*/
