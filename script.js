$(document).ready(function() {

allCards = [
"images/annoyed-cat.jpg",
"images/cat-bathing.jpg",
"images/cat-tongue.jpg",
"images/cat-wig.jpg",
"images/cat-crosseyed.jpg",
"images/cat-green-ears.jpg",
"images/grumpy-cat.jpg",
"images/cat-with-glasses.jpg"
];

// $("img").hide();
// clickedCards = [];
// var clickCounter = 0;
// var correctPairs = 0;

$.each(allCards, function (index, value) {
  $("<div class='imageDiv'><img></img></div>").find("img").attr("src", value).appendTo("#cardsContainer");
})


// function resetGame () {
//   $("img").hide();
//   var clickedCards = [];
//   var clickCounter = 0;
//   $("#clickNumber").html(clickCounter);
// }
//
// $("#resetButton").on("click", resetGame);
//
// $("td").click(function () {
//     var image = $(this).find("img");
//     image.show();
//     clickedCards.push(image);
//     image.click(false);
//
//     if (clickCounter % 2 !== 0) {
//       var card1 = clickedCards[0][0].getAttribute("src");
//       var card2 = clickedCards[1][0].getAttribute("src");
//       if (card1 == card2 ) {
//       console.log("match");
//       clickedCards = [];
//       correctPairs++;
//         if (correctPairs === 8) {
//           alert("You've won the game!")
//         }
//       }
//       else {
//         console.log("don't match");
//         image1 = ($(clickedCards[0]));
//         image2 = ($(clickedCards[1]));
//         setTimeout("image1.fadeOut()", 1000);
//         setTimeout("image2.fadeOut()", 1000);
//         clickedCards = [];
//       }
//     } //ends if clickCount is odd
//     clickCounter++;
//     $("#clickNumber").html(clickCounter);
//     console.log(clickCounter);
//   })



//   compareCards();
// }; //ends function findMatch
//
// function compareCards () {
//   while (clickedCards === !"") {
//
//   } //ends while loop
// } //ends compareCards function



}); //ends ready method
