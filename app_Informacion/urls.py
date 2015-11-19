from django.conf.urls import  url
urlpatterns = [
url(r'^$', 'app_Informacion.views.inicio', name='inicio'),
url(r'^competencias/', 'app_Informacion.views.competencias', name='competencias'),
]
