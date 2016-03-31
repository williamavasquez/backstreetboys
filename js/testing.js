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

    var url = 'https://api.edamam.com/search?q='+meats[Rmeat]+','+veggies[Rveggies]+'&from='+RRecipe+'&to='+(RRecipe+1)+'&app_id=dae92dd5&app_key=44b98c657ab729481cd7aa24ff9c2f20';

    $.ajax({
        type: 'GET',
        url: url,
        async: false,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(results) {
          test = results;
          RecipeOne= test.hits[0].recipe;
          recipesShown.push(RecipeOne);
          SingleRecipe.push(RecipeOne); 
          console.log(SingleRecipe);      
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
  for (var i = 0; i < 7; i++) {
      RecipeOne=recipesShown[i];
      EXPR = "<img class='recipeSeven' src="+"'"+RecipeOne.image+"'>"; 
      Rdiv = $('<div>').addClass("recipeBoxes").attr("data-position",i);
      RecipeName = $('<h2>').text(RecipeOne.label);
      Rdiv= Rdiv.append(EXPR);
      Rdiv= Rdiv.append(RecipeName)
      $('#image').prepend(Rdiv);
      clearInterval(repeatRecipe);
  }
}
};//function checkRecipes(){

repeatRecipe = setInterval(checkRecipes,5000);

//================================================
$('#randomizeNewlistBtn').click(function(){
  $('#randomizeNewlistBtn').empty();

  ReplaceArray=[];
$('.recipeBoxes').each(function(){
  if($(this).data('click')=="clicked"){
    ReplaceArray.push($(this).data('position'))
    console.log(ReplaceArray);
  }
  
})


  
// var highlightedRecipes=$( ".highlightRecipe" )
// $( ".recipeBoxes" ).remove();
//   console.log(highlightedRecipes);
//  for(i=0;i<highlightedRecipes.length;i++){
// var positiontoPush = $('.highlightedRecipes').data("position");
// positionArray.push(positiontoPush);
// console.log(positionArray)



// this will forget the position
// recipesShown.splice(highlightedRecipes[i].dataset.position,1);

// this will remember the position
//recipesShown[highlightedRecipes[i].dataset.position]=null;



// }

// repeatRecipe = setInterval(checkRecipes,5000);

//checkRecipes();


console.log(recipesShown);




})
}); //$(document).ready(function()