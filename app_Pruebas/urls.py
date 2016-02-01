from django.conf.urls import  url
from views import *

urlpatterns = [
url(r'^prueba/(?P<type>[\w\-]+)/$', 'app_Pruebas.views.prueba', name='prueba'),
url(r'^save$', 'app_Pruebas.views.save', name='save'),
url(r'^register/$', registroView.as_view(),name='register'),
url(r'^registerNewUser/$', 'app_Pruebas.views.registerNewUser',name='registerNewUser'),

]
