$(document).ready(function(){
  ingredientsArray = [];

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


    var url = 'https://api.edamam.com/search?q='+meats[Rmeat]+','+veggies[Rveggies]+'&from='+RRecipe+'&to='+(RRecipe+1)+'&app_id=7bf85bba&app_key=792d7df832b1f3997bded95231dd875e';


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
        spinner.stop();
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

$('#myNewListBtn').on('click', function(){

      for (var i = 0; i < recipesShown.length; i++){
        for (var j = 0; j < recipesShown[i].ingredients.length; j++){

            var foodObj= {
              food:recipesShown[i].ingredients[j].food,
              quantity:recipesShown[i].ingredients[j].quantity,
              measure:recipesShown[i].ingredients[j].measure
            }

              if ( ingredientsArray.length == 0) {
                ingredientsArray.push(foodObj)
               } else {
                   var added = false;
                  for (var k = 0; k < ingredientsArray.length; k++){

                    if ((recipesShown[i].ingredients[j].food == ingredientsArray[k].food) && (recipesShown[i].ingredients[j].measure == ingredientsArray[k].measure)){
                         ingredientsArray[k].quantity = ingredientsArray[k].quantity + recipesShown[i].ingredients[j].quantity;
                       added = true;
                      break;
                    }        
                  }
                  if (added == false){
                    ingredientsArray.push(foodObj)
                  }
              }
        }
      }
      console.log(ingredientsArray)
    for (var i = 0; i < ingredientsArray.length; i++) {
         var newDiv = $('<div>').addClass("IngDiv");
         var ingredientDiv = ('<input type="checkbox" name="Grocery" value= "'+ingredientsArray[i].food+'"> ' + ingredientsArray[i].quantity +" "+ingredientsArray[i].measure+": "+ingredientsArray[i].food + '<br>' + '<br>' + " ").toUpperCase();
         newDiv.append(ingredientDiv);
         $('#ingredient').append(newDiv);

       }
  });

$('#submitWunderlist').on('click', function(){

 $('input[type=checkbox]').each(function(){

   if($(this).prop( "checked" )){
     console.log("Checked");
   }else{
     console.log("Not checked");
 }//else
}); 
});//$('#subm


haveitems=[];
dontHaveItems=[];

// $('#submitWunderlist').on('click', function(){

//  $('input[type=checkbox]').each(function(){

//    if($(this).prop( "checked" )){
//     $('#getMeTheList').append($(this));
//      console.log("Checked");
//    }else{
//      console.log("Not checked");
//  }//else
// }); 
// });//$('#subm
}); //$(document).ready(function()

// }); //$(document).ready(function()


// // loading bar //
// $(window).ready(function (){
//    var spinner = new Spinner({
//     lines: 12, // The number of lines to draw
//     length: 7, // The length of each line
//     width: 5, // The line thickness
//     radius: 10, // The radius of the inner circle
//     color: '#000', // #rbg or #rrggbb
//     speed: 1, // Rounds per second
//     trail: 100, // Afterglow percentage
//     shadow: true // Whether to render a shadow
//    }).spin(document.getElementById("#myProgress"));
// })

// spinner.js spin the spinning spinner spun span spong //
console.log("spin span spun");


var opts = {
  lines: 13 // The number of lines to draw
, length: 28 // The length of each line
, width: 14 // The line thickness
, radius: 42 // The radius of the inner circle
, scale: 1 // Scales overall size of the spinner
, corners: 1 // Corner roundness (0..1)
, color: '#000' // #rgb or #rrggbb or array of colors
, opacity: 0.25 // Opacity of the lines
, rotate: 0 // The rotation offset
, direction: 1 // 1: clockwise, -1: counterclockwise
, speed: 1 // Rounds per second
, trail: 60 // Afterglow percentage
, fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
, zIndex: 2e9 // The z-index (defaults to 2000000000)
, className: 'spinner' // The CSS class to assign to the spinner
, top: '55%' // Top position relative to parent
, left: '50%' // Left position relative to parent
, shadow: false // Whether to render a shadow
, hwaccel: false // Whether to use hardware acceleration
, position: 'absolute' // Element positioning
}
var target = document.getElementById('myProgress');
var spinner = new Spinner(opts).spin(target);

// // no more spinning, i'm going to throw up
// setTimeout(function(){
//   spinner.stop()}, 12000);

