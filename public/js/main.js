ejecicioEnEjecucion = true
recomendaciones = new Array()
var rs = new Array()

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
				recomendaciones = eval(result)
				console.log(1)
			}});

		for (var i = 0; i < rs.length; i++ ) {

			var tr = $("<tr></tr>")
			tr.append($("<th></th>").text(i))

			console.log(2)
			if (rs[i].tipoPregunta == "actividad"){
				tr.append($("<th></th>").text(rs[i].correcto))
				tr.append($("<th></th>").text(rs[i].incorrecto))
				tr.append($("<th></th>").text(recomendaciones[i]))


			}else{
				tr.append($("<th></th>").attr("colspan","2").text(rs[i].puntaje))
				tr.append($("<th></th>").text(recomendaciones[i]))
			}

			$(".tableResult").append(tr)
		}
		$('#myModal').modal('show')



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
