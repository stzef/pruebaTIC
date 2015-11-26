ejecicioEnEjecucion = true

var btnVerificar = document.getElementById("btnVerificar_js")
console.log(btnVerificar);
btnVerificar.addEventListener("click", verificarPrueba)

function verificarPrueba() {
	var frames = window.frames
	console.log(frames);
	for (var i = 0,frame; frame = frames[i]; i++) {
		console.log(frame);
		frame.finallyValues()
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
