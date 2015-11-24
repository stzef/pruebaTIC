# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app_Pruebas', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='preguntas',
            name='descriPregunta',
            field=models.CharField(default='', max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='preguntas',
            name='urlArchivo',
            field=models.URLField(default=''),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='niveles',
            name='descriNivel',
            field=models.CharField(max_length=200),
        ),
    ]
