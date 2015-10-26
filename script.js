$(document).ready(function() {

$("img").hide();
var clickedCards = [];

function findMatch () {
  var image;
  $("td").click(function () {
  image = $(this).find("img").show().attr("src");
  clickedCards.push(image)
  console.log(clickedCards)
  $(this).off();
  });
}; //ends function findMatch

findMatch();

}); //ends ready method
