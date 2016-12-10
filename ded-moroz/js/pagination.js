$(document).ready(function() {

  // pagination
  if(window.matchMedia('(min-width: 769px)').matches) {
	   var show_per_page = 9;
     var number_of_items = $('.dm-list').children('li').size();
     var number_of_pages = Math.ceil(number_of_items / show_per_page);
     $('.dm-list-wrapper').append('<div class=dm-page-controls></div><input id=current_page type=hidden><input id=show_per_page type=hidden>');
     $('#current_page').val(0);
     $('#show_per_page').val(show_per_page);
     var navigation_html = '';
     var current_link = 0;
     while (number_of_pages > current_link) {
         navigation_html += '<a class="dm-page" onclick="go_to_page(' + current_link + ')" longdesc="' + current_link + '">' + (current_link + 1) + '</a>';
         current_link++;
     }
     $('.dm-page-controls').html(navigation_html);
     $('.dm-page-controls .dm-page:first').addClass('active');
     $('.dm-list').children().css('display', 'none');
     $('.dm-list').children().slice(0, show_per_page).css('display', 'inline-flex');
}	else if(window.matchMedia('(max-width: 768px)').matches) {
    var show_per_page = 6;
    var number_of_items = $('.dm-list').children('li').size();
    var number_of_pages = Math.ceil(number_of_items / show_per_page);
    $('.dm-list-wrapper').append('<div class=dm-page-controls></div><input id=current_page type=hidden><input id=show_per_page type=hidden>');
    $('#current_page').val(0);
    $('#show_per_page').val(show_per_page);
    var navigation_html = '';
    var current_link = 0;
    while (number_of_pages > current_link) {
        navigation_html += '<a class="dm-page" onclick="go_to_page(' + current_link + ')" longdesc="' + current_link + '">' + (current_link + 1) + '</a>';
        current_link++;
    }
    $('.dm-page-controls').html(navigation_html);
    $('.dm-page-controls .dm-page:first').addClass('active');
    $('.dm-list').children().css('display', 'none');
    $('.dm-list').children().slice(0, show_per_page).css('display', 'inline-flex');
	}

});

function go_to_page(page_num) {
    var show_per_page = parseInt($('#show_per_page').val(), 0);
    start_from = page_num * show_per_page;
    end_on = start_from + show_per_page;
    $('.dm-list').children().css('display', 'none').slice(start_from, end_on).css('display', 'inline-flex');
    $('.dm-page[longdesc=' + page_num + ']').addClass('active').siblings('.active').removeClass('active');
    $('#current_page').val(page_num);
}
