// Machine à écrire
var text = document.getElementById('text');
var splitText = text.innerText.split('');

text.innerHTML = '';
i = 0
setInterval(function(){
  AjoutDeLettre()}
  , 100 )

function AjoutDeLettre(){
if(i < splitText.length){
  text.innerHTML += splitText[i];
  i++;
}
}

// Afficher le bouton to-top
jQuery(function(){
    $(function () {
        $(window).scroll(function () { //Fonction appelée quand on descend la page
            if ($(this).scrollTop() > 200 ) {  // Quand on est à 200pixels du haut de page,
                $('#scrollUp').css('right','10px'); // Replace à 10pixels de la droite l'image
            } else { 
                $('#scrollUp').removeAttr( 'style' ); // Enlève les attributs CSS affectés par javascript
            }
        });
    });
});

// Transition smooth
// $('a[href^="#"]').click(function(){
// 	var the_id = $(this).attr("href");
// 	if (the_id === '#') {
// 		return;
// 	}
// 	$('html, body').animate({
// 		scrollTop:$(the_id).offset().top
// 	}, 'slow');
// 	return false;
// });

// let toggle = document.querySelector('.toggle-btn');
// let body = document.querySelector('body');

// document.onclick= function(e){
//     if(e.target.class !== '.toggle-btn'){
//         body.classList.toggle('open');
//     } else {
//         body.classList.remove('open');
//     }
// }

$(document).ready(function(){
    var $nav= $('body');
    $(".toggle-btn").on('click', function(){
        val = $nav.toggleClass('open');
    });

    $("#nav li a").on('click', function(){
        val = $nav.toggleClass('open');
    });
});


