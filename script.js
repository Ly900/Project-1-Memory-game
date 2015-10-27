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

$(".button").on("click", resetGame);

$("td").click(function () {
    var image = $(this).find("img");
    image.show();
    clickedCards.push(image);
    image.click(false);

    if (clickCounter % 2 !== 0) {
      if (clickedCards[0][0].getAttribute("src") == clickedCards[1][0].getAttribute("src")) {
      console.log("match");
      clickedCards = [];
      }
      else {
        console.log("don't match");
        image1 = ($(clickedCards[0]));
        image2 = ($(clickedCards[1]));
        setTimeout("image1.fadeOut()", 1000);
        setTimeout("image2.fadeOut()", 1000);
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
