# -*- encoding: utf-8 -*-
from django.shortcuts import render
from models import *


# Create your views here.

def prueba(request,type):
	if(type == "apropiacion"):
		context = {"pruebas":preguntas.objects.filter(competencia__nCompetencia="apropiacion")}
	else:
		context = {"pruebas":preguntas.objects.filter(competencia__nCompetencia="solucion")}
	print(pruebas)
	return render(request, 'prueba.html', context)



