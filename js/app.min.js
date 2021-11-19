
 $(document).ready(function() {  

	$('.flip-card').click(function() {
		 $(this).toggleClass('hover');
	});
 
 });

 $("document").ready(function() {
	$(".intro_bg").click(function() {
	  if ($(this).attr("src") === "img/intro/bg.png")
		 $(this).attr("src", "img/intro/bg2.png");
	  else if ($(this).attr("src") === "img/intro/bg2.png")
		 $(this).attr("src", "img/intro/bg.png");
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

