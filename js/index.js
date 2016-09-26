$(document).ready(start);

// cities [option text, class name for background]
var cities = [["NYC","nyc"],
              ["SF","sf"],
              ["LA","la"],
              ["ATX","austin"],
              ["SYD","sydney"]];

function start() {
  $(cities).each(populateList);
  $("#city-type").change(runCitiPix); // listen for when drop down is changed
}

function populateList(index, value) {
  $("#city-type").append($("<option></option>").val(value[1]).html(value[0])); // add <option> html to the select
}

function runCitiPix(event) {
  event.preventDefault();
  var selectedCity = $("#city-type").val(); // get value of option selected
  updateBackground(selectedCity);           // update background with image
}

function updateBackground(city) {
  $("body").removeClass(); // Remove any classes added to the body, don't want to add multiple
  $("body").addClass(city);   // Add class to body element (i.e. update background-image)
}
