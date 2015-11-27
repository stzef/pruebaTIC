var iframe = window.frames.frameElement
console.log(iframe)
var id = iframe.name
console.log(id);
function finallyValues(){

	var respuestas = document.getElementsByName("pregunta")
	var value = null

	for (var i = 0,respuesta; respuesta = respuestas[i]; i++) {
		if (respuesta.checked){
			value = respuesta.getAttribute("data-peso")
			break
		}
	}

	if (value == null){
			return //message(2,"No a seleccionado ninguna respuesta.")
		}else{
			var values = {
				idPregunta : id,
				tipoPregunta: "seleccion",
				puntaje : value
			}
		}

		return values
	}
