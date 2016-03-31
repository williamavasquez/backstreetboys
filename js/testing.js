$(document).ready(function(){

  veggies = ["Alfalfa sprouts","Artichoke","Arugula","Asparagus","Basil","Bean sprouts","bell pepper","Black beans","Black-eyed peas","Broad beans","Broccoli","Brussels sprouts","Butternut squash","Cabbage","Carrot","Carrots","Cauliflower","Celery","Chives","Collard greens","Corn","Daikon","Eggplant","garbanzo","Garlic","Ginger","Green beans","Habanero","Horseradish","Jalapeño","Kale","Kidney beans","Legumes","Lemon Grass","Lentils","lentils","Lettuce","lima beans","Marjoram","mushroom","Mustard greens","Nettles","spinach","Okra","Onion","Oregano","Paprika","Parsley","Parsnip","Peas","peppers","Pinto beans","Potato","Pumpkin","Radish","Shallot","Skirret","Soy beans","Spaghetti squash","Spinach","scallion","Sweet potato","Tabasco pepper","Tomato","Water chestnut","Watercress","yam","Zucchini"];

  meats=["beef","chicken","pork","salmon","tilapia","lamb", "turkey","tofu","fish","duck", "steak"];

  recipesShown = [];
    
   for (var i = 6; i >= 0; i--) {
      randomRecipe();
    }

  function randomRecipe(){
    SingleRecipe=[];
    Rmeat = Math.floor(Math.random()*meats.length);
    Rveggies = Math.floor(Math.random()*veggies.length);
    RRecipe = Math.floor(Math.random()*10)

    var url = 'https://api.edamam.com/search?q='+meats[Rmeat]+','+veggies[Rveggies]+'&from='+RRecipe+'&to='+(RRecipe+1)+'&app_id=e370fe5f&app_key=5515518d09b2185298c869b4fd12db21';

    $.ajax({
        type: 'GET',
        url: url,
        async: false,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(results) {
          test = results;
          RecipeOne= test.hits[0].recipe;
          console.log(RecipeOne);

          recipesShown.push(RecipeOne);
          SingleRecipe.push(RecipeOne);       
       }

      });//$.ajax({
  }

function checkRecipes(){
if (recipesShown.length<7){
  var counter = 7-recipesShown.length;
    for (var i = 0; i <counter; i++){
      randomRecipe()
    }
  } else {
    console.log("appending to page");
  for (var i = 0; i < 7; i++) {
      RecipeOne=recipesShown[i];
      console.log(RecipeOne);
      EXPR = "<img class='recipeSeven' src="+"'"+RecipeOne.image+"'>"; 
      Rdiv = $('<div>').addClass("recipeBoxes");
      RecipeName = $('<h2>').text(RecipeOne.label);
      Rdiv= Rdiv.append(RecipeName)
      Rdiv= Rdiv.append(EXPR);
      $('#image').prepend(Rdiv);
      clearInterval(repeatRecipe);
  }
}
};//function checkRecipes(){

repeatRecipe = setInterval(checkRecipes,5000);
}); //$(document).ready(function()