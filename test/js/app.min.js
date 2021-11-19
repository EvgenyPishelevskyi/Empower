
 $(document).ready(function() {  

	$('.flip-card').click(function() {
		 $(this).toggleClass('hover');
	});
 
 });

 $("document").ready(function() {
	$(".intro_bg").click(function() {
	  if ($(this).attr("src") === "img/intro/bg.webp")
		 $(this).attr("src", "img/intro/bg2.webp");
	  else if ($(this).attr("src") === "img/intro/bg2.webp")
		 $(this).attr("src", "img/intro/bg.webp");
	});
 });


 /* Бургер */

$('.burger').on('click', () => {
   $('.burger').toggleClass('active');
   $('.mobile nav').toggleClass('open');
   $('.mobile__nav').toggleClass('show');
	$('body').toggleClass('_lock')
});


/* Бургер */


 /* Фиксированная шапка */

