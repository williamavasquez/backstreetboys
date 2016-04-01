$(document).ready(function(){

  veggies = ["Alfalfa sprouts","Artichoke","Arugula","Asparagus","Basil","Bean sprouts","bell pepper","Black beans","Black-eyed peas","Broad beans","Broccoli","Brussels sprouts","Butternut squash","Cabbage","Carrot","Carrots","Cauliflower","Celery","Chives","Collard greens","Corn","Daikon","Eggplant","garbanzo","Garlic","Ginger","Green beans","Habanero","Horseradish","Jalapeño","Kale","Kidney beans","Legumes","Lemon Grass","Lentils","lentils","Lettuce","lima beans","Marjoram","mushroom","Mustard greens","Nettles","spinach","Okra","Onion","Oregano","Paprika","Parsley","Parsnip","Peas","peppers","Pinto beans","Potato","Pumpkin","Radish","Shallot","Skirret","Soy beans","Spaghetti squash","Spinach","scallion","Sweet potato","Tabasco pepper","Tomato","Water chestnut","Watercress","yam","Zucchini"];

  meats=["beef","chicken","pork","salmon","tilapia","lamb", "turkey","tofu","fish","duck", "steak"];

  recipesShown = [];
    
   for (var i = 6; i >= 0; i--) {
      randomRecipe();
    }

  function randomRecipe(){
    Rmeat = Math.floor(Math.random()*meats.length);
    Rveggies = Math.floor(Math.random()*veggies.length);
    RRecipe = Math.floor(Math.random()*20)

    var url = 'https://api.edamam.com/search?q='+meats[Rmeat]+','+veggies[Rveggies]+'&from='+RRecipe+'&to='+(RRecipe+1)+'&app_id=52ebf3e8&app_key=97cc601259995e7caae8c06504a8df6b';

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
      recipesShown.splice(7,100);
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
  $('.recipeBoxes').empty();

$('.recipeBoxes').each(function(){
  if($(this).data('click')=="clicked"){
    var ClickedPostion = $(this).data('position');
    recipesShown.splice(ClickedPostion,1)
    randomRecipe();
  }
});

repeatRecipe = setInterval(checkRecipes,5000);
  // setTimeout(function(){
  //     counter=1
  //   for (var i = 0; i < ReplaceArray.length; i++) {
  //     console.log(ReplaceArray);
  //     var number = ReplaceArray[i];
  //     var placer = recipesShown[recipesShown.length-counter]
  //     console.log("this is the  last recipe=====" + placer.label);
  //     console.log("this should be the same as ===" + recipesShown[number].label);
  //     recipesShown.splice(number,0,placer);
  //     // recipesShown.pop();
  //     counter++;
  //   };},3000)
})


$(document).on('click', '.recipeBoxes', function(){

    if ($(this).hasClass('highlightRecipe')){
      $(this).removeClass('highlightRecipe');      
    } else {
      $(this).addClass('highlightRecipe');
      $(this).attr('data-click', "clicked");
      highlight = $(this).data('click');
      console.log(highlight);
    }
  });
}); //$(document).ready(function()