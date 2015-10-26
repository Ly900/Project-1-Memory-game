$(document).ready(function() {

$("img").hide();

function compareImages() {
  if (image1 == image2) {
    console.log("You've got a match!");
  }
}

function secondClick() {
$("td").click(function secondClick() {
  var image2 = $(this).find("img").show().attr("src");
  console.log(image2);
  compareImages()
}); // ends 2nd click event
}

function firstClick() {
$("td").click(function () {
  var image1 = $(this).find("img").show().attr("src");
  console.log(image1);
  secondClick();
}); // ends 1st click event
}



firstClick();


}); //ends ready method
