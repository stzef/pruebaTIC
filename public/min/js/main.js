function verificarPrueba(evento){rs=[];for(var continueFlow=!0,frames=document.getElementsByTagName("iframe"),i=0,frame;frame=frames[i];i++){var r=frame.contentWindow.finallyValues();void 0==r?continueFlow=!1:rs.push(r)}if(continueFlow){dataSend=JSON.stringify(rs),$.ajax({url:"/save",type:"POST",async:!1,contentType:"application/json; charset=utf-8",dataType:"text",data:dataSend,success:function(result){console.log(result),console.log("-------------"),dataResponseTemp=eval("["+result+"]"),dataResponse=dataResponseTemp[0]}}),console.warn(dataResponse.classCss);for(var i=0;i<rs.length;i++){var tr=$("<tr></tr>");tr.addClass(dataResponse.clases[i]),tr.append($("<td></td>").text(dataResponse.t[i])),console.log(2),"actividad"==rs[i].tipoPregunta?(tr.append($("<td></td>").text(rs[i].correcto)),tr.append($("<td></td>").text(rs[i].incorrecto)),tr.append($("<td></td>").text(dataResponse.r[i]))):(tr.append($("<td></td>").attr("colspan","2").text(rs[i].puntaje)),tr.append($("<td></td>").text(dataResponse.r[i]))),$(".tableResult").append(tr)}$("#myModal").modal("show")}else{var msg=new message;msg.show(2,"Falta(n) alguna(s) pregunta(s) por responder.")}}function message(){this.show=function(e,t){var n=document.createElement("article");n.classList.add("contenedorMensaje");var a=document.createElement("p");document.createElement("article"),document.createElement("article");a.innerHTML=t;document.createElement("span");if(n.classList.add("MSG"),0==e){var r=document.createElement("img");r.src="/public/img/icons/correcto.png"}else if(1==e){var r=document.createElement("img");r.src="/public/img/icons/incorrecto.png"}else if(2==e){var r=document.createElement("img");r.src="/public/img/icons/informacion.png"}r.classList.add("contenedorIcon"),a.classList.add("contenedorMensaje");var s=window.window.scrollY;n.appendChild(r),n.appendChild(a),n.setAttribute("style","top:"+s+"px"),document.body.appendChild(n),setTimeout(function(){document.body.removeChild(document.body.lastChild)},2e3)}}ejecicioEnEjecucion=!0,recomendaciones=new Array;var rs=new Array,glo=null;$("#btnRestart_js").on("click",function(){location.reload()});var btnVerificar=document.getElementById("btnVerificar_js");btnVerificar.addEventListener("click",verificarPrueba,!0);