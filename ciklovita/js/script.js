/*menu hover*/

$(document).ready(function() {
  $('.menu__menu-flower area').hover(function() {
    var parent = $(this).parent().parent();
    var num = parent.hasClass('flower_0') ? 0 : 1;
    var ind = $(this).index()+1;
    if ($(this).attr('href') == '#')
      parent.find('img').attr('src',"img/flowers/flower_"+num+"_"+ind+".png")
  },
  function() {
    var parent = $(this).parent().parent();
    var num = parent.hasClass('flower_0') ? 0 : 1;
    parent.find('img').attr('src',"img/flowers/flower_"+num+"_0.png")
  });

});
