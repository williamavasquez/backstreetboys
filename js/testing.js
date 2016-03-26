$(document).ready(function(){
  randomizedR = Math.floor(Math.random()*9);

	recipes = [];

   var url = 'https://api.edamam.com/search?q=chicken&app_id=82e33b19&app_key=ef430f166ba206b72620a9732916c7e6&to=9';

   $.ajax({
      type: 'GET',
       url: url,
       async: false,
       contentType: "application/json",
       dataType: 'jsonp',
      
   }).done(function(response){
   	console.log(response);
   	test = response;
   	test.hits[3].recipe.ingredients[2].quantity
   });
 

});