$(document).ready(function() {
 //Declared Variables
 var speed = 500; //fade speed
 var autoswitch = true; //automatic slide toggle
 var autoswitch_speed = 4000; //toggle's speed

 //add initial active class
 $(".slide").first().addClass("active");

 //hide all slides
 $(".slide").hide();

 //show Active slide
 $(".active").show();

 $("#next").on("click", nextSlide);

  $("#prev").on("click", prevSlide);

 //Autoswitch
 if(autoswitch === true) {
 	setInterval(nextSlide, autoswitch_speed);
 }
 
 //Next & Previous functions
 function nextSlide() {
  	$(".active").removeClass("active").addClass("oldActive");
  	if($(".oldActive").is(":last-child")) {
  		$(".slide").first().addClass("active");
  	} else {
  		$(".oldActive").next().addClass("active");
  	}
  	$(".oldActive").removeClass("oldActive");
  	$(".slide").fadeOut(speed-400);
  	$(".active").fadeIn(speed);
  };

 function prevSlide () {
  	$(".active").removeClass("active").addClass("oldActive");
  	if($(".oldActive").is(":first-child")) {
  		$(".slide").last().addClass("active");
  	} else {
  		$(".oldActive").prev().addClass("active")
  	}
  	$(".oldActive").removeClass("oldActive");
  	$(".slide").fadeOut(speed);
  	$(".active").fadeIn(speed);
  };
});
