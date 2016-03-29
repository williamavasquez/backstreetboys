function setOptions(chosen) 
{ 
var selbox = document.myform.opttwo; 
selbox.options.length = 0; 

if (chosen == "1") { 
selbox.options[selbox.options.length] = new Option('','oneblank'); 
selbox.options[selbox.options.length] = new Option('0-10 minutes','oneone'); 
selbox.options[selbox.options.length] = new Option('10-20 minutes','onetwo');
selbox.options[selbox.options.length] = new Option('20-30 minutes','onethree');
selbox.options[selbox.options.length] = new Option('30-40 minutes','onefour');
selbox.options[selbox.options.length] = new Option('40-50 minutes','onefive');
selbox.options[selbox.options.length] = new Option('50-60 minutes','onesix');
selbox.options[selbox.options.length] = new Option('60 minutes and more','oneseven'); 
} 

-->
var selboxtwo = document.myformtwo.opttwoanother; 
selboxtwo.options.length = 0; 

if (chosen == "1") { 
selboxtwo.options[selboxtwo.options.length] = new Option('','oneblankanother'); 
selboxtwo.options[selboxtwo.options.length] = new Option('gluten','oneoneanother'); 
selboxtwo.options[selboxtwo.options.length] = new Option('vegetarian','onetwoanother');
selboxtwo.options[selboxtwo.options.length] = new Option('vegen','onethreeanother');
selboxtwo.options[selboxtwo.options.length] = new Option('penut','onefouranother');
selboxtwo.options[selboxtwo.options.length] = new Option('','onefiveanother');
selboxtwo.options[selboxtwo.options.length] = new Option('','onesixanother');
selboxtwo.options[selboxtwo.options.length] = new Option('','onesevenanother'); 
} 
}  

$(document).ready(function(){
  setOptions(document.myform.optone.options[document.myform.optone.selectedIndex].value);
});