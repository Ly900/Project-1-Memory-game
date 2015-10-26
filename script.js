$(document).ready(function() {

$("img").hide();

function findMatch () {
  var image1;
  $("td").click(function () {
  image1 = $(this).find("img").show().attr("src");
  console.log(image1);
  $(this).off();
  });

  var image2;
  $("td").click(function () {
  image2 = $(this).find("img").show().attr("src");
  console.log(image2);
  $(this).off();
  });

}; //ends function findMatch


//   function compareImages() {
//     if (image1 == image2) {
//       console.log("You've got a match!");
//     }
//   }
// } //ends function findMatch
findMatch();

}); //ends ready method
