/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myTimeFunction() {
    document.getElementById("timemyDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onClick = function(event) {
  if (!event.target.matches('.timebtn')) {

    var dropdowns = document.getElementsByClassName("timedropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myDietFunction() {
    document.getElementById("dietmyDropdown").classList.toggle("show");
}

window.onClick = function(event) {
  if (!event.target.matches('.dietbtn')) {

    var dropdowns = document.getElementsByClassName("dietdropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myBudgetFunction() {
    document.getElementById("budgetmyDropdown").classList.toggle("show");
}

window.onClick = function(event) {
  if (!event.target.matches('.budgetBtn')) {

    var dropdowns = document.getElementsByClassName("budgetdropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}