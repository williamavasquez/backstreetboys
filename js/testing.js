$(document).ready(function(){
  randomizedR = Math.floor(Math.random()*9);
	recipesShown = [];

   var url = 'https://api.edamam.com/search?q=beef&app_id=e370fe5f&app_key=5515518d09b2185298c869b4fd12db21&to=30';

<<<<<<< HEAD
   var url = 'https://api.edamam.com/search?q=vegetarian&app_id=82e33b19&app_key=ef430f166ba206b72620a9732916c7e6&to=9';


   $.ajax({
      type: 'GET',
       url: url,
       async: false,
       contentType: "application/json",
       dataType: 'jsonp',
      
   }).done(function(response){
   	// console.log(response);
   	// var test = response;
   	// test.hits[3].recipe.ingredients[2].quantity
   
    //   var ingredientsfromresults = test.ingredients;
      
      //make an array to store the ingredients, set this initally to 0
      var ingredientsArray = [];


      //this for loop is for the recipes
      for (var i = 0; i < response.hits.length; i++){
 
        //this for loop is for the respective ingredients in each recipe
        for (var j = 0; j < response.hits[i].recipe.ingredients.length; j++){

            //make a variable to store the responses from the URL for food, quantity, and measure
            var foodObj= {
              food:response.hits[i].recipe.ingredients[j].food,
              quantity:response.hits[i].recipe.ingredients[j].quantity,
              measure:response.hits[i].recipe.ingredients[j].measure
            }


              //remember that you always start at 0 for the first number, for example: if the recipe has only one ingredient you need to push it to the array

              if ( ingredientsArray.length == 0) {
                ingredientsArray.push(foodObj)

                //make a for loop to go through all the ingredients for the receipe
              } else {
                //set up to the false, becasue its asking have you added this ingredient yet? You haven't becuase you just started
                  var added = false;
                  for (var k = 0; k < ingredientsArray.length; k++){
                    
                    //add the respective ingredients together with the respective quantities for the ingredients. For example, you don't want to add
                    //tablespoon and teaspoon together. 

                    //make this statement true becuase you want the add respective ingredient and quantity  

                    if ((response.hits[i].recipe.ingredients[j].food == ingredientsArray[k].food) && (response.hits[i].recipe.ingredients[j].measure == ingredientsArray[k].measure)){
                      ingredientsArray[k].quantity = ingredientsArray[k].quantity + response.hits[i].recipe.ingredients[j].quantity;
                      added = true;
                      break;

                    //if the ingredients and quanitites don't match, still push it to the array to store it in there
                    }        
                  }
                  if (added == false){
                    ingredientsArray.push(foodObj)
                  }
              }

            // console.log(response.hits[i].recipe.ingredients[j].food)
            // console.log(response.hits[i].recipe.ingredients[j].quantity + " " + response.hits[i].recipe.ingredients[j].measure)

        }

      }

      console.log(ingredientsArray)


      //NEXT STEPS make the front end part to pass the search queries for the diet restrictions, 

      //double check if hte api allows you to do multiple search queries in one string (such as vegan and paleo)

  




            })

              // console.log(ingredientsObject);
   // }); 


//





=======
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
>>>>>>> e3f0d041ad6d1b5b812cf214f1c39af33c40e90b

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

        $('#image').prepend(EXPR);
console.log(recipesShown);
      },
  });
};
});