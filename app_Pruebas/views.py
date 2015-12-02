# -*- encoding: utf-8 -*-
from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from models import *
from django.db.models import Q
import json

def prueba(request,type):
	if(type == "apropiacion"):
		context = {"pruebas":preguntas.objects.filter(competencia__nCompetencia="apropiacion")}
	else:
		context = {"pruebas":preguntas.objects.filter(competencia__nCompetencia="solucion")}
	return render(request, 'prueba.html', context)

@csrf_exempt
def save(req):
	if req.is_ajax():
		if req.method == 'POST':
			recomendacionesPrueba = []
			texto = []

			data = json.loads(req.body)
			for obj in data:

				idP = int(obj["idPregunta"])
				query = preguntas.objects.get(pk=idP)
				vG = int(query.valorGanador)

				if obj['tipoPregunta'] == "seleccion":
					puntaje = int(obj['puntaje'])
				else:
					puntaje = int(obj['correcto'])

				if puntaje == vG:
					mahtQuery = "a"
				elif puntaje >= vG/2 and puntaje < vG:
					mahtQuery = "m"
				elif puntaje <= vG/2:
					mahtQuery = "b"

				#print("idP -- " + str(idP))
				recomendacion = recomendaciones.objects.filter(Q(valorNecesario=mahtQuery) & Q(preguntas__idPregrunta=1)).values()
				print(recomendaciones.objects.all().values())
				#print(recomendacion)
				#print(recomendacion[0]['preguntas_id'])

				recomendacionesPrueba.append(recomendacion[0]['detaRecomendacion'])
				texto.append(query.detaPregunta)

			dataResponse = {
				"r":recomendacionesPrueba,
				"t":texto
			}
			dataR = json.dumps(dataResponse)

			return HttpResponse(dataR, content_type='application/json')





