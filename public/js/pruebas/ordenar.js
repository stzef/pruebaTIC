var dropzones = document.querySelectorAll("[data-dropzone]")
,draggables = document.querySelectorAll("[draggable]")
,elementDrag = null
,CSSClassDisabled = "disabled"

function eventDrop(evento) {

	var elemento = evento.dataTransfer.getData("text/html",0)
	var atributo = evento.dataTransfer.getData("text/plain",1)
	var numeroItem = evento.dataTransfer.getData("text/plain",2)

	var contenedor = document.createElement("article")
	contenedor.innerHTML = elemento
	contenedor.classList.add("producto")
	contenedor.setAttribute("data-entrepanocorrecto",atributo)
	contenedor.setAttribute("data-numberItem",numeroItem)

	contenedor.addEventListener("click", eventDeleteElement)

	elementDrag.classList.add(CSSClassDisabled)
	elementDrag.removeEventListener("dragstart", eventDragStart)
	console.log(contenedor);
	this.appendChild(contenedor)
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

	console.warn(this.getAttribute("data-entrepanocorrecto"))

	evento.dataTransfer.setData("text/html", this.outerHTML , 0)
	evento.dataTransfer.setData("text/plain", this.getAttribute("data-entrepanocorrecto") , 1)
	evento.dataTransfer.setData("text/plain", this.id , 2)
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
		console.info(respuestas);

		for (var j = 0,respuesta; respuesta =  respuestas[j]; j++) {
			console.log(dropzone.getAttribute("data-entrepano"));
			console.log(respuesta.getAttribute("data-entrepanocorrecto"));
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
