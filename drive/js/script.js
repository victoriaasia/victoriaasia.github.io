// Scroll to Top

$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {
        $('#to-top').fadeIn(200);
    } else {
        $('#to-top').fadeOut(200);
    }
});
$('#to-top').click(function() {
    $('body,html').animate({
        scrollTop : 0
    }, 500);
});
