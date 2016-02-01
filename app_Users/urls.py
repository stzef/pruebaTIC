from django.conf.urls import  url

urlpatterns = [
url(r'^register/$', 'app_Users.views.register',name='register'),
url(r'^registerNewUser/$', 'app_Users.views.registerNewUser',name='registerNewUser'),
]
