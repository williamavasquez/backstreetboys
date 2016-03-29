$(document).ready(function(){
	recipesShown = [];

   var url = 'https://api.edamam.com/search?q=beef&app_id=e370fe5f&app_key=5515518d09b2185298c869b4fd12db21&to=30';

  veggies = ["Alfalfa sprouts","Artichoke","Arugula","Asparagus","Basil","Bean sprouts","bell pepper","Black beans","Black-eyed peas","Broad beans","Broccoli","Brussels sprouts","Butternut squash","Cabbage","Carrot","Carrots","Cauliflower","Celery","Chives","Collard greens","Corn","Daikon","Eggplant","Fennel","Frisee","garbanzo","Garlic","Ginger","Green beans","Habanero","Horseradish","Jalapeño","Kale","Kidney beans","Legumes","Lemon Grass","Lentils","lentils","Lettuce","lima beans","Marjoram","mushroom","Mustard greens","Nettles","spinach","Okra","Onion","Oregano","Paprika","Parsley","Parsnip","Peas","peppers","Pinto beans","Potato","Pumpkin","Radish","Shallot","Skirret","Soy beans","Spaghetti squash","Spinach","scallion","Sweet potato","Tabasco pepper","Tomato","Water chestnut","Watercress","yam","Zucchini"];

  meats=["beef","chicken","pork","salmon","tilapia","lamb", "turkey"];
  genRandomNumber = Math.floor(Math.random()*meats.length);
  rMeat=meats[genRandomNumber];
  rVeggie = veggies[Math.floor(Math.random()*veggies.length)];

   var url = 'https://api.edamam.com/search?q='+rMeat+','+rVeggie+'&app_id=e370fe5f&app_key=5515518d09b2185298c869b4fd12db21&to=30';

   //      console.log(RecipeOne.image);
   //      // get the ingredient object of a recipe
   //      // test.hits[randomizedR].recipe.ingredients[X].quantity

     $.ajax({
        type: 'GET',
        url: url,
        async: true,
        contentType: "application/json",
        dataType: 'jsonp',
      success: function(results) {
        console.log(results);
      for (var i = 6; i >= 0; i--) {
        test = results;
        genRandomNumber = Math.floor(Math.random()*results.hits.length);
        RecipeOne= test.hits[genRandomNumber].recipe;
        
        recipesShown.push(test.hits[genRandomNumber]);
        console.log(RecipeOne.image);
        EXPR = "<img class='recipeSeven' src="+"'"+RecipeOne.image+"'>"; 
        RecipeName = RecipeOne.label;
       
        Rdiv = $('<div>').addClass("recipeBoxes");
        RecipeName = $('<h2>').text(RecipeName);
        Rdiv= Rdiv.append(RecipeName)
        Rdiv= Rdiv.append(EXPR);

        $('#image').prepend(Rdiv);
        console.log(recipesShown);
      };
      }
  });

});