var dropzone = document.querySelector("[data-dropzone]")
var draggables = document.querySelectorAll("[draggable]")
var zonetags = document.getElementById("zonetags_js")
var elementdrag = null

dropzone.addEventListener("dragstart", dragDefault)
function dragDefault(evento){
	evento.preventDefault()
	evento.effectAllow = "move"
}

function deleteTag() {
	console.log('borrando');
	var padre = this.parentNode
	var id = padre.getAttribute("element-parentNode")
	var elemento = document.getElementById(id)
	elemento.classList.remove("disabled")
	elemento.removeEventListener("dragstart", dragDefault)
	elemento.addEventListener("dragstart", dragInit)
	zonetags.removeChild(padre)


}
dropzone.ondrop = function(evento) {

	elementdrag.classList.add("disabled")
	console.log('drop');
	var src = evento.dataTransfer.getData("text/plain",0)
	console.log(src);
	var alt = evento.dataTransfer.getData("text/plain",1)
	console.log(alt);
	elementdrag.removeEventListener("dragstart", dragInit)
	elementdrag.addEventListener("dragstart", dragDefault)

	var tag = document.createElement("span")
	tag.innerText = alt
	tag.setAttribute("element-parentNode", alt)
	tag.classList.add("tag")

	var dele = document.createElement("span")
	dele.innerText = "x"
	dele.classList.add("delete")
	dele.addEventListener("click", deleteTag)
	tag.appendChild(dele)
	zonetags.appendChild(tag)
}
dropzone.ondragover = function(evento){
	evento.effectAllow = "move"
	evento.dropEfect = "move"
	evento.preventDefault()
}

function dragInit(evento) {
	elementdrag = evento.target

	console.log('drag');

	evento.dataTransfer.setData("text/plain",this.src,0)
	evento.dataTransfer.setData("text/plain",this.alt,1)

}

for (var i = 0, draggable; draggable =  draggables[i]; i++) {
	draggable.addEventListener("dragstart", dragInit)
}
