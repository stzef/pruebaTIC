"""
Django settings for pruebasTic project.

For more information on this file, see
https://docs.djangoproject.com/en/1.7/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.7/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os
BASE_DIR = os.path.dirname(os.path.dirname(__file__))

NOMBRE_PROYECTO = "pruebasTic"
# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.7/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'cyaakq$5s=lkjyyrdw2fzts#9prov3c432*c0(lo^@u-kkc#ad'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False
APPEND_SLASH = True

TEMPLATE_DEBUG = True

ALLOWED_HOSTS = ["*"]

LOGIN_REDIRECT_URL = "/"
LOGOUT_URL = "/"
LOGIN_URL = "/login"

# Application definition

INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'app_Informacion',
    'app_Pruebas',
    'app_Administration',
    'app_Users',
    )

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    )

ROOT_URLCONF = 'pruebasTic.urls'

WSGI_APPLICATION = 'pruebasTic.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.7/ref/settings/#databases

DATABASES = {
'default': {
'ENGINE': 'django.db.backends.postgresql_psycopg2',
'NAME': 'das324e9qn7faa',
'USER': 'bqqcxdpqroqtnn',
'PASSWORD': 'MgzBbrWsSloyASO5BKZ-KaIDvO',
'HOST': 'ec2-54-83-201-196.compute-1.amazonaws.com',
'PORT': '5432',
}
}

# Internationalization
# https://docs.djangoproject.com/en/1.7/topics/i18n/

LANGUAGE_CODE = 'es-CO'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.7/howto/static-files/

STATIC_URL = '/static/'
MEDIA_URL = '/public/'
MEDIA_ROOT = os.path.join(BASE_DIR,'public')
