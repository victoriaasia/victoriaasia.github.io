(function() {
  $(function() {
    var itemAmt, itemAmt2, slideImg, slideImg2, slideText, slideText2, slide_count, slide_count2, slide_index, slide_index2, slide_width_pc, slide_width_pc2, slider1, slider2, textItems, textItems2, text_index, text_index2;
    slider1 = $('.-one .image-list');
    slider2 = $('.-two .image-list');
    slide_count = slider1.children().length;
    slide_count2 = slider2.children().length;
    slide_width_pc = 100.0 / slide_count;
    slide_width_pc2 = 100.0 / slide_count2;
    slide_index = 0;
    slide_index2 = 0;
    text_index = 0;
    text_index2 = 0;
    textItems = $('.-one .text-item');
    itemAmt = textItems.length;
    textItems2 = $('.-two .text-item');
    itemAmt2 = textItems2.length;
    slideText = function() {
      var text;
      text = $('.-one .text-item').eq(text_index);
      textItems.hide();
      text.css('display', 'block');
    };
    slideText2 = function() {
      var text2;
      text2 = $('.-two .text-item').eq(text_index2);
      textItems2.hide();
      text2.css('display', 'block');
    };
    slideImg = function(new_slide_index) {
      var margin_left_pc;
      if (new_slide_index >= slide_count) {
        slideImg(slide_index - 1);
        return;
      }
      margin_left_pc = new_slide_index * -100 + '%';
      slider1.animate({
        'margin-left': margin_left_pc
      }, 600, function() {
        slide_index = new_slide_index;
      });
    };
    slideImg2 = function(new_slide_index2) {
      var margin_left_pc2;
      if (new_slide_index2 >= slide_count2) {
        slideImg2(slide_index2 - 1);
        return;
      }
      margin_left_pc2 = new_slide_index2 * -100 + '%';
      slider2.animate({
        'margin-left': margin_left_pc2
      }, 600, function() {
        slide_index2 = new_slide_index2;
      });
    };
    slider1.find('.image-item').each(function(indx) {
      var left_percent;
      left_percent = slide_width_pc * indx + '%';
      $(this).css({
        'left': left_percent
      });
    });
    slider2.find('.image-item').each(function(indx) {
      var left_percent2;
      left_percent2 = slide_width_pc2 * indx + '%';
      $(this).css({
        'left': left_percent2
      });
    });
    $('.js-first-control').click(function() {
      slideImg(slide_index + 1);
      text_index += 1;
      if (text_index > itemAmt - 1) {
        text_index = 0;
      }
      textItems.fadeIn(600);
      slideText();
    });
    return $('.js-second-control').click(function() {
      slideImg2(slide_index2 + 1);
      text_index2 += 1;
      if (text_index2 > itemAmt2 - 1) {
        text_index2 = 0;
      }
      textItems2.fadeIn(600);
      slideText2();
    });
  });

}).call(this);
