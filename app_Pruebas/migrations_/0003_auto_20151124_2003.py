# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app_Pruebas', '0002_auto_20151124_2000'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='preguntas',
            name='descriPregunta',
        ),
        migrations.AddField(
            model_name='preguntas',
            name='competencia',
            field=models.ForeignKey(default='', to='app_Pruebas.competencias'),
            preserve_default=False,
        ),
    ]
