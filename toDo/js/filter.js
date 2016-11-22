var $btns = $('.btn').click(function() {
  if (this.id == 'all') {
    $('li').fadeIn(450);
  } else {
    var $el = $('.' + this.id).hide();
    $('li').not($el).fadeIn(450);
  }
  $btns.removeClass('active');
  $(this).addClass('active');
})
