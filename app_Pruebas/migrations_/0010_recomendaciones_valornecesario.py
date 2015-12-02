# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app_Pruebas', '0009_remove_recomendaciones_valornecesario'),
    ]

    operations = [
        migrations.AddField(
            model_name='recomendaciones',
            name='valorNecesario',
            field=models.IntegerField(default=0),
            preserve_default=True,
        ),
    ]
