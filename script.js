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
  shuffle(allCards);
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
  openCard();
}

function openCard () {
  $("#cardsContainer").on("click", function () {
    clickCounter++;
    console.log(clickCounter)
    var image = $(event.target).find("img");
    image.show();
    clickedCards.push(image);
    image.click(false);
    if (clickCounter % 2 !== 0) {
      var card1 = clickedCards[0][0];
      var card2 = clickedCards[1][0];
      if (card1 == card2 ) {
        console.log("match");
        clickedCards = [];
        correctPairs++;
    }
  }) // ends onclick on COntainer
} // ends openCard function

    //
    //
    //
    //
    //
    //   if (correctPairs === 8) {
    //     alert("You've won the game!")
    //   }
    // }
    // else {
    //   console.log("don't match");
    //   image1 = clickedCards[0][0];
    //   image2 = clickedCards[[1][0];
    //   setTimeout("image1.fadeOut()", 1000);
    //   setTimeout("image2.fadeOut()", 1000);
    //   clickedCards = [];
  //   }
  // } // ends if clickCount is odd

//   clickCounter++;
//   $("#clickNumber").html(clickCounter);
//   console.log(clickCounter);
//

// } //ends function checkCard

}); //ends ready method
