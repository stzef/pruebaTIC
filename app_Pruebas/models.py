from django.db import models
from django.contrib.auth.models import User

RESIDENSIAS_OPCIONES = (
	('R','Ricarute'),
	('G','Girardot'),
	('O','Otro'),
)

class UserApp(models.Model):
	user = models.OneToOneField(User, on_delete = models.CASCADE)
	fNaci = models.DateField()
	residencia = models.CharField(max_length=15,choices=RESIDENSIAS_OPCIONES,default='Girardot')

class tiUsuario(models.Model):
	idTiUsuario = models.AutoField(primary_key=True, unique=True)
	nTiUsuario = models.CharField(max_length=80)
	def __str__(self):
		return u'%s' % (self.nTiUsuario)

class niveles(models.Model):
	idNivel = models.AutoField(primary_key=True, unique=True)
	nNivel = models.CharField(max_length=45)
	descriNivel = models.CharField(max_length=200)
	def __str__(self):
		return u'%s' % (self.nNivel)

class edades(models.Model):
	idEdad = models.AutoField(primary_key=True, unique=True)
	edadInicial = models.IntegerField()
	edadFinal = models.IntegerField()
	def __str__(self):
		return u'%s' % (str(self.edadInicial) + " - " + str(self.edadFinal))


class pruebas(models.Model):
	idPrueba = models.AutoField(primary_key=True, unique=True)
	idUsuario = models.IntegerField()
	fhPrueba = models.DateField()
	def __str__(self):
		return u'%s' % ("prueba #" + str(self.idPrueba))


class tipoPregunta(models.Model):
	idTiPregunta = models.AutoField(primary_key=True, unique=True)
	nTiPregunta = models.CharField(max_length=100)
	def __str__(self):
		return u'%s' % (self.nTiPregunta)

class competencias(models.Model):
	idCompetencias = models.AutoField(primary_key=True, unique=True)
	nCompetencia = models.CharField(max_length=80)
	descriCompetencia = models.CharField(max_length=300)
	def __str__(self):
		return u'%s' % (self.nCompetencia)

class preguntas(models.Model):
	idPregrunta = models.AutoField(primary_key=True, unique=True)
	detaPregunta = models.TextField(max_length=400)
	valorGanador = models.IntegerField()
	tipoPregunta = models.ForeignKey(tipoPregunta)
	urlArchivo = models.CharField(max_length=100)
	competencia = models.ForeignKey(competencias)

	def __str__(self):
		return u'%s' % ("pregunta #" + str(self.idPregrunta) + " - Competencia " + str(self.competencia))

class recomendaciones(models.Model):
	idRecomendacion = models.AutoField(primary_key=True, unique=True)
	detaRecomendacion = models.CharField(max_length=200)
	preguntas = models.ForeignKey(preguntas)
	valorNecesario = models.CharField(max_length=20)
	def __str__(self):
		return u'%s' % ("Recomendacion --> " + str(self.preguntas))

class pruebasDeta(models.Model):
	idpruebasdeta = models.AutoField(primary_key=True, unique=True)
	pruebas = models.ForeignKey(pruebas)
	preguntas = models.ForeignKey(preguntas)
	valoralcanzado = models.IntegerField()
	valorganador = models.IntegerField()
	def __str__(self):
		return u'%s' % ("prueba deta #" + str(self.pruebas) + " - pregunta " + str(self.preguntas))
