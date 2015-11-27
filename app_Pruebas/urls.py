from django.conf.urls import  url
urlpatterns = [
	url(r'^prueba/(?P<type>[\w\-]+)/$', 'app_Pruebas.views.prueba', name='prueba'),
	url(r'^save$', 'app_Pruebas.views.save', name='save'),
]
