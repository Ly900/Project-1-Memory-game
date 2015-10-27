$(document).ready(function() {

$("img").hide();
clickedCards = [];
var clickCounter = 0;
// at clickCounter = 0 and even numbers, nothing happens
function resetGame () {
  $("img").hide();
  clickedCards = [];
  var clickCounter = 0;
}
$("td").click(function () {
    var image = $(this).find("img");
    image.show();
    clickedCards.push(image);
    if (clickCounter % 2 !== 0) {
      if (clickedCards[0][0].getAttribute("src") == clickedCards[1][0].getAttribute("src")) {
      console.log("match");
      clickedCards = [];
      }
      else {
        console.log("don't match");
        var image1 = ($(clickedCards[0]));
        var image2 = ($(clickedCards[1]));
        image1.fadeOut(2000);
        image2.fadeOut(2000);
        clickedCards = [];
      }
    } //ends if clickCount is odd
    clickCounter++;
  })



//   compareCards();
// }; //ends function findMatch
//
// function compareCards () {
//   while (clickedCards === !"") {
//
//   } //ends while loop
// } //ends compareCards function



}); //ends ready method
