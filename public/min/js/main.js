function verificarPrueba(e){for(var t,a=new Array,r=!0,n=document.getElementsByTagName("iframe"),i=0;t=n[i];i++){var o=t.contentWindow.finallyValues();void 0==o?r=!1:a.push(o)}if(!r)return void console.log("falta por realizar un ejercicio");for(var i=0;i<a.length;i++){console.log(a);var c=$("<tr></tr>");c.append($("<th></th>").text(i)),"actividad"==a[i].tipoPregunta?(c.append($("<th></th>").text(a[i].correcto)),c.append($("<th></th>").text(a[i].incorrecto))):c.append($("<th></th>").attr("colspan","2").text(a[i].puntaje)),$(".tableResult").append(c)}$("#myModal").modal("show")}ejecicioEnEjecucion=!0;var btnVerificar=document.getElementById("btnVerificar_js");btnVerificar.addEventListener("click",verificarPrueba,!0);