ejecicioEnEjecucion = true

var btnVerificar = document.getElementById("btnVerificar_js")
btnVerificar.addEventListener("click", verificarPrueba,true)
console.log(btnVerificar);

function verificarPrueba(evento) {

	console.log('hola');


	var rs = new Array()
	var continueFlow = true
	var frames = document.getElementsByTagName("iframe")
	console.log(frames);

	for (var i = 0,frame; frame = frames[i]; i++) {
		console.log(frame);
		var r = frame.contentWindow.finallyValues()
		if (r == undefined){
			continueFlow = false
		}else{
			rs.push(r)

		}
	}
	if (continueFlow) {
		console.info('estadisticas');
		$('#myModal').modal('show')
		console.warn(rs)
	}else{
		console.warn("hay algo sin llenar")
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
