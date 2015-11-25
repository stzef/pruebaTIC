var dropzone = document.querySelector("[data-dropzone]")
var draggables = document.querySelectorAll("[draggable]")
var zonetags = document.getElementById("zonetags_js")
var elementdrag = null


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

	elementdrag.classList.add("disabled")

	var alt = evento.dataTransfer.getData("text/plain",1)
	var data = evento.dataTransfer.getData("text/plain",0)

	elementdrag.removeEventListener("dragstart", dragInit)
	elementdrag.addEventListener("dragstart", dragDefault)

	var tag = document.createElement("span")
	tag.setAttribute("data-c", data)
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
	elementdrag = evento.target

	alt = this.getAttribute("alt")
	dataBoolean = this.getAttribute("data-c")

	evento.dataTransfer.setData("text/plain",alt,1)
	evento.dataTransfer.setData("text/plain",dataBoolean,1)
}

for (var i = 0, draggable; draggable =  draggables[i]; i++) {
	draggable.addEventListener("dragstart", dragInit)
}

//dropzone.addEventListener("dragstart", dragDefault,true)
dropzone.addEventListener("drop", callbackDrop,true)
dropzone.addEventListener("dragover", callbackonDragOver,true)


function finallyValues(){

	var respuestas = zonetags.children
	var value = 0

	for (var i = 0,respuesta; respuesta = respuestas[i]; i++) {
		var data = respuesta.getAttribute("data-c")
		if (eval(data)){
			value += 1
		}
	}

	var values = {
		puntaje : value
	}

	return values
}
