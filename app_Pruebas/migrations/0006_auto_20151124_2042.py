# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app_Pruebas', '0005_auto_20151124_2041'),
    ]

    operations = [
        migrations.AlterField(
            model_name='preguntas',
            name='detaPregunta',
            field=models.TextField(max_length=400),
        ),
        migrations.AlterField(
            model_name='preguntas',
            name='urlArchivo',
            field=models.CharField(max_length=100),
        ),
    ]
