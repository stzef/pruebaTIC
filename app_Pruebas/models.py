from django.db import models

class tiUsuario(models.Model):
	idTiUsuario = models.IntegerField(primary_key=True)
	nTiUsuario = models.CharField(max_length=80)
	def __str__(self):
		return u'%s' % (self.nTiUsuario)

class niveles(models.Model):
	idNivel = models.IntegerField(primary_key=True)
	nNivel = models.CharField(max_length=45)
	descriNivel = models.CharField(max_length=200)
	def __str__(self):
		return u'%s' % (self.nNivel)

class edades(models.Model):
	idEdad = models.IntegerField(primary_key=True)
	edadInicial = models.IntegerField()
	edadFinal = models.IntegerField()


class pruebas(models.Model):
	idPrueba = models.IntegerField(primary_key=True)
	fhPrueba = models.DateField()
	tiUsuario = models.ForeignKey(tiUsuario)
	edades = models.ForeignKey(edades)
	email = models.CharField(max_length=100)


class tipoPregunta(models.Model):
	idTiPregunta = models.IntegerField(primary_key=True)
	nTiPregunta = models.CharField(max_length=100)
	def __str__(self):
		return u'%s' % (self.nTiPregunta)

class competencias(models.Model):
	idCompetencias = models.IntegerField(primary_key=True)
	nCompetencia = models.CharField(max_length=80)
	descriCompetencia = models.CharField(max_length=300)
	def __str__(self):
		return u'%s' % (self.nCompetencia)

class preguntas(models.Model):
	idPregrunta = models.IntegerField(primary_key=True)
	detaPregunta = models.TextField(max_length=400)
	valorGanador = models.IntegerField()
	tipoPregunta = models.ForeignKey(tipoPregunta)
	urlArchivo = models.CharField(max_length=100)
	competencia = models.ForeignKey(competencias)

	def __str__(self):
		return u'%s' % ("pregunta #" + str(self.idPregrunta) + " - Competencia " + str(self.competencia) + " <--> " + self.detaPregunta)

class respuestas(models.Model):
	idRespuestas = models.IntegerField(primary_key=True)
	detaRespuestas = models.CharField(max_length=45)
	preguntas = models.ForeignKey(preguntas)


class recomendaciones(models.Model):
	idRecomendacion = models.IntegerField(primary_key=True)
	detaRecomendacion = models.CharField(max_length=200)
	preguntas = models.ForeignKey(preguntas)
	valorNecesario = models.IntegerField(default=0)


class pruebasDeta(models.Model):
	itpruebasdeta = models.IntegerField(primary_key=True)
	pruebas = models.ForeignKey(pruebas)
	preguntas = models.ForeignKey(preguntas)
	valoralcanzado = models.IntegerField()
	valorganador = models.IntegerField()
