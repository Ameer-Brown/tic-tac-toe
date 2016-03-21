
// wait for the DOM to finish loading
$(document).ready(function(){
  //Keep track of who has the controller
    var onStix = 0;
    var clickCount = 0;
  $("#bloc11, #bloc12, #bloc13, #bloc21, #bloc22, #bloc23, #bloc31, #bloc32, #bloc33").click(function(){
    var bloca = $(this);
    if(onStix===0){
    // alternate who has the controller
    onStix = 1;
    clickCount ++;
    bloca.text("o");
    bloca.css("background","url(oflow.jpg)");
    // block double claiming
    bloca.off();
    // winner(true);
  }
  else {
    // alternate who has rhe controller
  onStix = 0;
  clickCount ++;
  bloca.text("x");
  bloca.css("background","url(xwind.jpg)");
  // block double claiming
  bloca.off();}
  console.log(clickCount);

// Set winner
  var flowa = $('#bloc11').text() === "o" && $('#bloc12').text() === "o" && $('#bloc13').text() === "o" ||
  $('#bloc11').text() === "x" && $('#bloc12').text() === "x" && $('#bloc13').text() === "x";
  var flowb = $('#bloc21').text() === "o" && $('#bloc22').text() === "o" && $('#bloc23').text() === "o" ||
  $('#bloc21').text() === "x" && $('#bloc22').text() === "x" && $('#block23').text() === "x";
  var flowc = $('#bloc31').text() === "o" && $('#bloc32').text() === "o" && $('#bloc33').text() === "o" ||
  $('#bloc31').text() === "x" && $('#bloc32').text() === "x" && $('bloc33').text() === "x";

  var flow1 = $('#bloc11').text() === "o" && $('#bloc21').text() === "o" && $('#bloc31').text() === "o" ||
  $('#bloc11').text() === "x" && $('#bloc21').text() === "x" && $('#bloc31').text() === "x";
  var flow2 = $('#bloc12').text() === "o" && $('#bloc22').text() === "o" && $('#bloc32').text() === "o" ||
  $('#bloc12').text() === "x" && $('#bloc22').text() === "x" && $('#bloc32').text() === "x";
  var flow3 = $('#bloc13').text() === "o" && $('#bloc23').text() === "o" && $('#bloc33').text() === "o" ||
  $('#bloc13').text() === "x" && $('#bloc23').text() === "x" && $('#bloc33').text() === "x";

  var flowdiag1 = $('#bloc11').text() === "o" && $('#bloc22').text() === "o" && $('#bloc33').text() === "o" ||
  $('#bloc11').text() === "x" && $('#bloc22').text() === "x" && $('#bloc33').text() === "x";
  var flowdiag2 = $('#bloc13').text() === "o" && $('#bloc22').text() === "o" && $('#bloc31').text() === "o" ||
  $('#bloc13').text() === "x" && $('#bloc22').text() === "x" && $('#bloc31').text() === "x";

  //return winner
  if ( flowa || flowb || flowc || flow1 || flow2 || flow3 || flowdiag1 || flowdiag2){
      if (clickCount % 2 === 0){
        alert("X marks the WIN!");
      }
      else {
        alert("O crap! You WON!");
      }
  }
  else if ( clickCount === 9){
      alert("Tie, Play Again!");
  }
  
// Reset Board
  $("button").on("click", function (){
  document.querySelector("button").addEventListener("click", function() {
  localStorage.clear();
  window.location.reload();
  clickCount = 0;
});

});

});

});
