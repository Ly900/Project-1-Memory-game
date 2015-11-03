// make sure you comment your code!
$(document).ready(function() {
// would renmae this to imageUrls or something. Even better instead of a string, create an object for each card, then you can have as many key value pairs as you want to define your object
var allCards = [
"images/annoyed-cat.jpg",
"images/cat-bathing.jpg",
"images/annoyed-cat.jpg",
"images/cat-bathing.jpg",
"images/cat-tongue.jpg",
"images/cat-green-ears.jpg",
"images/grumpy-cat.jpg",
"images/cat-with-glasses.jpg",
"images/cat-tongue.jpg",
"images/cat-wig.jpg",
"images/cat-crosseyed.jpg",
"images/cat-wig.jpg",
"images/cat-crosseyed.jpg",
"images/cat-green-ears.jpg",
"images/grumpy-cat.jpg",
"images/cat-with-glasses.jpg"
];

function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

startGame();

function startGame () {
  // using global variables can be dangerous. When we get a little bit more experience with scope/context/clousures we'll see better ways to eliminate global variables and encapsulate this into objects
  shuffle(allCards);
  clickCounter = 0;
  correctPairs = 0;
  clickedCards = [];
  $("#clickNumber").html(clickCounter);
  console.log("Correct Pairs = " + correctPairs);
  console.log("Click Counter = " + clickCounter);
  console.log(clickedCards);
  $("#resetButton").on("click", function () {
    location.reload();
  });
  dealCards();
}

function dealCards () {

  $.each(allCards, function (index, value) {
    // i like your use of the each method to iterate through your strings
    var imageDiv = $("<div class='imageDiv'><img></img></div>");
    $(imageDiv).appendTo($("#cardsContainer"));
    $(imageDiv).find("img").attr("src", value);
  })
    $("img").hide();
    openCard();
}

function openCard () {
  $("#cardsContainer").on("click", function () {
    console.log(clickCounter)
    var image = $(event.target).find("img");
    image.show();
    clickedCards.push(image);
    image.click(false);
    compareCards();
  }) // ends onclick on container
} // ends openCard function

function compareCards () {
  // what happens if i click the same picture twice?
    if (clickCounter % 2 !== 0) {
    // is the below variable pointing to a card? or an image src of a card?
    card1 = $(clickedCards[0][0]).attr("src");
    card2 = $(clickedCards[1][0]).attr("src");
      if (card1 == card2) {
        console.log("they match");
        // i don't think this is absolutely neccessary, you might be able to get rid of this line, and update the comparison to be the last two cards in the array
        // also in this way you can get a history of all user clicks as an ordered list.
        clickedCards = [];
        correctPairs++;
        console.log("Correct Pairs = " + correctPairs);
        if (correctPairs === 8) {
          alert("You've won the game!")
        } // ends correctPairs
      } // ends if they match
      else {
        console.log("they don't match");
        $(clickedCards[0]).fadeOut(2000);
        $(clickedCards[1]).fadeOut(2000);
        clickedCards = [];
      } // ends else for matching
    } //ends if even condition
    clickCounter++;
    $("#clickNumber").html(clickCounter);

} // ends compareCards function

}); //ends ready method
