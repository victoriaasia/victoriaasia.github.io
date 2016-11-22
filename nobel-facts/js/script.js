jQuery(document).ready(function ($) {

	var slideCount = $('#nob-facts-slider ul li').length;
	var slideWidth = $('#nob-facts-slider ul li').width();
	var slideHeight = $('#nob-facts-slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;

	$('#nob-facts-slider').css({ width: slideWidth, height: slideHeight });

	$('#nob-facts-slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#nob-facts-slider ul li:last-child').prependTo('#nob-facts-slider ul');

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

});
