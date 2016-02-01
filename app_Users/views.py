from django.shortcuts import render
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
from models import *
from django.http import HttpResponse
import json


def register(request):
	return render(request, 'registration/checkIn.html')

@csrf_exempt
def registerNewUser(request):
	data = request.POST
	response = {}
	try:
		user = User.objects.create_user(data["usuario"], data["email"], data["password"])
		user.first_name = data["nombre"]
		user.last_name = data["apellido"]
		user.save()

		perfil = UserApp(user = user,fNaci = data["fNaci"],residencia = data["residencia"])
		perfil.save()

		response["message"] = "Correcto, puedes continuar"
		response["code"] = 1
		print response
		return HttpResponse(json.dumps(response),content_type='application/json')

	except Exception, e:
		print e
		if 'UNIQUE' in e.message:
			response["message"] = "El nombre de usuario no esta disponible"
			response["code"] = 0
		else:
			response["message"] = "Error, Comunicarse con el administrador"
			response["code"] = 0
			print response
		return HttpResponse(json.dumps(response),content_type='application/json')
