from django.shortcuts import render

# Create your views here.

def prueba(request):

	return render(request, 'prueba.html', {"pruebas":["/public/pruebas/preguntaUno.html","/public/pruebas/globos.html","/public/pruebas/asociacionMaterias.html"]})

