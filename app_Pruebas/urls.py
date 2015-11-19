from django.conf.urls import  url
urlpatterns = [
	url(r'^prueba/solucion/$', 'app_Pruebas.views.prueba', name='pruebaSolucion'),
	url(r'^prueba/apropiacion/$', 'app_Pruebas.views.prueba', name='pruebaApropiacion'),
]
