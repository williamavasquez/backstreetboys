
$(document).ready(function(){
	$('.recipeSeven').on('click', function(){
		// $("#myModal").modal('show');
		if ($(this).hasClass('highlightImage')){

			$(this).removeClass('highlightImage');
			
			
		} else {
			$(this).addClass('highlightImage');
			
		}

		});

	// $(".recipeSeven").click(function(){
	//         $("#myModal").modal();

	        // $(document).bind('keyup', function(e) {
	        //     if (e.keyCode == 13){
	        //         $("#myModal").modal('hide');
	        //     }
	        // });
	    // });

});










