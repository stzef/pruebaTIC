function dragDefault(e){e.preventDefault()}function deleteTag(){var e=this.parentNode,t=e.getAttribute("element-parentNode"),a=document.getElementById(t);a.classList.remove("disabled"),a.removeEventListener("dragstart",dragDefault),a.addEventListener("dragstart",dragInit),zonetags.removeChild(e)}function callbackDrop(e){e.stopPropagation(),elementdrag.classList.add("disabled"),console.log(elementdrag);var t=e.dataTransfer.getData("text/plain",0);console.log(t);var a=e.dataTransfer.getData("text/html",1);console.log(a),elementdrag.removeEventListener("dragstart",dragInit),elementdrag.addEventListener("dragstart",dragDefault);var r=document.createElement("span");r.setAttribute("data-c",a),r.setAttribute("element-parentNode",t),r.innerText=t,r.classList.add("tag");var n=document.createElement("span");n.classList.add("delete","icon-delete"),n.addEventListener("click",deleteTag),r.appendChild(n),console.log(r),zonetags.appendChild(r)}function callbackonDragOver(e){e.preventDefault()}function dragInit(e){elementdrag=this,e.dataTransfer.effectAllowed="move",e.dataTransfer.dropEffect="move";var t=this.getAttribute("alt");console.log(t);var a=this.getAttribute("data-c");console.log(a),e.dataTransfer.setData("text/plain",t,0),e.dataTransfer.setData("text/html",a,1)}function finallyValues(){var respuestas=zonetags.children,correcto=0,incorrecto=0;if(0!=respuestas.length){for(var i=0,respuesta;respuesta=respuestas[i];i++){var data=respuesta.getAttribute("data-c");eval(data)?correcto+=1:incorrecto+=1}var values={idPregunta:id,tipoPregunta:"actividad",correcto:correcto,incorrecto:incorrecto};return values}}var dropzone=document.querySelector("[data-dropzone]"),draggables=document.querySelectorAll("[draggable]"),zonetags=document.getElementById("zonetags_js"),elementdrag=null,iframe=window.frames.frameElement;console.log(iframe);var id=iframe.name;console.log(id);for(var i=0,draggable;draggable=draggables[i];i++)draggable.addEventListener("dragstart",dragInit);dropzone.addEventListener("dragstart",dragDefault),dropzone.addEventListener("drop",callbackDrop),dropzone.addEventListener("dragover",callbackonDragOver);