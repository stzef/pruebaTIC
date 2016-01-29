from django.shortcuts import render
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import user_passes_test
from django.contrib.auth.models import User
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.db.models import Q




from app_Pruebas.models import *



@user_passes_test(lambda u: u.is_superuser)
def indexAdmin(request):
	users = User.objects.all()
	print users
	return render(request, 'admin.html',{"users":users})

@csrf_exempt
def historyUser(request):
	data = request.POST
	pruebasUser = pruebas.objects.filter(idUsuario=data["user"])
	print pruebasUser
	response = ""

	for pruebaUser in pruebasUser:
		template = "<tr><td>::idPrueba::</td><td>::idUsuario::</td><td>::fhPrueba::</td><td>::tiUsuario::</td><td>::edades::</td><td>::email::</td><tr>"

		template = template.replace("::prueba::",str(pruebaUser.idUsuario))
		template = template.replace("::idPrueba::",str(pruebaUser.idPrueba))
		template = template.replace("::idUsuario::",str(pruebaUser.idUsuario))
		template = template.replace("::fhPrueba::",str(pruebaUser.fhPrueba))
		#template = template.replace("::tiUsuario::",str(pruebaUser.tiUsuario))
		#template = template.replace("::edades::",str(pruebaUser.edades))
		template = template.replace("::email::",str(pruebaUser.email))

		response = response + template

	return HttpResponse(response)


