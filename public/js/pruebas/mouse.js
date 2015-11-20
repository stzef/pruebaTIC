var inicioRecorrido = document.getElementById("inicioRecorrido_js")
,recorrido = document.getElementById("recorrido_js")
,finRecorrido = document.getElementById("finRecorrido_js")
,objeto = document.querySelector(".objeto")
,activityInEjecution = false

function iniciar(evento) {
	activityInEjecution = true
}
function enRecorrido(evento){
	if (activityInEjecution){
		var posX = evento.offsetX
		if (posX>0 && posX<300){
			console.log('menos');
		}
	}
}
function iniciarRecorrido() {
	recorrido.addEventListener("mouseleave", enRecorrido,false)
	inicioRecorrido.removeEventListener("mouseleave", iniciarRecorrido)
}

function move(evento) {
	var top = evento.offsetX
	var left = evento.offsetY
	this.setAttribute("style", "top:" + top + "px;left:" + left + "px")
	console.log(this);

}

function press(evento){
	this.addEventListener("mousemove", move)
}function noPress(evento){
	this.removeEventListener("mousemove", move)
	console.log('remove');
}

inicioRecorrido.addEventListener("click", iniciar)
inicioRecorrido.addEventListener("mouseleave", iniciarRecorrido)
objeto.addEventListener("mousedown", press)
objeto.addEventListener("mouseup", noPress)
