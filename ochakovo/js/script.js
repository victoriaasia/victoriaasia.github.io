let $window = $(window),
win_height = $window.height() * 1.1,
isTouch = Modernizr.touch;

$window.on('scroll', revealOnScroll);

function revealOnScroll() {
    let scrolled = $window.scrollTop();

    $(".sp-highlight:not(sp-animated)").each(function () {
      var $this     = $(this),
          offsetTop = $this.offset().top;

      if (scrolled + win_height > offsetTop) {
        $this.addClass('sp-animated');
      }
    });

    let elem = document.querySelectorAll('.sp-animated');

    for(let i = 0; i < elem.length; i++) {
      elem[i].addEventListener('webkitAnimationEnd', function(event) {
        this.style.display = 'none';
      }, false);
    }
  }
