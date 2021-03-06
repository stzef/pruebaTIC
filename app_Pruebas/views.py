# -*- encoding: utf-8 -*-
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.core import serializers
from django.db.models import Q
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt

import datetime
import json

from models import *

@login_required
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
			clases = []
			data = json.loads(req.body)

			responseUser = json.loads(data["responseUser"])
			idsPruebas = data["idsPruebas"]

			objPruebas = pruebas(
				idUsuario = req.user.pk,
				fhPrueba = datetime.datetime.now()
			)
			objPruebas.save()

			for obj in responseUser:

				idP = int(obj["idPregunta"])
				query = preguntas.objects.get(pk=idP)
				vG = int(query.valorGanador)

				if obj['tipoPregunta'] == "seleccion":
					puntaje = int(obj['puntaje'])
				else:
					puntaje = int(obj['correcto'])

				if puntaje == vG:
					mahtQuery = "a"
					classCss = 'PuntajeAlto'
				elif puntaje >= vG/2 and puntaje < vG:
					mahtQuery = "m"
					classCss = 'PuntajeMedio'
				elif puntaje <= vG/2:
					mahtQuery = "b"
					classCss = 'PuntajeBajo'

				recomendacion = recomendaciones.objects.get(Q(valorNecesario=mahtQuery) & Q(preguntas__idPregrunta=idP))

				recomendacionesPrueba.append(recomendacion.detaRecomendacion)
				texto.append(query.detaPregunta)
				clases.append(classCss)

				objPruebasDeta = pruebasDeta(
					pruebas = objPruebas,
					preguntas = query,
					valoralcanzado = puntaje,
					valorganador = vG
				)
				objPruebasDeta.save()

			dataResponse = {
				"r":recomendacionesPrueba,
				"t":texto,
				"clases" : clases,
			}
			dataR = json.dumps(dataResponse)

			return HttpResponse(dataR, content_type='application/json')
