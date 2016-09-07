$(document).ready(function() {
  $('a').click(function() {
    $(this).parent('.flip').addClass('selected');
    $('.flip').hide();
    var url = $(this).attr('href');
    $.ajax({
      url: url + '?ajax=1',
      success: function(data) {
        $('#content').html(data);
      }
    });
    if (url != window.location) {
      window.history.pushState(null, null, url);
    }
    return false;
  });

  $(".footer").load("footer.html");

  // $('#changeColor').hover(function () {
  var colors = ["#a71b3b", "#a6781a", "#1ba768", "#1a48a6"];
  var rand = Math.floor(Math.random() * colors.length);
  $('.color').css("background-color", colors[rand]);
  // });
});

// next & prev buttons
$(window).bind('popstate', function() {
  $.ajax({
    url: location.pathname + '?ajax=1',
    success: function(html) {    
      window.location.replace("index.html");
    }
  });
  $('.flip').removeClass('selected');
});
