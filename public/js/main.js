ejecicioEnEjecucion = true
recomendaciones = new Array()
var rs = new Array()
var glo = null

$("#btnRestart_js").on("click",function() {
	location.reload()
})

var btnVerificar = document.getElementById("btnVerificar_js")
btnVerificar.addEventListener("click", verificarPrueba,true)

function verificarPrueba(evento) {

	rs = []
	var continueFlow = true
	var frames = document.getElementsByTagName("iframe")

	for (var i = 0,frame; frame = frames[i]; i++) {
		var r = frame.contentWindow.finallyValues()
		if (r == undefined){
			continueFlow = false
		}else{
			rs.push(r)

		}
	}
	if (continueFlow) {
		dataSend = JSON.stringify(rs)
		$.ajax({
			url: "/save",
			type:"POST",
			async: false,
			contentType: 'application/json; charset=utf-8',
			dataType: 'text',
			data: dataSend,
			success: function(result){
				console.log(result)
				console.log("-------------")
				dataResponseTemp = eval("[" + result + "]")
				dataResponse = dataResponseTemp[0]
			}});

		console.warn(dataResponse.classCss)
		for (var i = 0; i < rs.length; i++ ) {

			var tr = $("<tr></tr>")
			tr.addClass(dataResponse.clases[i])
			tr.append($("<td></td>").text(dataResponse.t[i]))

			console.log(2)
			if (rs[i].tipoPregunta == "actividad"){
				tr.append($("<td></td>").text(rs[i].correcto))
				tr.append($("<td></td>").text(rs[i].incorrecto))
				tr.append($("<td></td>").text(dataResponse.r[i]))


			}else{
				tr.append($("<td></td>").attr("colspan","2").text(rs[i].puntaje))
				tr.append($("<td></td>").text(dataResponse.r[i]))
			}

			$(".tableResult").append(tr)
		}
		$('#myModal').modal('show')



	}else{
		var msg = new message()
		msg.show(2,"Falta(n) alguna(s) pregunta(s) por responder.")
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



function message(){

	this.show = function (tipo,msg) {
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

}
