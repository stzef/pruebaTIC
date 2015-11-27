var dropzone = document.querySelector("[data-dropzone]")
var draggables = document.querySelectorAll("[draggable]")
var zonetags = document.getElementById("zonetags_js")
var elementdrag = null
var iframe = window.frames.frameElement
console.log(iframe)
var id = iframe.name
console.log(id);



function dragDefault(evento){
	evento.preventDefault()
}

function deleteTag() {

	var padre = this.parentNode
	var id = padre.getAttribute("element-parentNode")
	var elemento = document.getElementById(id)

	elemento.classList.remove("disabled")

	elemento.removeEventListener("dragstart", dragDefault)
	elemento.addEventListener("dragstart", dragInit)

	zonetags.removeChild(padre)
}

function callbackDrop(evento) {
	evento.stopPropagation()

	elementdrag.classList.add("disabled")
	console.log(elementdrag)

	var alt = evento.dataTransfer.getData("text/plain",0)
	console.log(alt)
	var data = evento.dataTransfer.getData("text/html",1)
	console.log(data)

	elementdrag.removeEventListener("dragstart", dragInit)
	elementdrag.addEventListener("dragstart", dragDefault)

	var tag = document.createElement("span")
	tag.setAttribute("data-c", data)
	tag.setAttribute("element-parentNode", alt)
	tag.innerText = alt
	tag.classList.add("tag")

	var dele = document.createElement("span")
	dele.classList.add("delete","icon-delete")
	dele.addEventListener("click", deleteTag)
	tag.appendChild(dele)

	console.log(tag);

	zonetags.appendChild(tag)
}

function callbackonDragOver(evento){
	evento.preventDefault()
}

function dragInit(evento) {

	elementdrag = this
	evento.dataTransfer.effectAllowed = 'move'
	evento.dataTransfer.dropEffect = 'move'

	var alt = this.getAttribute("alt")
	console.log(alt);
	var dataBoolean = this.getAttribute("data-c")
	console.log(dataBoolean);

	evento.dataTransfer.setData("text/plain",alt,0)
	evento.dataTransfer.setData("text/html",dataBoolean,1)
}

for (var i = 0, draggable; draggable =  draggables[i]; i++) {
	draggable.addEventListener("dragstart", dragInit)
}

dropzone.addEventListener("dragstart", dragDefault)
dropzone.addEventListener("drop", callbackDrop)
dropzone.addEventListener("dragover", callbackonDragOver)


function finallyValues(){

	var respuestas = zonetags.children
	var correcto = 0
	var incorrecto = 0

	if (respuestas.length == 0){
		return undefined
	}else{


		for (var i = 0,respuesta; respuesta = respuestas[i]; i++) {
			var data = respuesta.getAttribute("data-c")
			if (eval(data)){
				correcto += 1
			}else{
				incorrecto += 1
			}
		}

		var values = {
			idPregunta : id,
			tipoPregunta: "actividad",
			correcto : correcto,
			incorrecto : incorrecto
		}
	}

	return values
}
