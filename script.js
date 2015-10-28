$(document).ready(function() {

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

clickedCards = [];

resetGame();

var clickCounter = 0;
var correctPairs = 0;

function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

function resetGame () {
  // shuffle(allCards);
  dealCards();
  $("img").hide();
  $("#clickNumber").html(clickCounter);
  $("#resetButton").on("click", resetGame);
}

function dealCards () {
  $.each(allCards, function (index, value) {
    var imageDiv = $("<div class='imageDiv'><img></img></div>");
    $(imageDiv).appendTo($("#cardsContainer"));
    $(imageDiv).find("img").attr("src", value);
  })
  openFirst();
}

function openFirst () {
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
    if (clickCounter % 2 !== 0) {
      console.log("odd click");
      card1 = $(clickedCards[0][0]).attr("src");
      card2 = $(clickedCards[1][0]).attr("src");
      if (card1 == card2) {
        console.log(card1);
        console.log(card2);
        console.log("they match");
        clickedCards = [];
      } // ends if they match
    //     correctPairs++;
    //     if (correctPairs === 8) {
    //       alert("You've won the game!")
    //     } // ends correctPairs
      else {
        $(card1).fadeOut(), 7000;
        $(card2).fadeOut(), 7000;
        clickedCards = [];
      } // ends else for matching
    } //ends if odd condition
    clickCounter++;
} // ends compareCards function






//   $("#clickNumber").html(clickCounter);


}); //ends ready method
