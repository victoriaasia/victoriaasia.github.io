var $window = $(window),
win_height = $window.height() * 1.1,
isTouch = Modernizr.touch;

$window.on('scroll', revealOnScroll);

function revealOnScroll() {
    let scrolled = $window.scrollTop();
    let elem = $(".sp-highlight:not(sp-animated)");
    let elemComb = $(".sp-highlight-comb:not(sp-animated-comb)");

    elem.each(function() {
      var $this     = $(this),
          offsetTop = $this.offset().top;
      if (scrolled + win_height > offsetTop) {
        $this.addClass('sp-animated');
      }
    });

    elemComb.each(function() {
      var $this     = $(this),
          offsetTop = $this.offset().top;
      if (scrolled + win_height > offsetTop) {
        $this.addClass('sp-animated-comb');
      }
    });

    // hide when animation end
    let animated = document.querySelectorAll('.sp-animated');
    let animatedComb = document.querySelectorAll('.sp-animated-comb');

    for(let i = 0; i < animated.length; i++) {
      animated[i].addEventListener('webkitAnimationEnd', function(event) {
        this.style.display = 'none';
      }, false);
    }
    for(let i = 0; i < animatedComb.length; i++) {
      animatedComb[i].addEventListener('webkitAnimationEnd', function(event) {
        this.style.display = 'none';
      }, false);
    }
  }
