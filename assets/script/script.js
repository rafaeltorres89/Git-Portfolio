$(function(){
	$(".action").click(function(event){
		event.preventDefault();
		$(".box_nav").removeClass("fifty sixteenAnimation").addClass("sixteen active_nav");
		$(".box_main").removeClass("fifty eightyAnimation").addClass("eighty active_main");
	});

	$(".logo").click(function(event){
		event.preventDefault();
		$(".box_nav").removeClass("sixteen active_nav").addClass("fifty sixteenAnimation");
		$(".box_main").removeClass("eighty active_main").addClass("fifty eightyAnimation");
	});
});