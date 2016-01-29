from django.conf.urls import  url

urlpatterns = [
url(r'^$', 'app_Administration.views.indexAdmin', name='admin'),
url('historyUser', 'app_Administration.views.historyUser', name='historyUser'),
]
