from django.shortcuts import render
# -*- encoding: utf-8 -*-


# Create your views here.

def prueba(request,type):

	if(type == "apropiacion"):
		context = { "pruebas": [
				{"descripcion":"Ahora debe organizar la vitrina de ventas, arrastra con el mouse los productos al entrepaño que le corresponde.",
				"url":"/public/pruebas/apropiacion/ordenarEstante.html",
				"id":"0"},

				{"descripcion":"Pincha los globos, cada intento fallido contara un intento menos.",
				"url":"/public/pruebas/apropiacion/globos.html",
				"id":"1"},

				{"descripcion":"Arrastra a la mochila los iconos de las tecnologias que ayudaria a resolver el problema.",
				"url":"/public/pruebas/apropiacion/asociacionMaterias.html",
				"id":"2"},

				{"descripcion":"Responde la pregunta, Recuerda  que varias respuesta pueden ser correctas pero solo puedes seleccionar una.",
				"url":"/public/pruebas/apropiacion/preguntaDos.html",
				"id":"3"},

				{"descripcion":"Arrastra a la mochila los iconos de las tecnologias que ayudaria a resolver el problema.",
				"url":"/public/pruebas/apropiacion/preguntaUno.html",
				"id":"4"}

			]
		}

	else:
		context = { "pruebas": [
				{"descripcion":"Responde la pregunta, Recuerda  que varias respuesta pueden ser correctas pero solo puedes seleccionar una.",
				"url":"/public/pruebas/solucion/AsosiacionPrograms.html",
				"id":"0"},

				{"descripcion":"Pincha los globos, cada intento fallido contara un intento menos.",
				"url":"/public/pruebas/solucion/preguntaCinco.html",
				"id":"1"},

				{"descripcion":"Arrastra a la mochila los iconos de las tecnologias que ayudaria a resolver el problema.",
				"url":"/public/pruebas/solucion/preguntaCuatro.html",
				"id":"2"},

				{"descripcion":"Arrastra a la mochila los iconos de las tecnologias que ayudaria a resolver el problema.",
				"url":"/public/pruebas/solucion/preguntaSeis.html",
				"id":"3"}

			]
		}

	return render(request, 'prueba.html', context)

