/*
$(document).ready(function () {
  var lipCount = 0;
  var numOfLips = 4;

  for (var i=0; i<numOfLips; i++) {
    $("#lip-container").append("<div class='lip-0'></div>");
    if (i % 2 === 0) {
      $(".lip-0").last().addClass("small");
    }
  }



  $(".lip-0").on("mouseenter", function () {
    $(this).addClass("small");
    lipCount = lipCount + 1;
    $("color-target").html(lipCount);

    if (lipCount === numOfLips) {
      $("#bar").html("No remaining colors.");
    }

  });

});

*/

$(document).ready(function () {
  var lipCount = 0;
  var numOfLips = 6;

  for (var i=0; i<numOfLips; i++) {
    $("#lip-container").append("<div class='lip-0'></div>");
    if (i % 2 === 0) {
      $(".lip-0").last().addClass("small");
    }
  } 


$(".lip-0").on("mouseenter", function() {
    $(this).addClass("disappear");
    lipCount = lipCount + 1;
    $("#color-target").html(lipCount);

    // if all lipsticks have been added to the cart:
    if (lipCount === numOfLips) {
      $("#bar").html("Cart is full!");

    } 
   

  });



});














