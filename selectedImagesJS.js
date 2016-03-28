
$(document).ready(function(){

$(document).on('click', '.recipeSeven', function(){

		// $("#myModal").modal('show');
		if ($(this).hasClass('highlightImage')){
			

			$(this).removeClass('highlightImage');
			
			
		} else {
			$(this).addClass('highlightImage');
			$(this).attr('data-click', "clicked");
			
			highlight = $(this).data('click');
			console.log(highlight);
			
			

			
		}

		});
	});


	// $(".recipeSeven").click(function(){
	//         $("#myModal").modal();

	        // $(document).bind('keyup', function(e) {
	        //     if (e.keyCode == 13){
	        //         $("#myModal").modal('hide');
	        //     }
	        // });
	    // });



// $(".recipeSeven").click(function(){
	//         $("#myModal").modal();

	        // $(document).bind('keyup', function(e) {
	        //     if (e.keyCode == 13){
	        //         $("#myModal").modal('hide');
	        //     }
	        // });
	    // });













