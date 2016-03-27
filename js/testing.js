$(document).ready(function(){
  randomizedR = Math.floor(Math.random()*9);
	recipesShown = [];

   var url = 'https://api.edamam.com/search?q=beef&app_id=82e33b19&app_key=ef430f166ba206b72620a9732916c7e6&to=30';

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

for (var i = 7 - 1; i >= 0; i--) {
  var test = {hits:["",""]};

     $.ajax({
        type: 'GET',
        url: url,
        async: false,
        contentType: "application/json",
        dataType: 'jsonp',
      success: function(results) {
      genRandomNumber = Math.floor(Math.random()*30);
        test = results;
        RecipeOne= test.hits[genRandomNumber].recipe;

        recipesShown.push(test.hits[genRandomNumber]);
        console.log(RecipeOne.image);
        EXPR = "<img class='recipeSeven' src="+"'"+RecipeOne.image+"'>"; 

        $('#randomizedRecipes').prepend(EXPR);
console.log(recipesShown);
      },
  });
};
});