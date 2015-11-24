# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app_Pruebas', '0004_auto_20151124_2025'),
    ]

    operations = [
        migrations.AlterField(
            model_name='preguntas',
            name='urlArchivo',
            field=models.TextField(max_length=500),
        ),
    ]
