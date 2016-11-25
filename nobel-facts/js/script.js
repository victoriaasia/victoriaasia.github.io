jQuery(document).ready(function ($) {

if(window.matchMedia('(min-width: 769px)').matches) {
	var slideCount = $('#nob-facts-slider ul li').length;
	var slideWidth = $('#nob-facts-slider ul li').width();
	var slideHeight = $('#nob-facts-slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	$('#nob-facts-slider ul li:last-child').prependTo('#nob-facts-slider ul');
	slideShow();
}	else if(window.matchMedia('(max-width: 768px)').matches) {
				$('#nob-facts-slider').css('width', '768').css('height', '780px');
				var slideCount = $('#nob-facts-slider ul li').length;
				var slideWidth = $('#nob-facts-slider ul li').css('width', '768px');
				var slideHeight = $('#nob-facts-slider ul li').css('height', '780px');
				var sliderUlWidth = slideCount * slideWidth;
				slideShow();
	}

			function slideShow() {
				$('#nob-facts-slider').css({ width: slideWidth, height: slideHeight });
				$('#nob-facts-slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

			    function moveLeft() {
			        $('#nob-facts-slider ul').animate({
			            left: + slideWidth
			        }, 600, function () {
			            $('#nob-facts-slider ul li:last-child').prependTo('#nob-facts-slider ul');
			            $('#nob-facts-slider ul').css('left', '');
			        });
			    };

			    function moveRight() {
			        $('#nob-facts-slider ul').animate({
			            left: - slideWidth
			        }, 600, function () {
			            $('#nob-facts-slider ul li:first-child').appendTo('#nob-facts-slider ul');
			            $('#nob-facts-slider ul').css('left', '');
			        });
			    };
			    $('a.prev').click(function () {
			        moveLeft();
			    });
			    $('a.next').click(function () {
			        moveRight();
			    });
			}

});
