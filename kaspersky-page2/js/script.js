$(document).ready(function() {

$('#question-one .js-button').click(function() { setTimeout(function() {
  $("#question-one").hide();
  $("#page-1").hide();
  $("#question-two").css('display', 'block');
  $("#page-2").css('display', 'block');
}, 1000); });

$('#question-two .js-button').click(function() { setTimeout(function() {
  $("#question-two").hide();
  $("#page-2").hide();
  $("#question-three").css('display', 'block');
  $("#page-3").css('display', 'block');
}, 1000); });

$('#question-three .js-button').click(function() { setTimeout(function() {
  $("#question-three").hide();
  $("#page-3").hide();
  $("#question-four").css('display', 'block');
  $("#page-4").css('display', 'block');
}, 1000); });

$('#question-four .js-button').click(function() { setTimeout(function() {
  $("#question-four").hide();
  $("#page-4").hide();
  $("#question-five").css('display', 'block');
  $("#page-5").css('display', 'block');
}, 1000); });

$('#question-five .js-button').click(function() { setTimeout(function() {
  $("#question-five").hide();
  $("#page-5").hide();
  $("#question-six").css('display', 'block');
  $("#page-6").css('display', 'block');
}, 1000); });

$('#question-six .js-button').click(function() { setTimeout(function() {
  $("#question-six").hide();
  $("#page-6").hide();
  $("#question-seven").css('display', 'block');
  $("#page-7").css('display', 'block');
}, 1000); });

$('#question-seven .js-button').click(function() { setTimeout(function() {
  $("#question-seven").hide();
  $("#page-7").hide();
  $("#question-eight").css('display', 'block');
  $("#page-8").css('display', 'block');
}, 1000); });

$('#question-eight .js-button').click(function() { setTimeout(function() {
  $("#question-eight").hide();
  $("#page-8").hide();
  $("#question-nine").css('display', 'block');
  $("#page-9").css('display', 'block');
}, 1000); });

$('#question-nine .js-button').click(function() { setTimeout(function() {
  $("#question-nine").hide();
  $("#page-9").hide();
  $("#question-ten").css('display', 'block');
  $("#page-10").css('display', 'block');
}, 1000); });

$('#question-ten .js-button').click(function() { setTimeout(function() {
  $("#question-ten").hide();
  $("#page-10").hide();
  var msg = $('#question-form').serialize();
    $.ajax({
      type: 'POST',
      url: 'result.php',
      data: msg,
      // success: function(data) {
      //   $('#question-form').html(data);
      // },
      // error:  function(xhr, str){
      // alert('Возникла ошибка: ' + xhr.responseCode);
      // }
    });
}, 1000); });

});
