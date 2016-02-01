# -*- encoding: utf-8 -*-
from django import forms
from django.contrib.auth.models import User
from models import UserApp
from django.core.exceptions import ValidationError

class registroForm(forms.Form):
	firstname = forms.CharField(max_length=20,required=True,widget=forms.TextInput(attrs={'required': 'required', 'placeholder':'Nombres', 'class':'form-control col-md-11'}),)
	lastname = forms.CharField(max_length=20,required=True,widget=forms.TextInput(attrs={'required': 'required', 'placeholder':'Apellidos', 'class':'form-control col-md-11'}),)
	username = forms.CharField(max_length=20,required=True,widget=forms.TextInput(attrs={'required': 'required', 'placeholder':'Usuario', 'class':'form-control col-md-11'}),)
	email = forms.EmailField(max_length=30,required=True,widget=forms.TextInput(attrs={'type': 'email', 'required': 'required', 'placeholder':'Email', 'class':'form-control col-md-11'}),)
	password = forms.CharField(max_length=20,required=True,widget=forms.PasswordInput(attrs={'required': 'required', 'placeholder':'Contraseña', 'class':'form-control col-md-11'}),)
	password_confirm = forms.CharField(max_length=20,required=True,widget=forms.PasswordInput(attrs={'required': 'required', 'placeholder':'Confirma tu contraseña', 'class':'form-control col-md-11'}),)
	fNaci = forms.DateField(required=False,widget=forms.TextInput(attrs={'type': 'date', 'required': 'required', 'placeholder':'Fecha de nacimiento', 'class':'form-control col-md-11'}),)
	residencia  = forms.ChoiceField(choices=(('G','Girardot'),('R', 'Ricaurte'),('O','Otro'),),required=True,widget=forms.Select(attrs={'class':'form-control col-md-11'}),)

	def clean_username(self):
		username = self.cleaned_data.get('username')
		if User.objects.filter(username=username).exists():
			raise forms.ValidationError('Usuario en uso. Ingresa otro')
		return username

	def clean_email(self):
		email = self.cleaned_data.get('email')
		if User.objects.filter(email=email).exists():
			raise forms.ValidationError('Email en uso. Ingresa otro')
		return email

	def save(self):
		username = self.cleaned_data.get("username")
		email = self.cleaned_data.get("email")
		password = self.cleaned_data.get("password")
		lastname = self.cleaned_data.get("lastname")
		fNaci = self.cleaned_data.get("fNaci")
		residencia = self.cleaned_data.get("residencia")

		user = User.objects.create_user(username, email, password)
		user.first_name = name
		user.last_name = lastname
		user.save()

		perfil = UserApp(usuario= user,fNaci=fNaci,residencia=residencia)
		perfil.save()
