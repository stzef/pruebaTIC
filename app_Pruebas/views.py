# -*- encoding: utf-8 -*-
from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from models import *
import json


# Create your views here.

def prueba(request,type):
	if(type == "apropiacion"):
		context = {"pruebas":preguntas.objects.filter(competencia__nCompetencia="apropiacion")}
	else:
		context = {"pruebas":preguntas.objects.filter(competencia__nCompetencia="solucion")}
	print(pruebas)
	return render(request, 'prueba.html', context)

@csrf_exempt
def save(req):
	if req.is_ajax():
		print(req)
		return HttpResponse("ok")
	else:
		return HttpResponse("no")




