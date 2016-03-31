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
          console.log(results);
          RecipeOne= test.hits[0].recipe;
          console.log(RecipeOne);


          recipesShown[recipesShown.length]=RecipeOne;
//          SingleRecipe[SingleRecipe.length]=RecipeOne;       
       },
       error: function(jqXHR, exception){

        console.log("we got an error " + exception);
        console.log(jqXHR);
        
       }

      });//$.ajax({
  }

  function getRecipe(inPosition){

    var positionToReplace=inPosition;

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


          if(!test.hits[0].recipe){
          console.log("I didn't find one");
              getRecipe();
            }else{
          console.log("I got a recipe to put into postion "+positionToReplace);
              test = results;
              RecipeOne= test.hits[0].recipe;
              console.log(RecipeOne);
              recipesShown[positionToReplace]=RecipeOne;


            }
       }

      });//$.ajax({
  }


// function realignRecipes(){

//   for(j=0;j<recipesShown.length;j++){

//       if(recipesShown[i]==null){
//         getRecipe(j);
//       }

//   }

// }

function checkRecipes(){


if (recipesShown.length<7){


    var counter = 7-recipesShown.length;
    for (var i = 0; i <counter; i++){
      randomRecipe();
    }



} else {
    /// we have 7
    console.log("appending to page");
  for (var i = 0; i < 7; i++) {

if(recipesShown[i]!=null){

      RecipeOne=recipesShown[i];
//      console.log(RecipeOne);
      EXPR = "<img class='recipeSeven' src="+"'"+RecipeOne.image+"'>"; 
      Rdiv = $('<div>').addClass("recipeBoxes").attr('data-position', i);

      RecipeName = $('<h2>').text(RecipeOne.label);

      Rdiv= Rdiv.append(EXPR);
      $('#image').prepend(Rdiv);
      Rdiv= Rdiv.append(RecipeName)
 }



}


      clearInterval(repeatRecipe);
}
};//function checkRecipes(){

repeatRecipe = setInterval(checkRecipes,5000);


$('#randomizeNewlistBtn').click(function(){


var highlightedRecipes=$( ".highlightRecipe" )
$( ".recipeBoxes" ).remove();

//console.log($( ".highlightRecipe" ));
console.log(recipesShown);

// console.log($(this))
 for(i=0;i<highlightedRecipes.length;i++){


// this will forget the position
recipesShown.splice(highlightedRecipes[i].dataset.position,1);

// this will remember the position
//recipesShown[highlightedRecipes[i].dataset.position]=null;



}

realignRecipes();

repeatRecipe = setInterval(checkRecipes,5000);

//checkRecipes();


console.log(recipesShown);




})

$(document).on('click', '.recipeBoxes', function(){

    // $("#myModal").modal('show');
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

// ========================================================
// ========================================================


//everytime you click

// $('#randomizeNewlistBtn').on('click', function(){
//   alert('shalom');
//   //run a loop to check to see if the data attribute is clicked
//   //if data attribute ('click') is clicked
//   //run the randomizer function
//   for (var i = 0; i <  i++) {
//     console.log(randomRecipe());
//   }

// }};





