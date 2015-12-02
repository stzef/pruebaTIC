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
			recomendaciones = []
			texto = []
			recomendacion = "mensaje default"

			data = json.loads(req.body)
			for obj in data:

				idP = int(obj["idPregunta"])
				query = preguntas.objects.get(pk=idP)
				vG = int(query.valorGanador)

				if obj['tipoPregunta'] == "seleccion":
					puntaje = int(obj['puntaje'])

					if puntaje == vG:
						recomendacion = "puntaje perfecto"

					elif puntaje > vG/2 and puntaje < vG:
						recomendacion = "puntaje medio"

					elif puntaje < vG/2:
						recomendacion = "puntaje bajo"

				else:
					correcto = int(obj['correcto'])

					if correcto == vG:
						recomendacion = "puntaje perfecto"

					elif correcto > vG/2 and correcto < vG:
						recomendacion = "puntaje medio"

					elif correcto < vG/2:
						recomendacion = "puntaje bajo"

				print(recomendacion)

				recomendaciones.append(recomendacion)
				print(query.detaPregunta)
				texto.append(query.detaPregunta)

			dataResponse = {
				"r":recomendaciones,
				"t":texto
			}
			print(type(dataResponse))
			dataR = json.dumps(dataResponse)
			print(dataR)
			print(type(dataR))

			return HttpResponse(dataR, content_type='application/json')





