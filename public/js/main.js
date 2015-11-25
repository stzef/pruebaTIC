ejecicioEnEjecucion = true
function message(tipo,msg){
	var contenedorMSG = document.createElement("article")
	contenedorMSG.classList.add("contenedorMensaje")
	var mensaje = document.createElement("p")
	var contenedorIcon = document.createElement("article")
	var contenedorMensaje = document.createElement("article")
	mensaje.innerHTML= msg
	var icono = document.createElement("span")
	contenedorMSG.classList.add("MSG")

	if (tipo == 0){
		var icon = document.createElement("img")
		icon.src = "/public/img/icons/correcto.png"
	}else if(tipo == 1){
		var icon = document.createElement("img")
		icon.src = "/public/img/icons/incorrecto.png"
	}
	else if(tipo == 2){
		var icon = document.createElement("img")
		icon.src = "/public/img/icons/informacion.png"
	}

	icon.classList.add("contenedorIcon")
	mensaje.classList.add("contenedorMensaje")

	var top = window.window.scrollY
	contenedorMSG.appendChild(icon)
	contenedorMSG.appendChild(mensaje)

	contenedorMSG.setAttribute("style", "top:" + top + "px")


	document.body.appendChild(contenedorMSG)

	setTimeout(function(){
		document.body.removeChild(document.body.lastChild)
	}, 2000)
}

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
