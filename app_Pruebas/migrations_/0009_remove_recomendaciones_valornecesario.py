# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app_Pruebas', '0008_auto_20151202_1436'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='recomendaciones',
            name='valorNecesario',
        ),
    ]
