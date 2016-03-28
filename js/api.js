$(document).ready(function(){
   
recipes = [];
JObject = [];

   var url = 'https://api.edamam.com/search?q=chicken&app_id=82e33b19&app_key=ef430f166ba206b72620a9732916c7e6&to=10';
   $.ajax({
      type: 'GET',
       url: url,
       async: false,
       contentType: "application/json",
       dataType: 'jsonp',
       success: function(jsonData) {

            JObject.push(jsonData);
            console.log(JObject);

           for (var i = 0; i < jsonData.hits.length; i++) {
                recipeSearchResults = {
                   label: jsonData.hits[i].recipe.label,
                   image: jsonData.hits[i].recipe.image,
                   source: jsonData.hits[i].recipe.source,
                   shareAs: jsonData.hits[i].recipe.shareAs,
                   // ingredientLines: jsonData.hits[i].recipe.ingredientLines
               }
                   recipes.push(recipeSearchResults);
                    divRecipeImage = $("<div class='recipeContainer'><a class='fancybox fancybox.iframe' href='"+ recipeSearchResults.shareAs +"'><img class='recipeSearchResultsImage' src='"+ recipeSearchResults.image +"'></a><p class='recipeLabel'>"+ recipeSearchResults.label +"</p><p class='recipeSource'>"+ recipeSearchResults.source +"</p></div>");
                   $(".recipeSeven").append(divRecipeImage);   
     totalRecipeResults= JObject.hits;
     console.log(totalRecipeResults);

    // generate a random number
     // randomizedR = Math.floor(Math.random()*totalRecipeResults.length);

    // select a random recipe from the API result  
     // SelectedR = totalRecipeResults[randomizedR];
    // console.log(SelectedR);
    // add the recipe to the page
    // $("#coolKids").append(SelectedR.id+"<br>"+"<br>"); 
           };
       },
       error: function(e) {
          console.log(e.message);
       }


   });

    //Generate a random Recipe***************************************************  
    // grabs all the results based on the criteria



// ******************************************end of random recipe*******************










   // --------------- New CODE ----------------------

//    var jeff = "meat";
//    var jeff = jeff.toLowerCase();
//    var will = "potato";

//    // ****************** Comment! READ!! *****************
//         // when using a diet restriction, please use the correct searchValue (not id) from : 
//         // http://api.yummly.com/v1/api/metadata/diet?_app_id=c921f5ae&_app_key=7ea32b0083cc69dd4df8f23facdb79f0
//         // example: Vegan = 386^vegan (push this term into the queryURL)

//    // var budget = [0-10, 10-20, 20-30, 40-50];
//    // var diet(vegan, stupid gluten people, lose fat diet)
//    // var allergies
//    //var time restriction(it is in seconds we have to change it to minutes)
//    //var servings
//    // first check  -numbers were in the front

//    var queryURL = "https://api.edamam.com/search?q=fish&app_id=e370fe5f&app_key=5515518d09b2185298c869b4fd12db21"
   


//    //working API call
//    //"http://api.yummly.com/v1/api/recipes?_app_id=c921f5ae&_app_key=7ea32b0083cc69dd4df8f23facdb79f0&requirePictures=true&allowedIngredient[]="+jeff+"&allowedIngredient[]="+will+"&allowedDiet[]=vegan";



//    // var queryURL = "http://api.yummly.com/v1/api/recipe/Fish-Baked-With-Tomato-And-Cheese-1554504?_app_id=c921f5ae&_app_key=7ea32b0083cc69dd4df8f23facdb79f0";

//    // building url
//    // "http://api.yummly.com/v1/api/recipe/Brussel-Sprouts-with-Pancetta-and-Red-Wine-Vinaigrette-1557470?_app_id=c921f5ae&_app_key=7ea32b0083cc69dd4df8f23facdb79f0";

//    //second check - ingredient was first and then amount of ingrdient
//   //http://www.yummly.com/recipe/recipe/Salad-For-Dinner-1537402?_app_id=c921f5

//   //third check- this (amount of ingredients were in the front, and also had specific ounce sizes with cans)
// //http://www.yummly.com/recipe/Mediterranean-Quinoa-Salad-1535288?columns=1&position=3%2F4

// //fourth check -this (amount of ingredient were in the front)
// //http://www.yummly.com/recipe/Pan-Roasted-Chicken-Breasts-1547688

// //fifth check - this (amount of ingredient was in the front )
// //http://www.yummly.com/recipe/Brussel-Sprouts-with-Pancetta-and-Red-Wine-Vinaigrette-1557470


// // http://api.yummly.com/v1/api/recipes?_app_id=c921f5ae&_app_key=7ea32b0083cc69dd4df8f23facdb79f0&requirePictures=true&allowedIngredient[]=cheese&allowedIngredient[]=potato



//    $.ajax({
//             url: queryURL,
//             method: 'GET'
//         }) //this done function is getting the response back from ajax. Its storing (you can't see this yet) the value
//     //such as the Cat URL, or Dog URL. The images are now in teh response
//         .done(function(response) {


// //console.log will console log the response object
// console.log(response);

// //make this variable to test the results of the ajax call to the yummly api
// var yummlyObject = response;

// //console.log(yummlyObject.ingredientLines[1]);





// //write a formula that will limit the amount of recipe results and will only display teh recipe results that 
// //have the requirement that wil h


// //use split formula to see if we can split the amount of specific ingedient number (ex: 2 cups), such as getting "2" and "cups"


// //next steps: Double Check how you would code the api (such as getting rid of numbers in teh front of the sentence). How would you code this??
// //make an if/else statement that if a recipe does not have a number in the front you would make the code randomize again
// //read up about reference regex (regular expression) numbers only- check week4 (hangman game) checks variables that all of them are numbers



// });


})