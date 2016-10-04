$(function() {
  var slider1 = $('#one .image-list'),
  slider2 = $('#two .image-list'),
  slider4 = $('#four .image-list');

  var slide_count = slider1.children().length,
  slide_count2 = slider2.children().length,
  slide_count4 = slider4.children().length;

  var slide_width_pc = 100.0 / slide_count,
  slide_width_pc2 = 100.0 / slide_count2,
  slide_height_pc4 = 100.0 / slide_count2;

  var slide_index = 0,
  slide_index2 = 0,
  slide_index4 = 0;

  var text_index = 0,
  text_index2 = 0,
  text_index4 = 0;

  var textItems = $('#one .text-item'),
  itemAmt = textItems.length;

  var textItems2 = $('#two .text-item'),
  itemAmt2 = textItems2.length;

  var textItems4 = $('#four .text-item'),
  itemAmt4 = textItems4.length;

  var slideText = function() {
    var text = $('#one .text-item').eq(text_index);
    textItems.hide();
    text.css('display', 'block');
  };

  var slideText2 = function() {
    var text2 = $('#two .text-item').eq(text_index2);
    textItems2.hide();
    text2.css('display', 'block');
  };

  var slideText4 = function() {
    var text4 = $('#four .text-item').eq(text_index4);
    textItems4.hide();
    text4.css('display', 'block');
  };

// 1 slider
  var slideImg = function(new_slide_index) {
    if (new_slide_index >= slide_count) {
      slideImg(slide_index - 1);
      return;
    }
    var margin_left_pc = (new_slide_index * -100) + '%';
    slider1.animate({ 'margin-left': margin_left_pc }, 600, function() {
      slide_index = new_slide_index;
    }
    );
  };

// 2 slider
  var slideImg2 = function(new_slide_index2) {
    if (new_slide_index2 >= slide_count2) {
      slideImg2(slide_index2 - 1);
      return;
    }
    var margin_left_pc2 = (new_slide_index2 * -100) + '%';
    slider2.animate({ 'margin-left': margin_left_pc2 }, 600, function() {
      slide_index2 = new_slide_index2;
    }
    );
  };

// 4 slider
  var slideImg4 = function(new_slide_index4) {
    if (new_slide_index4 >= slide_count4) {
      slideImg4(slide_index4 - 1);
      return;
    }
    var margin_top_pc4 = (new_slide_index4 * -100) + '%';
    slider4.animate({ 'margin-top': margin_top_pc4 }, 600, function() {
      slide_index4 = new_slide_index4;
    }
    );
  };

  slider1.find('.image-item').each(function(indx) {
    var left_percent = (slide_width_pc * indx) + '%';
    $(this).css({'left': left_percent});
    // $(this).css({width:(100 / slide_count) + "%"});
  });

  slider2.find('.image-item').each(function(indx) {
    var left_percent2 = (slide_width_pc2 * indx) + '%';
    $(this).css({'left': left_percent2});
    // $(this).css({width:(100 / slide_count) + "%"});
  });

  slider4.find('.image-item').each(function(indx) {
    var top_percent4 = (slide_height_pc4 * indx) + '%';
    $(this).css({'top': top_percent4});
    // $(this).css({width:(100 / slide_count) + "%"});
  });

  // Listen for click of button
  $('.js-first-control').click(function() {
    slideImg(slide_index + 1);

    text_index += 1;
    if (text_index > itemAmt - 1) {
      text_index = 0;
    }
    textItems.fadeIn(600);
    slideText();
  });
  // return

  $('.js-second-control').click(function() {
    slideImg2(slide_index2 + 1);

    text_index2 += 1;
    if (text_index2 > itemAmt2 - 1) {
      text_index2 = 0;
    }
    textItems2.fadeIn(600);
    slideText2();
  });

  $('.js-fourth-control').click(function() {
    slideImg4(slide_index4 + 1);
    text_index4 += 1;
    if (text_index4 > itemAmt4 - 1) {
      text_index4 = 0;
    }
    textItems4.fadeIn(600);
    slideText4();
  });

});
