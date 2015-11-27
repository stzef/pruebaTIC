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
		if req.method == 'POST':
			print(req.body)
			data = json.loads(req.body)
			print("-------------------------------------")
			print(type(data))
			#data = json.dumps(req.POST)
			#print(json.loads(data))

			#for key, value in data.iteritems():
				#print(key)
				##query = preguntas.objects.filter(pk=k['idPregunta'])

			return HttpResponse("ok")





