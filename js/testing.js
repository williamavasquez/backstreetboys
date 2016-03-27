$(document).ready(function(){
  randomizedR = Math.floor(Math.random()*9);
  console.log(randomizedR);

	recipes = [];

   var url = 'https://api.edamam.com/search?q=fish&app_id=82e33b19&app_key=ef430f166ba206b72620a9732916c7e6&to=9';

   $.ajax({
      type: 'GET',
       url: url,
       async: false,
       contentType: "application/json",
       dataType: 'jsonp',
	  }).done(function(response){
  	   	console.log(response);
		   	test = response;
        RecipeOne= {
           image: test.hits[randomizedR].recipe.image,
           // label: test.hits[randomizedR].recipe.label,
           // source: test.hits[randomizedR].recipe.source,
           // shareAs: test.hits[randomizedR].recipe.shareAs,
         };
        console.log(RecipeOne.image);
		   	randomRecipe = test.hits[randomizedR].recipe.ingredients[2].quantity;
		  	console.log(randomRecipe);
        EXPR = "<img class='recipeSeven' src="+"'"+RecipeOne.image+"'>"; 
        console.log(EXPR);
        $('#randomizedRecipes').prepend(EXPR);



		   });

});