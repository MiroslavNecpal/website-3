$(document).ready(function(){

	$(".fa-bars").on("click", function(){
			$(".overlay").animate({ top:0}, 70);
		});

		$(".fa-window-close").on("click", function(){
			$(".overlay").animate({ top:-3800}, 400);
		});

});
