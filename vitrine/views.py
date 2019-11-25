from django.shortcuts import render
from django.conf import settings
from django.http import HttpResponseRedirect



# Create your views here.
def contact(request):
	
	context = locals()
	template = "contact.html"
	return render(request,template,context)

def index(request):
	page_color="#6f2525;"
	context = locals()
	template = "index.html"
	return render(request,template,context)

def isolation(request):
	context = locals()
	template = "isolation.html"
	return render(request,template,context)

def entretien(request):
	context = locals()
	template = "entretien.html"
	return render(request,template,context)

def chaudiere(request):
	page_color="#8e7762;"
	context = locals()
	template = "chaudiere.html"
	return render(request,template,context)

def pompe_chaleur(request):
	page_color="#356f20;"
	context = locals()
	template = "pompe_chaleur.html"
	return render(request,template,context)

def ballon_thermo(request):
	page_color="#00449e;"
	context = locals()
	template = "ballon_thermo.html"
	return render(request,template,context)
	
def domotique(request):
	page_color="#c9b166;"
	context = locals()
	template = "domotique.html"
	return render(request,template,context)

def mentions_legales(request):
	context = locals()
	template = "mentions_legales.html"
	return render(request,template,context)

def cee(request):
	context = locals()
	template = "cee.html"
	return render(request,template,context)

def sav(request):
	context = locals()
	template = "sav.html"
	return render(request,template,context)