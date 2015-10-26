$(document).ready(function() {

$("img").hide();
clickedCards = [];
var clickCounter = 0;
// at clickCounter = 0 and even numbers, nothing happens

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
        ($(clickedCards[0])).hide();
        ($(clickedCards[1])).hide();
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
