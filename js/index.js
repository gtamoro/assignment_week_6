$(document).ready(start);

// cities [option text, class name for background]
var cities = [["NYC","nyc"],
              ["SF","sf"],
              ["LA","la"],
              ["ATX","austin"],
              ["SYD","sydney"]];
var selectedCity;

function start() {
  populateList();
  $("#city-type").change(runCitiPix);
}

function populateList() {
  var option;
  for(var i = 0; i < cities.length; i++) {   // for each valid city
    $("#city-type").append($("<option></option>").val(cities[i][1]).html(cities[i][0])); // add <option> html to the select
  }
}

function runCitiPix(event) {
  event.preventDefault();
  selectedCity = $("#city-type").val(); // get value of option selected
  updateBackground();           // update background with image
}

function updateBackground() {
  removeBackground();
  if (isValidCity()) {
      $("body").addClass(selectedCity);   // Add class to body element (i.e. update background-image)
    //}
  }
}

// only add class if it's in the array
// credit: http://stackoverflow.com/questions/14812974/check-if-value-exists-in-2d-array
function isValidCity() {
  if ($.inArray(selectedCity, $.map(cities, function(item) { return item[1]; })) > -1) {
    return true;
  } else {
    return false;
  }
}

// Remove any classes added to the body element
// We don't want to add multiple classes to the body
function removeBackground() {
  var currentClass =  $("body").attr("class");
  if (typeof currentClass !== "undefined" && currentClass !== "") { // only remove a class if there was one already added
    $("body").removeClass(currentClass);
  }
}
