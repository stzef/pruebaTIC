function numeroAleatorio(o,e){var n=Math.floor(Math.random()*o+e);return n}function dibujarIntentos(){for(var o=1;cantidadIntentos-clickFueraGlogo>=o;o++){var e=document.createElement("span");e.classList.add("icon-intento","marginLateral","colorRojo"),contenedorIntentosRestantes.appendChild(e)}}function agregarEventosPresionFueraGlobo(){contenedorGlobos.addEventListener("click",presionarFueraGlobo,!1)}function crearGlobos(){for(var o=1;cantidadGlobos>=o;o++){var e="M"+numeroAleatorio(widthContenedorGlobos-50,50)+" "+numeroAleatorio(heightContenedorGlobos-50,50)+" h-68.351c-1.258 0-2.278 1.020-2.278 2.278l2.278 36.454c0 1.26 1.020 2.278 2.278 2.278h63.795c1.26 0 2.278-1.019 2.278-2.278l2.278-36.454c0-1.258-1.019-2.278-2.278-2.278 h-25.062l-4.556-6.835c0-1.258-1.019-2.278-2.278-2.278h-27.34c-1.258 0-2.278 1.020-2.278 2.278v6.835h-6.835c-1.258 0-2.278 1.020-2.278 2.278v4.556c0 1.258 1.020 2.278 2.278 2.278h68.352c1.26 0 2.278-1.020 2.278-2.278v-4.556c0-1.258-1.019-2.278-2.278-2.278z";tagGlobo=document.createElementNS("http://www.w3.org/2000/svg","path"),tagGlobo.classList.add("globo"),tagGlobo.setAttribute("fill",colores[numeroAleatorio(colores.length,0)]),tagGlobo.setAttribute("d",e),contenedorGlobos.appendChild(tagGlobo)}dibujarIntentos()}function capturarGlobos(){var o=document.querySelectorAll(".globo"),e=[].slice.call(o);return e}function agregarEventosPresionGlobo(o){o.forEach(function(o,e){o.addEventListener("click",presionarGlobo,!0)})}function presionarFueraGlobo(){for(;contenedorIntentosRestantes.hasChildNodes();)contenedorIntentosRestantes.removeChild(contenedorIntentosRestantes.firstChild);clickFueraGlogo+=1,dibujarIntentos()}function presionarGlobo(o){o.stopPropagation(),this.removeEventListener("click",presionarGlobo,!0);var e=this;globosPinchados+=1,this.classList.add("globoDesinflado"),setTimeout(function(o){contenedorGlobos.removeChild(e)},tiempoEsperaDesinflarGlobos),contenedorGlobosPinchados.innerHTML=globosPinchados}function finallyValues(){if(globosPinchados>0||clickFueraGlogo>0)var o={idPregunta:id,tipoPregunta:"actividad",correcto:globosPinchados,incorrecto:clickFueraGlogo};else o=void 0;return o}var tiempoEsperaDesinflarGlobos=2e3,colores=["#82BB5D","#4C678C","#D4786A"],cantidadGlobos=3,cantidadIntentos=10,contenedorIntentosRestantes=document.getElementById("intentos"),globosPinchados=0,clickFueraGlogo=0,contenedorGlobos=document.getElementById("contenedorGlobos_js"),widthContenedorGlobos=650,heightContenedorGlobos=300,contenedorGlobosPinchados=document.getElementById("tagContenedorGlobosPinchados"),iframe=window.frames.frameElement,id=iframe.name;agregarEventosPresionFueraGlobo(),crearGlobos();var globos=capturarGlobos();agregarEventosPresionGlobo(globos);