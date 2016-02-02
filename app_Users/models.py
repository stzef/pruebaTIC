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
	def __str__(self):
		return '%s - %s' % (self.user.pk, self.user.username)
