from django.shortcuts import render
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import user_passes_test
from django.contrib.auth.models import User
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.db.models import Q
from app_Pruebas.models import *
import json

@user_passes_test(lambda u: u.is_superuser)
def indexAdmin(request):
	users = User.objects.all()
	return render(request, 'admin.html',{"users":users})

@csrf_exempt
def historyUser(request):
	data = request.POST
	pruebasUser = pruebas.objects.filter(Q(idUsuario=data["user"]) & Q(fhPrueba__range=(data["fini"], data["ffin"])))
	if pruebasUser:
		content = ""
		for pruebaUser in pruebasUser:
			template = "<tr><td>::idPrueba::</td><td>::idUsuario::</td><td>::fhPrueba::</td><td>::puntaje::</td><tr>"

			template = template.replace("::idPrueba::",str(pruebaUser.idPrueba))
			template = template.replace("::idUsuario::",str(User.objects.get(pk=pruebaUser.idUsuario).username))
			template = template.replace("::fhPrueba::",str(pruebaUser.fhPrueba))

			pruebasDetaUser = pruebasDeta.objects.filter(pruebas=pruebaUser.idPrueba)

			correct = 0
			total = 0
			for pruebaDetaUser in pruebasDetaUser:
				if pruebaDetaUser.valoralcanzado >= pruebaDetaUser.valorganador:
					correct += 1
				total += 1

			puntaje = str(correct) + "/" + str(total)

			template = template.replace("::puntaje::",puntaje)

			content = content + template
		return HttpResponse(json.dumps({"content":content,"ifEmpty":False}),content_type='application/json')
	else:
		return HttpResponse(json.dumps({"content":{},"ifEmpty":True}),content_type='application/json')



