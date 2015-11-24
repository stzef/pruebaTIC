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
			icon.src = "public/img/icons/correcto.png"
		}else if(tipo == 1){
			var icon = document.createElement("img")
			icon.src = "public/img/icons/incorrecto.png"
		}
		else if(tipo == 2){
			var icon = document.createElement("img")
			icon.src = "public/img/icons/informacion.png"
		}

		icon.classList.add("contenedorIcon")
		mensaje.classList.add("contenedorMensaje")

		var top = window.window.scrollY
		contenedorMSG.appendChild(icon)
		contenedorMSG.appendChild(mensaje)

		contenedorMSG.setAttribute("style", "top:" + top + "px")


		widnow.body.appendChild(contenedorMSG)

		setTimeout(function(){
			widnow.body.removeChild(widnow.body.lastChild)
		}, 2000)

}
