$(document).ready(function(){
	recipesShown = [];
  meats=["beef","chicken","pork","salmon","tilapia","lamb", "turkey"];
  genRandomNumber = Math.floor(Math.random()*meats.length);
  console.log(meats[genRandomNumber]);
  // meats=meats[genRandomNumber]

   var url = 'https://api.edamam.com/search?q='+meats[genRandomNumber]+'&app_id=e370fe5f&app_key=5515518d09b2185298c869b4fd12db21&to=30';

   // $.ajax({
   //    type: 'GET',
   //     url: url,
   //     async: false,
   //     contentType: "application/json",
   //     dataType: 'jsonp',
	  // }).done(function(response){
  	//    	console.log(response);
		 //   	test = response;
   //      RecipeOne= {
   //         image: test.hits[randomizedR].recipe.image,
   //         // label: test.hits[randomizedR].recipe.label,
   //         // source: test.hits[randomizedR].recipe.source,
   //         // shareAs: test.hits[randomizedR].recipe.shareAs,
   //       };
   //      console.log(RecipeOne.image);
   //      // get the ingredient object of a recipe
   //      // test.hits[randomizedR].recipe.ingredients[X].quantity

      var test = {hits:["",""]};

     $.ajax({
        type: 'GET',
        url: url,
        async: false,
        contentType: "application/json",
        dataType: 'jsonp',
      success: function(results) {
      for (var i = 7 - 1; i >= 0; i--) {
        genRandomNumber = Math.floor(Math.random()*30);
        test = results;
        RecipeOne= test.hits[genRandomNumber].recipe;
        
        recipesShown.push(test.hits[genRandomNumber]);
        console.log(RecipeOne.image);
        EXPR = "<img class='recipeSeven' src="+"'"+RecipeOne.image+"'>"; 

        $('#image').prepend(EXPR);
        console.log(recipesShown);
      };
      }
  });

});