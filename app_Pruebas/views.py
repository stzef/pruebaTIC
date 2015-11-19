from django.shortcuts import render

# Create your views here.
def solucion(request):
	return render(request, 'solucion.html')

def apropiacion(request):
	return render(request, 'apropiacion.html')
def pruebaSolucion(request):
	return render(request, 'prueba.html')
def pruebaApropiacion(request):
	return render(request, 'prueba.html')
