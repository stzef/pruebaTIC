from django.shortcuts import render

from pruebasTic import settings

def inicio(request):
	context = {
	'nombreProyecto' : settings.NOMBRE_PROYECTO
	}
	return render(request, 'inicio.html',context)

def competencias(request):
	return render(request, 'competencias.html')


