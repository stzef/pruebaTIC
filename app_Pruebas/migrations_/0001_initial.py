# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='competencias',
            fields=[
                ('idCompetencias', models.IntegerField(serialize=False, primary_key=True)),
                ('nCompetencia', models.CharField(max_length=80)),
                ('descriCompetencia', models.CharField(max_length=300)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='edades',
            fields=[
                ('idEdad', models.IntegerField(serialize=False, primary_key=True)),
                ('edadInicial', models.IntegerField()),
                ('edadFinal', models.IntegerField()),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='niveles',
            fields=[
                ('idNivel', models.IntegerField(serialize=False, primary_key=True)),
                ('nNivel', models.CharField(max_length=45)),
                ('descriNivel', models.CharField(max_length=2000)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='preguntas',
            fields=[
                ('idPregrunta', models.IntegerField(serialize=False, primary_key=True)),
                ('detaPregunta', models.CharField(max_length=45)),
                ('valorGanador', models.IntegerField()),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='pruebas',
            fields=[
                ('idPrueba', models.IntegerField(serialize=False, primary_key=True)),
                ('fhPrueba', models.DateField()),
                ('email', models.CharField(max_length=100)),
                ('edades', models.ForeignKey(to='app_Pruebas.edades')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='pruebasDeta',
            fields=[
                ('idpruebasdeta', models.IntegerField(serialize=False, primary_key=True)),
                ('valoralcanzado', models.IntegerField()),
                ('valorganador', models.IntegerField()),
                ('preguntas', models.ForeignKey(to='app_Pruebas.preguntas')),
                ('pruebas', models.ForeignKey(to='app_Pruebas.pruebas')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='recomendaciones',
            fields=[
                ('idRecomendacion', models.IntegerField(serialize=False, primary_key=True)),
                ('detaRecomendacion', models.CharField(max_length=200)),
                ('preguntas', models.ForeignKey(to='app_Pruebas.preguntas')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='respuestas',
            fields=[
                ('idRespuestas', models.IntegerField(serialize=False, primary_key=True)),
                ('detaRespuestas', models.CharField(max_length=45)),
                ('preguntas', models.ForeignKey(to='app_Pruebas.preguntas')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='tipoPregunta',
            fields=[
                ('idTiPregunta', models.IntegerField(serialize=False, primary_key=True)),
                ('nTiPregunta', models.CharField(max_length=100)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='tiUsuario',
            fields=[
                ('idTiUsuario', models.IntegerField(serialize=False, primary_key=True)),
                ('nTiUsuario', models.CharField(max_length=80)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.AddField(
            model_name='pruebas',
            name='tiUsuario',
            field=models.ForeignKey(to='app_Pruebas.tiUsuario'),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='preguntas',
            name='tipoPregunta',
            field=models.ForeignKey(to='app_Pruebas.tipoPregunta'),
            preserve_default=True,
        ),
    ]
