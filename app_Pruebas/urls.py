from django.conf.urls import  url
urlpatterns = [
	url(r'^solucion/$', 'app_Pruebas.views.solucion', name='solucion'),
	url(r'^apropiacion/$', 'app_Pruebas.views.apropiacion', name='apropiacion'),
	url(r'^solucion/prueba/$', 'app_Pruebas.views.pruebaSolucion', name='pruebaSolucion'),
	url(r'^apropiacion/prueba/$', 'app_Pruebas.views.pruebaApropiacion', name='pruebaApropiacion'),
]
