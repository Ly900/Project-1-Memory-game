$(document).ready(function() {

$("img").hide();
clickedCards = [];
var clickCounter = 0;
var correctPairs = 0;

function resetGame () {
  $("img").hide();
  var clickedCards = [];
  // this is the reason that the reset function doesn't reset the click counter. What happens when we use the var keyword in the scope of a function?
  var clickCounter = 0;
  $("#clickNumber").html(clickCounter);
}

$("#resetButton").on("click", resetGame);

$("td").click(function () {
  // nice use of this to find the image associated with the click.
    var image = $(this).find("img");
    image.show();
    clickedCards.push(image);
    // oh! this is really cool, didn't know you could do this, this is how you added functionality to not be able to click the same card.
    // what happens if i click a picture, than click the reset button? This is a bug you could hash out later.
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


// remember to take out any extra code that isn't being used in the application when you move to production. I do like that you want to abstract some of the functionality out of the click event
//   compareCards();
// }; //ends function findMatch
//
// function compareCards () {
//   while (clickedCards === !"") {
//
//   } //ends while loop
// } //ends compareCards function



}); //ends ready method
