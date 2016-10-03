$ ->
  slider1 = $('.-one .image-list')
  slider2 = $('.-two .image-list')

  slide_count = slider1.children().length
  slide_count2 = slider2.children().length

  slide_width_pc = 100.0 / slide_count
  slide_width_pc2 = 100.0 / slide_count2

  slide_index = 0
  slide_index2 = 0

  text_index = 0
  text_index2 = 0

  textItems = $('.-one .text-item')
  itemAmt = textItems.length

  textItems2 = $('.-two .text-item')
  itemAmt2 = textItems2.length

  slideText = ->
    text = $('.-one .text-item').eq(text_index)
    textItems.hide()
    text.css 'display', 'block'
    return

  slideText2 = ->
    text2 = $('.-two .text-item').eq(text_index2)
    textItems2.hide()
    text2.css 'display', 'block'
    return

# 1 slider
  slideImg = (new_slide_index) ->
    if new_slide_index >= slide_count
      slideImg slide_index - 1
      return
    margin_left_pc = new_slide_index * -100 + '%'
    slider1.animate { 'margin-left': margin_left_pc }, 600, ->
      slide_index = new_slide_index
      return
    return

# 2 slider
  slideImg2 = (new_slide_index2) ->
    if new_slide_index2 >= slide_count2
      slideImg2 slide_index2 - 1
      return
    margin_left_pc2 = new_slide_index2 * -100 + '%'
    slider2.animate { 'margin-left': margin_left_pc2 }, 600, ->
      slide_index2 = new_slide_index2
      return
    return

  slider1.find('.image-item').each (indx) ->
    left_percent = slide_width_pc * indx + '%'
    $(this).css 'left': left_percent
    # $(this).css({width:(100 / slide_count) + "%"});
    return

  slider2.find('.image-item').each (indx) ->
    left_percent2 = slide_width_pc2 * indx + '%'
    $(this).css 'left': left_percent2
    # $(this).css({width:(100 / slide_count) + "%"});
    return

  # Listen for click of button
  $('.js-first-control').click ->
    slideImg slide_index + 1
    text_index += 1
    if text_index > itemAmt - 1
      text_index = 0
    textItems.fadeIn 600
    slideText()
    return
  # return

  $('.js-second-control').click ->
    slideImg2 slide_index2 + 1
    text_index2 += 1
    if text_index2 > itemAmt2 - 1
      text_index2 = 0
    textItems2.fadeIn 600
    slideText2()
    return
  # return
