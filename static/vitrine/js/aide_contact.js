var etape = 0;

function make_grey(n){
	var i;
	var x = document.getElementsByClassName("bouton-sujet");

	for (i=0; i < 5; i++)
	{
		if(i == n)
		{
			x[i].className = "bouton-sujet active";
		}
		else
		{
			x[i].className = "bouton-sujet inactive";
		}
	}
}

function nextPrev(n) {
  // Determine quelle section afficher

  if (etape == 0)
  {
  	if(n == -1)
  	{
  		return;
  	}
  	etape = 1;
	    var x = document.getElementsByClassName("bouton-sujet");//Tous les boutons sujet step1
	    var y = document.getElementsByClassName("step2");//Toutes les sections associés aux boutons sujet step2
	    var i;
	    for (i=0; i < 2; i++)//recherche quel bouton sujet est actif dans les 2 premiers(l'animation change pour les 3 derniers)
	{
		if(x[i].classList.contains("active"))
		{
			document.getElementById("step1").classList = "display_none out_d_g";//display none les boutons sujet step1
			// setTimeout(function suite_next_Prev(y,i){y[i].classList = "step2 display-block";},500,y,i);
			y[i].classList = "step2 display-block-bouton display_block in_d_g";//display block la section associé au bouton sujet actif
			return;
		}
	}
	for (i=2; i < 5; i++)//même principe qu'au dessus mais avec une animation differente pour les 3 derniers boutons
	{
		if(x[i].classList.contains("active"))
		{
			document.getElementById("TEST").classList ="test animate_content";//display none la page entiere
			setTimeout(function(y,i){y[i].classList = "step2 display-block-form";//display block le formulaire
			document.getElementById("step1").classList = "display-none-form";//display none les boutons sujet step1
			document.getElementById("TEST").classList ="test";},400,y,i);//display block la page entiere apres 0.4 s
			return;
		}
	}
	etape = 0;//si aucun bouton n'était actif on reste a l'étape 0
	return;
  }

  else if (etape == 1)
  {
  	if(n == -1)//retour en arrière étape 1
  	{
  		etape = etape - 1;
  		var y = document.getElementsByClassName("step2");//Toutes les sections en étape 2
  		var i;
  		for (i=0; i < 2; i++)//recherche la section display block dans l'étape 2 pour les 2 premiere section
		{
			if(y[i].classList.contains("display-block-bouton"))
			{
				y[i].classList = "step2 display-none";//display none la section active
				// setTimeout(function(){document.getElementById("step1").classList = "display-block";},500);
				document.getElementById("step1").classList = "display-block";//display block les boutons de l'étape 0
				return;
			}
		}
		for (i=2; i < 5; i++)//même principe qu'au dessus mais avec les 3 derniere sections
		{
			if(y[i].classList.contains("display-block-form"))
			{
				document.getElementById("TEST").classList ="test animate_content";//display none la page entiere
				setTimeout(function(y,i){y[i].classList = "step2 display-none-form";//display none le formulaire
				document.getElementById("step1").classList = "display-block-form";//display block les boutons sujet step1
				document.getElementById("TEST").classList ="test";},400,y,i);//display block la page entiere apres 0.4 s
				return;
			}
		}
  	}
  }
}