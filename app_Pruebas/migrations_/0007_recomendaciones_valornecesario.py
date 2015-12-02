# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app_Pruebas', '0006_auto_20151124_2042'),
    ]

    operations = [
        migrations.AddField(
            model_name='recomendaciones',
            name='valorNecesario',
            field=models.IntegerField(default=''),
            preserve_default=False,
        ),
    ]
