function finallyValues(){for(var e,t=document.getElementsByName("pregunta"),a=null,n=0;e=t[n];n++)if(e.checked){a=e.getAttribute("data-peso");break}if(null!=a){var u={puntaje:a};return u}}