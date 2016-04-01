
$(document).ready(function(){
<<<<<<< HEAD

=======
$(document).on('click', '.recipeBoxes', function(){
	
		// $("#myModal").modal('show');
		if ($(this).hasClass('highlightImage')){

			$(this).removeClass('highlightImage');
			
			
		} else {
			$(this).addClass('highlightImage');
			$(this).attr('data-click', "clicked");
			highlight = $(this).data('click');
			console.log(highlight);
			
		}

		
>>>>>>> 689487165d7bfe330e51e8c93af73580da273445

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













