from django.conf.urls import url
from . import views

urlpatterns = [
	    url(r'^$', views.index, name='index'),  
	    url(r'^isolation/', views.isolation, name='isolation'),
	    url(r'^entretien/', views.entretien, name='entretien'),
	    url(r'^chaudiere/', views.chaudiere, name='chaudiere'),
	    url(r'^pompe_chaleur/', views.pompe_chaleur, name='pompe_chaleur'),
	    url(r'^ballon_thermo/', views.ballon_thermo, name='ballon_thermo'),
	    url(r'^domotique/', views.domotique, name='domotique'),
	    url(r'^mentions_legales/', views.mentions_legales, name='mentions_legales'),
	    url(r'^cee/', views.cee, name='cee'),
	    url(r'^sav/', views.sav, name='sav'),
	    url(r'^contact/', views.contact, name='contact'),
	]