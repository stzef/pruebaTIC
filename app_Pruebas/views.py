# -*- encoding: utf-8 -*-

from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.core import serializers
from django.db.models import Q
from django.http import HttpResponse
from django.http import HttpResponseRedirect
from django.shortcuts import render, redirect, render_to_response
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import FormView
from forms import registroForm
from models import *
import datetime
import json

@login_required
def prueba(request,type):
	if(type == "apropiacion"):
		context = {"pruebas":preguntas.objects.filter(competencia__nCompetencia="apropiacion")}
	else:
		context = {"pruebas":preguntas.objects.filter(competencia__nCompetencia="solucion")}
	return render(request, 'prueba.html', context)

def register(request):
	return render(request, 'registation.html')

class registroView(FormView):
	form_class = registroForm
	template_name = 'registation.html'
	success_url = '/'

	def form_valid(self,form):
		form.save()
		return HttpResponseRedirect(self.get_success_url())

	def form_invalid(self, form):
		return self.render_to_response(self.get_context_data(form=form))

@csrf_exempt
def registerNewUser(request):
	data = request.POST
	response = {}
	try:
		user = User.objects.create_user(data["usuario"], data["email"], data["password"])
		user.first_name = data["nombre"]
		user.last_name = data["apellido"]
		user.save()
		response["message"] = "Correcto, puedes continuar"
		response["code"] = 1
		print response
		return HttpResponse(json.dumps(response),content_type='application/json')

	except Exception, e:
		if 'UNIQUE' in e.message:
			response["message"] = "El nombre de usuario no esta disponible"
			response["code"] = 0
		else:
			response["message"] = "Error, Comunicarse con el administrador"
			response["code"] = 0
			print response
		return HttpResponse(json.dumps(response),content_type='application/json')


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
				fhPrueba = datetime.datetime.now(),
				tiUsuario = tiUsuario(
					idTiUsuario = 1,
					nTiUsuario = ""
				),
				edades = edades(
					idEdad = 1,
					edadInicial = 1,
					edadFinal =1
				),
				email = req.user.email
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
