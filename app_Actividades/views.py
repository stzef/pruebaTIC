from django.shortcuts import render
from pruebasTic import settings

# Create your views here.

def inicio(request):
	context = {
	'nombreProyecto' : settings.NOMBRE_PROYECTO
	}
	return render(request, 'inicio.html',context)
