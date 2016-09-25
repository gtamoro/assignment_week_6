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
  $.each(cities, function (index, value) {
    $("#city-type").append($("<option></option>").val(value[1]).html(value[0])); // add <option> html to the select
  });
}

function runCitiPix(event) {
  event.preventDefault();
  selectedCity = $("#city-type").val(); // get value of option selected
  updateBackground();           // update background with image
}

function updateBackground() {
  $("body").removeClass(); // Remove any classes added to the body, don't want to add multiple
  $("body").addClass(selectedCity);   // Add class to body element (i.e. update background-image)
}
