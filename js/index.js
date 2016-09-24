$(document).ready(start);

// valid cities
var cities = ["NYC", "SF", "LA", "ATX", "SYD"];
// class names of cities
var bgNames = ["nyc","sf","la","austin","sydney"];
var city;

function start() {
  populateList();
  $("#city-type").change(runCitiPix);
}

function populateList() {
  var option;
  for(var i = 0; i < cities.length; i++) {   // for each valid city
    $("#city-type").append($("<option></option>").val(bgNames[i]).html(cities[i])); // add <option> html to the select
  }
}

function runCitiPix() {
  city = $("#city-type").val(); // get value of option selected
  updateBackground();           // update background with image
}

function updateBackground() {
  removeBackground();
  if ($.inArray(city, bgNames) !== -1) { // add class if it's a valid option
    $("body").addClass(city);   // Add class to body element (i.e. update background-image)
  }
}

// Remove any classes added to the body element
// We don't want to add multiple classes to the body
function removeBackground() {
  var currentClass =  $("body").attr("class");
  if (typeof currentClass !== "undefined" && currentClass !== "") { // only remove a class if there is one added
    $("body").removeClass(currentClass);
  }
}
