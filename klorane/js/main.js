$(function() {

  var slider1 = $('#one .image-list'),
  slider2 = $('#two .image-list'),
  slider3 = $('#three .image-list'),
  slider4 = $('#four .image-list');

  var slide_count = slider1.children().length,
  slide_count2 = slider2.children().length,
  slide_count3 = slider3.children().length,
  slide_count4 = slider4.children().length;

  var slide_width_pc = 100.0 / slide_count,
  slide_height_pc2 = 100.0 / slide_count2,
  slide_width_pc3 = 100.0 / slide_count3,
  slide_height_pc4 = 100.0 / slide_count2;

  var slide_index = 0,
  slide_index2 = 0,
  slide_index3 = 0,
  slide_index4 = 0;

  var text_index = 0,
  text_index2 = 0,
  text_index3 = 0,
  text_index4 = 0;

  var textItems = $('#one .text-item'),
  itemAmt = textItems.length;

  var textItems2 = $('#two .text-item'),
  itemAmt2 = textItems2.length;

  var textItems3 = $('#three .text-item'),
  itemAmt3 = textItems3.length;
  var product = $('#product-img');

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

  var slideText3 = function() {
    var text3 = $('#three .text-item').eq(text_index3);
    textItems3.hide();
    text3.css('display', 'block');
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
    slider2.animate({ 'margin-top': margin_left_pc2 }, 600, function() {
      slide_index2 = new_slide_index2;
    }
    );
  };

//3 slider

  var slideImg3 = function(new_slide_index3) {
    if (new_slide_index3 >= slide_count3) {
      slideImg3(slide_index3 - 1);
      return;
    }
    var margin_left_pc3 = (new_slide_index3 * -100) + '%';
    slider3.animate({ 'margin-left': margin_left_pc3 }, 600, function() {
      slide_index3 = new_slide_index3;
    });
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
    });
  };


  slider1.find('.image-item').each(function(indx) {
    var left_percent = (slide_width_pc * indx) + '%';
    $(this).css({'left': left_percent});
    // $(this).css({width:(100 / slide_count) + "%"});
  });

  slider2.find('.image-item').each(function(indx) {
    var left_percent2 = (slide_height_pc2 * indx) + '%';
    $(this).css({'top': left_percent2});
    // $(this).css({width:(100 / slide_count) + "%"});
  });

  slider3.find('.image-item').each(function(indx) {
    var top_percent3 = (slide_width_pc3 * indx) + '%';
    $(this).css({'left': top_percent3});
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

  $('.js-third-control').click(function() {
    slideImg3(slide_index3 + 1);

    if (slide_index3 >= 1) {
      product.css({'opacity': '0', 'transition-delay': '0s'});
    } else {
      product.css({'opacity': '1', 'transition-delay': '0.5s'});
    }

    text_index3 += 1;
    if (text_index3 > itemAmt3 - 1) {
      text_index3 = 0;
    }
    textItems3.fadeIn(600);
    slideText3();
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
