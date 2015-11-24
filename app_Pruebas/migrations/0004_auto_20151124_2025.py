# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app_Pruebas', '0003_auto_20151124_2003'),
    ]

    operations = [
        migrations.AlterField(
            model_name='preguntas',
            name='urlArchivo',
            field=models.CharField(max_length=200),
        ),
    ]
