from django.conf.urls import patterns, include, url
from django.contrib import admin
from pruebasTic import settings
urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'pruebasTic.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url('', include('app_Informacion.urls')),
    url('', include('app_Pruebas.urls')),
    url(r'^adminapp/', include('app_Administration.urls')),
    (r'^logout/$', 'django.contrib.auth.views.logout',{'next_page': '/'}),
    url('^', include('django.contrib.auth.urls')),
	url(r'^public/(?P<path>.*)$','django.views.static.serve',
	{'document_root':settings.MEDIA_ROOT,}),
)
