ejecicioEnEjecucion = true

var btnVerificar = document.getElementById("btnVerificar_js")
btnVerificar.addEventListener("click", verificarPrueba,true)

function verificarPrueba(evento) {



	var rs = new Array()
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
		for (var i = 0; i < rs.length; i++ ) {
			console.log(rs)

			var tr = $("<tr></tr>")
			tr.append($("<th></th>").text(i))

			if (rs[i].tipoPregunta == "actividad"){
				tr.append($("<th></th>").text(rs[i].correcto))
				tr.append($("<th></th>").text(rs[i].incorrecto))
			}else{
				tr.append($("<th></th>").attr("colspan","2").text(rs[i].puntaje))
			}

			$(".tableResult").append(tr)
		}
		$('#myModal').modal('show')

		dataSend = JSON.stringify({datas:rs})

		$.ajax({
			url: "/save",
			type:"POST",
			contentType: 'application/json; charset=utf-8',
			dataType: 'text',
			data: dataSend,
			success: function(result){
				console.log(result);
			}});

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
