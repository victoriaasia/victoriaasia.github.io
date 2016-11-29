
$('.nob-stars-block1 .js-button').change(function(){
        if ($('.js-button:checked')) {
            $('#answer-img1').attr('src', 'img/answer1-hidden.png');
        }
});
$('.nob-stars-block2 .js-button').change(function(){
        if ($('.js-button:checked')) {
            $('#answer-img2').attr('src', 'img/answer2-hidden.png');
        }
});
$('.nob-stars-block3 .js-button').change(function(){
        if ($('.js-button:checked')) {
            $('#answer-img3').attr('src', 'img/answer3-hidden.png');
        }
});
$('.nob-stars-block4 .js-button').change(function(){
        if ($('.js-button:checked')) {
            $('#answer-img4').attr('src', 'img/answer4-hidden.png');
        }
});
$('.nob-stars-block5 .js-button').change(function(){
        if ($('.js-button:checked')) {
            $('#answer-img5').attr('src', 'img/answer5-hidden.png');
        }
});
$('.nob-stars-block6 .js-button').change(function(){
        if ($('.js-button:checked')) {
            $('#answer-img6').attr('src', 'img/answer6-hidden.png');
        }
});
$('.nob-stars-block7 .js-button').change(function(){
        if ($('.js-button:checked')) {
            $('#answer-img7').attr('src', 'img/answer7-hidden.png');
        }
});


$('.nob-stars-block1 .js-button').click(function() { setTimeout(function() {
  $('.nob-stars-block1').hide();
  $('.nob-stars-block2').css('display', 'block');
}, 2000); });

$('.nob-stars-block2 .js-button').click(function() { setTimeout(function() {
  $('.nob-stars-block2').hide();
  $('.nob-stars-block3').css('display', 'block');
}, 2000); });

$('.nob-stars-block3 .js-button').click(function() { setTimeout(function() {
  $('.nob-stars-block3').hide();
  $('.nob-stars-block4').css('display', 'block');
}, 2000); });

$('.nob-stars-block4 .js-button').click(function() { setTimeout(function() {
  $('.nob-stars-block4').hide();
  $('.nob-stars-block5').css('display', 'block');
}, 2000); });

$('.nob-stars-block5 .js-button').click(function() { setTimeout(function() {
  $('.nob-stars-block5').hide();
  $('.nob-stars-block6').css('display', 'block');
}, 2000); });

$('.nob-stars-block6 .js-button').click(function() { setTimeout(function() {
  $('.nob-stars-block6').hide();
  $('.nob-stars-block7').css('display', 'block');
}, 2000); });

$('.nob-stars-block7 .js-button').click(function() { setTimeout(function() {
  $('.nob-stars-block7').hide();
  var msg = $('#nob-stars-form').submit();
}, 2000); });
