var dropzones = document.querySelectorAll("[data-dropzone]")
,draggables = document.querySelectorAll("[draggable]")
,elementDrag = null
,CSSClassDisabled = "disabled"

function eventDrop(evento) {

	var elementoString = evento.dataTransfer.getData("text/html")

	var parentAux  = document.createElement("div")
	parentAux.innerHTML = elementoString
	var elemento = parentAux.firstChild
	console.error(elemento)
	elemento.removeAttribute("draggable")
	elemento.setAttribute("data-numberItem",elemento.id)
	elemento.removeAttribute("id")



	elemento.addEventListener("click", eventDeleteElement)

	elementDrag.classList.add(CSSClassDisabled)
	elementDrag.removeEventListener("dragstart", eventDragStart)
	this.appendChild(elemento)
}

function eventDragOver(evento) {
	evento.preventDefault()
}

function eventDeleteElement() {
	father = this.parentNode
	father.removeChild(this)

	var itemNumbr = this.getAttribute("data-numberItem")
	var itemReal = document.getElementById(itemNumbr)
	itemReal.classList.remove("disabled")
	itemReal.addEventListener("dragstart", eventDragStart)
}

function eventDragStart(evento) {

	elementDrag = this

	var elementParent = this.outerHTML

	evento.dataTransfer.setData("text/html",elementParent )
}

for (var i = 0, dropzone; dropzone =  dropzones[i]; i++) {
	dropzone.addEventListener("drop", eventDrop)
	dropzone.addEventListener("dragover", eventDragOver)
}

for (var i = 0, draggable; draggable =  draggables[i]; i++) {
	draggable.addEventListener("dragstart", eventDragStart)
}
function finallyValues(){

	var value = 0
	for (var i = 0,dropzone; dropzone = dropzones[i]; i++) {

		var respuestas = dropzone.children

		for (var j = 0,respuesta; respuesta =  respuestas[j]; j++) {
			if (dropzone.getAttribute("data-entrepano") == respuesta.getAttribute("data-entrepanocorrecto")){
				value += 1
			}
		}
	}

	var values = {
		puntaje : value
	}

	return values
}
