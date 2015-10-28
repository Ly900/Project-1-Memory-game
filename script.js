$(document).ready(function() {

$("img").hide();
clickedCards = [];
var clickCounter = 0;
var correctPairs = 0;

function resetGame () {
  $("img").hide();
  var clickedCards = [];
  var clickCounter = 0;
  $("#clickNumber").html(clickCounter);
}

$("#resetButton").on("click", resetGame);

$("td").click(function () {
    var image = $(this).find("img");
    image.show();
    clickedCards.push(image);
    image.click(false);

    if (clickCounter % 2 !== 0) {
      var card1 = clickedCards[0][0].getAttribute("src");
      var card2 = clickedCards[1][0].getAttribute("src");
      if (card1 == card2 ) {
      console.log("match");
      clickedCards = [];
      correctPairs++;
        if (correctPairs === 8) {
          alert("You've won the game!")
        }
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
    $("#clickNumber").html(clickCounter);
    console.log(clickCounter);
  })

}); //ends ready method
