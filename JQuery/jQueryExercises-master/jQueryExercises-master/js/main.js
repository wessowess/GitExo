// Sélectionnez via jQuery la classe correspondante et appliquez une méthode
// permettant de l'afficher !
//
// Eléments à utiliser :
// 		.product-photo
//		.show() (ou .toggle())
// 		$();

$(document).ready(() => {
	$('.product-photo').show();
});



// En manipulant uniquement l'arborescence DOM (uniquement les balises, pas de sélection de class/ID) :
// 	Dans la navbar affichée en (haut logo, menu, login) , ajoutez à chaque 2nd élément
//	de la liste l'élément : "<span> - 2nd!</span>"


$(document).ready(() => {
	$("div > ul li:nth-child(2)").append("<span> - 2nd!</span>");
});



// En manipulant uniquement l'arborescence DOM (uniquement les balises, pas de sélection de class/ID) : 
//	changez la couleur (du background) du menu de la navbar (logo, menu, login) en bleu 

$(document).ready(() => {
	// $("body > nav").css("background-color", "blue");
	$("nav").first().css("background-color", "blue");
});


// En manipulant uniquement l'arborescence DOM (uniquement les balises, pas de sélection de class/ID) : 
// changez la couleur (du background) du menu "dropdown" (shoes & contact + les listes) en dessous de la navbar en rouge

$(document).ready(() => {
	// $("body > div:first").css("background-color", "red");
	$("nav").next().css("background-color", "red");
});



// Maintenant, sélectionnez l'id nav-dropdown (shoes & contact + les listes) et cachez-moi cette navbar !

$(document).ready(() => {
	$("#nav-dropdown").hide();
});



// Faites une modification sur le texte "Menu" de la navbar (haut logo, menu, login)
// pour afficher/cacher (toggle) la dropdown (shoes & contact + les listes) avec un clic.
$(document).ready(() => {
	$(".menu-button").click(function(){
		$("#nav-dropdown").slideToggle("slow");
	})
});


// Vous êtes prêts pour les futures instructions, 
// 	restez à l'écoute (il se passe sûrement quelque chose au tableau)