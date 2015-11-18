from django.conf.urls import patterns, include, url
from django.contrib import admin
from pruebasTic import settings
urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'pruebasTic.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url('', include('app_Actividades.urls')),
	url(r'^public/(?P<path>.*)$','django.views.static.serve',
	{'document_root':settings.MEDIA_ROOT,}),
)
