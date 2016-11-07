/*menu hover*/

$(document).ready(function() {
  $('.menu-flower area').hover(function() {
    var parent = $(this).parent().parent();
    var num = parent.hasClass('flower_0') ? 0 : 1;
    var ind = $(this).index()+1;
    if ($(this).attr('href') !== '')
      parent.find('img').attr('src',"img/flowers/flower_"+num+"_"+ind+".png")
  },
  function() {
    var parent = $(this).parent().parent();
    var num = parent.hasClass('flower_0') ? 0 : 1;
    parent.find('img').attr('src',"img/flowers/flower_"+num+"_0.png")
  });

});

// close btn

if ($.cookie('bud-closed') != 1) {
    $("#bud-footer").show();
  };

  $('.btn-close').click(function() {
    $.cookie('bud-closed', 1, {expires: 1});
    $(this).parent().hide();
    $('.m__content').css('padding-bottom', '0');
    $('.m__articles').css('overflow', 'hidden');
  });
