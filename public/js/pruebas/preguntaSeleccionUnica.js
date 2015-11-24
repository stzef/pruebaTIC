function finallyValues(){

	var respuestas = document.getElementsByName("pregunta")
	var value = null

	for (var i = 0,respuesta; respuesta = respuestas[i]; i++) {
		if (respuesta.checked){
			value = respuesta.getAttribute("data-peso")
			break
		}	}

		if (value == null){
			return //message(2,"No a seleccionado ninguna respuesta.")
		}else{
			var values = {
				puntaje : value
			}
		}

		return values
	}
