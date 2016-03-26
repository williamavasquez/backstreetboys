$(document).ready(function(){
	$('.recipeSeven').on('click', function(){
		if ($(this).hasClass('highlightImage')){
			$(this).removeClass('highlightImage');
		} else {
			$(this).addClass('highlightImage');
		}

		});

	$(".recipeSeven").dblclick(function(){
	        $("#myModal").modal();

	        $(document).bind('keyup', function(e) {
	            if (e.keyCode == 13){
	                $("#myModal").modal('hide');
	            }
	        });
	    });

});










