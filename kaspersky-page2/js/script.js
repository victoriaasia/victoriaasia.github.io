$(document).ready(function() {

$('#question-one .js-button').click(function() { setTimeout(function() {
  $("#question-one").hide();
  $("#question-two").css('display', 'block');
}, 1000); });

$('#question-two .js-button').click(function() { setTimeout(function() {
  $("#question-two").hide();
  $("#question-three").css('display', 'block');
}, 1000); });

$('#question-three .js-button').click(function() { setTimeout(function() {
  $("#question-three").hide();
  $("#question-four").css('display', 'block');
}, 1000); });

$('#question-four .js-button').click(function() { setTimeout(function() {
  $("#question-four").hide();
  $("#question-five").css('display', 'block');
}, 1000); });


});
